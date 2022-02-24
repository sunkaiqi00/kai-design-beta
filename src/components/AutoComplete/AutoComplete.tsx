import React, { useState, useEffect, useRef, ChangeEvent, ReactElement, KeyboardEvent } from "react";
import { Loading3QuartersOutlined } from '@ant-design/icons'

import useDebounce from '../../hooks/useDebounce'
import useClickOutSide from "../../hooks/useClickOutSide";

import Input, { InputProps } from "../Input";
import classNames from "classnames";

export interface optionItem {
  // label: string,
  value: string,
}

export type suggestionType<T = {}> = T & optionItem
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  filterOption: (str: string,) => suggestionType[] | Promise<suggestionType[]>,
  onSelect?: (str: suggestionType) => void,
  renderTemplate?: (item: suggestionType) => ReactElement,
  // options: suggestionType[]
}

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const { filterOption, onSelect, value, renderTemplate, ...resetProps } = props
  const [inputValue, setInputValue] = useState(value as string)
  const [suggestions, setSuggestions] = useState<suggestionType[]>([])
  const [loading, setLoading] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(-1)
  const debounceValue = useDebounce(inputValue)
  // 下拉选择改变了inputValue 触发了useEffect加载一次数据 通过这个变量控制选中后不再加载(不引起组件重新渲染)
  const triggerSearch = useRef(false);
  const componentRef = useRef(null)

  useClickOutSide(componentRef, () => { setSuggestions([]) })

  // 设置高亮行
  const handleHighLightIndex = (index: number) => {
    let i = index < 0 ? 0 : index >= suggestions.length ? index = suggestions.length - 1 : index
    setHighlightIndex(i)
  }
  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      const result = filterOption(debounceValue)
      if (result instanceof Promise) {
        setLoading(true)
        result.then(data => {
          setSuggestions(data)
          setLoading(false)
        })
      } else {
        setSuggestions(result)
      }
    } else {
      setSuggestions([])
    }
    setHighlightIndex(-1)
  }, [debounceValue])


  // 键盘事件
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.code) {
      case 'Enter':
        dropOptionSelect(suggestions[highlightIndex])
        break;
      case 'ArrowDown':
        handleHighLightIndex(highlightIndex + 1)
        break;
      case 'ArrowUp':
        handleHighLightIndex(highlightIndex - 1)
        break;
      case 'Escape':
        setSuggestions([])
        break;
      default:
        break;
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.trim()
    setInputValue(text)
    !triggerSearch.current && (triggerSearch.current = true)
  }

  const dropOptionSelect = (item: suggestionType) => {
    setInputValue(item.value)
    if (onSelect) {
      onSelect(item)
    }
    setSuggestions([])
    triggerSearch.current = false
  }


  const renderDropTemlate = (item: suggestionType) => {
    return renderTemplate ? renderTemplate(item) : item.value
  }

  const renderSugesstions = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          const optionsClasses = classNames('options-item', {
            'options-item-active': index === highlightIndex
          })
          return <li className={optionsClasses} key={item.value} onClick={() => dropOptionSelect(item)}>{renderDropTemlate(item)}</li>
        })}
      </ul>
    )
  }

  return (
    <div className="k-auto-complete" ref={componentRef}>
      <Input
        value={inputValue}
        {...resetProps}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {loading && <Loading3QuartersOutlined spin />}
      {renderSugesstions()}
    </div>

  )
}

export default AutoComplete;
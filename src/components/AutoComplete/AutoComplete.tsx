import React, { useState, useEffect, useRef, ChangeEvent, ReactElement, KeyboardEvent, FocusEvent } from "react";
import { Loading3QuartersOutlined } from '@ant-design/icons'

import useDebounce from '../../hooks/useDebounce'
import useClickOutSide from "../../hooks/useClickOutSide";

import CollapseTransition from "../Transition/CollapseTransition";

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
  notFoundContent?: string | ReactElement
  // options: suggestionType[]
}

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const { filterOption, onSelect, value, renderTemplate, notFoundContent = '暂无内容', ...resetProps } = props
  const [inputValue, setInputValue] = useState(value as string)
  const [suggestions, setSuggestions] = useState<suggestionType[]>([])
  const [loading, setLoading] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(-1)
  const [showOption, setShowOption] = useState(false)
  const [noSuggestion, setNoSuggestion] = useState(false)
  const debounceValue = useDebounce(inputValue)
  // 下拉选择改变了inputValue 触发了useEffect加载一次数据 通过这个变量控制选中后不再加载(不引起组件重新渲染)
  const triggerSearch = useRef(false);
  const componentRef = useRef(null)

  useClickOutSide(componentRef, () => { setShowOption(false) })

  // 设置高亮行
  const handleHighLightIndex = (index: number) => {
    let len = suggestions.length
    let i = index < 0 ? len - 1 : index >= len ? 0 : index
    setHighlightIndex(i)
  }
  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      setShowOption(true)
      const result = filterOption(debounceValue)
      if (result instanceof Promise) {
        setLoading(true)
        result.then(data => {
          setSuggestions(data)
          setLoading(false)
          if (data.length) {
            noSuggestion && setNoSuggestion(false)
          } else {
            setNoSuggestion(true)
          }
        })
      } else {
        setSuggestions(result)
      }
    } else {
      setShowOption(false)

    }
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
        setShowOption(false)
        break;
      default:
        break;
    }
  }

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (inputValue) {
      setShowOption(true)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.trim()
    console.log(text);

    setInputValue(text)
    setHighlightIndex(-1)
    if (!text) {
      setShowOption(false)
      setNoSuggestion(false)
      setSuggestions([])
    }
    !triggerSearch.current && (triggerSearch.current = true)
  }

  const dropOptionSelect = (item: suggestionType, index?: number) => {
    setInputValue(item.value)
    if (typeof index !== 'undefined') {
      setHighlightIndex(index)
    }
    if (onSelect) {
      onSelect(item)
    }
    setShowOption(false)
    triggerSearch.current = false
  }


  const renderDropTemlate = (item: suggestionType) => {
    return renderTemplate ? renderTemplate(item) : item.value
  }
  const emptyStyle = (suggestions.length === 0 && inputValue) ? { padding: '30px 0' } : {}
  const renderSugesstions = () => {
    return (
      <CollapseTransition in={showOption} addEndListener={() => { }}>
        <ul className="auto-complete-options-wrapper" style={emptyStyle}>
          {/* <div className="loading-tooltip"><Loading3QuartersOutlined spin /></div> */}
          {noSuggestion && <div className="auto-complete-not-found-content">{notFoundContent}</div>}
          {loading && <div className="loading-tooltip"><Loading3QuartersOutlined spin /></div>}
          {suggestions.map((item, index) => {
            const optionsClasses = classNames('options-item', {
              'options-item-active': index === highlightIndex
            })
            return <li className={optionsClasses} key={item.value} onClick={() => dropOptionSelect(item, index)}>{renderDropTemlate(item)}</li>
          })}
        </ul>
      </CollapseTransition>

    )
  }

  return (
    <div className="kai-auto-complete" ref={componentRef}>
      <Input
        value={inputValue}
        {...resetProps}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
      />
      {renderSugesstions()}
    </div>

  )
}

export default AutoComplete;
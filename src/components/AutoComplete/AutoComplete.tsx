import React, { useState, useEffect, ChangeEvent, ReactElement } from "react";
import { Loading3QuartersOutlined } from '@ant-design/icons'

import useDebounce from '../../hooks/useDebounce'

import Input, { InputProps } from "../Input";

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

  const debounceValue = useDebounce(inputValue)
  useEffect(() => {
    if (debounceValue) {
      const result = filterOption(debounceValue)
      if (result instanceof Promise) {
        console.log(result);
        setLoading(true)
        result.then(data => {
          console.log(data);
          setSuggestions(data)
          setLoading(false)
        })
      } else {
        setSuggestions(result)
      }

    } else {
      setSuggestions([])
    }
  }, [debounceValue])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.trim()
    setInputValue(text)

  }

  const dropOptionClick = (item: suggestionType) => {
    setInputValue(item.value)
    if (onSelect) {
      onSelect(item)
    }
    setSuggestions([])
  }


  const renderDropTemlate = (item: suggestionType) => {
    return renderTemplate ? renderTemplate(item) : item.value
  }

  const renderSugesstions = () => {
    return (
      <ul>
        {suggestions.map(item => {
          return <li key={item.value} onClick={() => dropOptionClick(item)}>{renderDropTemlate(item)}</li>
        })}
      </ul>
    )
  }

  return (
    <div className="k-auto-complete">
      <Input value={inputValue} {...resetProps} onChange={handleChange} />
      {loading && <Loading3QuartersOutlined spin />}
      {renderSugesstions()}
    </div>

  )
}

export default AutoComplete;
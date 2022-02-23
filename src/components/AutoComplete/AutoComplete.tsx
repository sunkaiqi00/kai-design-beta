import React, { useState, ChangeEvent, ReactElement } from "react";
import Input, { InputProps } from "../Input";

export interface optionItem {
  // label: string,
  value: string
}

export type suggestionType<T = {}> = T & optionItem
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  filterOption: (str: string,) => suggestionType[],
  onSelect?: (str: string) => void,
  renderTemplate?: (item: suggestionType) => ReactElement,
  // options: suggestionType[]
}

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const { filterOption, onSelect, value, renderTemplate, ...resetProps } = props
  const [inputValue, setInputValue] = useState(value || '')
  const [suggestions, setSuggestions] = useState<suggestionType[]>([])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.trim()
    setInputValue(text)
    if (text) {
      const result = filterOption(text)
      setSuggestions(result)
    } else {
      setSuggestions([])
    }
  }

  const dropOptionClick = (item: suggestionType) => {
    setInputValue(item.value)
    if (onSelect) {
      onSelect(item.value)
    }
    setSuggestions([])
  }


  const renderDropTemlate = (item: suggestionType) => {
    return renderTemplate ? renderTemplate(item) : item.value
  }

  const renderSugesstions = () => {
    console.log(suggestions);

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
      {renderSugesstions()}
    </div>

  )
}

export default AutoComplete;
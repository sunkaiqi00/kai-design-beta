import React, { FC, useState } from "react";

import AutoComplete from "../components/AutoComplete";
import { suggestionType } from "../components/AutoComplete/AutoComplete";


interface personType {
  label: string, value: string
}

const AutoCompleteExample: FC = () => {
  const [text, setText] = useState('')
  const [person, setPerson] = useState('')
  const [filterPerson, setFilterPerson] = useState([])
  const options = ['vue', 'react', 'javaScript', 'html', 'css', 'uniapp', 'flutter', 'react-native']


  const personOption: suggestionType<personType>[] = [
    { label: '1', value: 'sunkaqi' },
    { label: '2', value: 'kaihuai' },
    { label: '3', value: 'snake' },
    { label: '4', value: 'haha' }
  ]

  const handleEvent = (str: string) => {
    return options.filter(item => item.includes(str)).map(item => ({ value: item }))
  }
  const handleSelect = (text: string) => {
    setText(text)
  }
  const renderTemplate = (item: suggestionType) => {
    console.log(item);

    return <h3>Text: {item.value}</h3>
  }


  const filterCondition = (text: string) => {
    console.log(text);

    return personOption.filter(item => item.value.includes(text))

  }

  const onSelect = (item: string) => {
    setPerson(item)
  }
  return (
    <>
      <AutoComplete
        value={text}
        filterOption={handleEvent}
        onSelect={handleSelect}
        renderTemplate={renderTemplate}
      />
      <br />
      <AutoComplete
        value={person}
        filterOption={filterCondition}
        onSelect={onSelect}
        renderTemplate={renderTemplate}
      />
    </>
  )
}

export default AutoCompleteExample

import React, { FC, useState } from "react";

import AutoComplete from "../components/AutoComplete";
import { suggestionType } from "../components/AutoComplete/AutoComplete";


interface personType {
  label: string, value: string
}

interface GithubUser {
  avatar_url: string,
  login: string,
  id: number
}

const AutoCompleteExample: FC = () => {
  const [text, setText] = useState('')
  const [person, setPerson] = useState('')
  const [user, setUser] = useState('')
  // example 1
  const options = ['vue', 'react', 'javaScript', 'html', 'css', 'uniapp', 'flutter', 'react-native']

  // example 2
  const personOption: suggestionType<personType>[] = [
    { label: '1', value: 'sunkaqi' },
    { label: '2', value: 'kaihuai' },
    { label: '3', value: 'snake' },
    { label: '4', value: 'haha' }
  ]

  // example 1
  const handleEvent = (str: string) => {
    return options.filter(item => item.includes(str)).map(item => ({ value: item }))
  }
  const handleSelect = (item: suggestionType) => {
    console.log(item);

    setText(item.value)
  }



  // example 2
  const filterCondition = (text: string) => {
    console.log(text);
    return personOption.filter(item => item.value.includes(text))
  }
  const onSelect = (item: suggestionType) => {
    console.log(item);
    setPerson(item.value)
  }

  // public
  const renderTemplate = (item: suggestionType) => {
    console.log(item);
    return <h3>Text: {item.value}</h3>
  }


  // example 3
  const fetchFiterOptions = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        console.log(items);
        return items.slice(0, 10).map((item: any): suggestionType<GithubUser> => ({ value: item.login, ...item }))
      })
  }

  const fetchSelect = (item: suggestionType) => {
    console.log(item);
    setUser(item.value)
  }

  const renderFetchTemplate = (val: suggestionType) => {
    const item = val as suggestionType<GithubUser>;
    return <div>Name: {item.login}</div>
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
      <br />
      <h2>异步加载</h2>
      <AutoComplete
        value={user}
        filterOption={fetchFiterOptions}
        onSelect={fetchSelect}
        renderTemplate={renderFetchTemplate}
      />
    </>
  )
}

export default AutoCompleteExample

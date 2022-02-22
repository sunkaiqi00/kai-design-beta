import React from "react";
import { SearchOutlined } from '@ant-design/icons';
import Input from "../components/Input";

const InputExample = () => {
  return (
    <>
      <h2>基础输入框</h2>
      {/* <Input size="large" placeholder="请输入内容..." />
      <br />
      <Input disabled value='asbfabd' />
      <br />
      <Input placeholder="请输入内容..." />
      <br />
      <Input size="small" placeholder="请输入内容..." />
      <br />
      <Input size="small" /> */}
      {/* prefixIcon */}
      {/* <h2>前缀图标输入框</h2>
      <Input size="large" prefixIcon={<SearchOutlined />} placeholder="请输入内容..." />
      <br />
      <Input prefixIcon={<SearchOutlined />} placeholder="请输入内容..." />
      <br />
      <Input size="small" prefixIcon={<SearchOutlined />} placeholder="请输入内容..." />
      <h2>后缀图标输入框</h2>
      <Input size="large" suffix={<SearchOutlined />} placeholder="请输入内容..." />
      <br />
      <Input suffix={<SearchOutlined />} placeholder="请输入内容..." />
      <br />
      <Input size="small" suffix={<SearchOutlined />} placeholder="请输入内容..." /> */}
      <h2>前置/后置标签</h2>
      <Input disabled value='asbfabd' />
      <br />
      <Input addonBefore='http://' defaultValue='.com' />
      <br />
      <Input addonAfter='.com' defaultValue='www.baidu' />
      <br />
      <Input addonBefore='http://' addonAfter='.com' defaultValue='www.baidu' />
      <br />
      <Input addonBefore='http://' addonAfter='.com' disabled defaultValue='www.baidu' />
    </>
  )
}

export default InputExample
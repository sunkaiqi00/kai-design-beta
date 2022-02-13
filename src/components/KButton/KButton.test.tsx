import React from "react";
import { render, fireEvent } from '@testing-library/react'
import KButton from "./KButton";

// test('kButton test', () => {
//   const wrapper = render(<KButton>Test Button</KButton>)
//   const element = wrapper.queryByText('Test Button')
//   expect(element).toBeTruthy()
// })

const defaultProps = {
  onClick: jest.fn()
}

const largePrimaryProps = {
  size: 'large',
  type: 'primary',
  className: 'custom'
}

const disabledProps = {
  onclick: jest.fn()
}

describe('test KButton component', () => {
  it('shoud render the correct default button', () => {
    const wrapper = render(<KButton {...defaultProps}>Test Button</KButton>)
    const element = wrapper.getByText('Test Button') as HTMLButtonElement
    // 是否再document
    expect(element).toBeInTheDocument()
    // 标签
    expect(element.tagName).toEqual('BUTTON')
    // 类名
    expect(element).toHaveClass('k-btn k-btn-default')
    // 禁用
    expect(element.disabled).toBeFalsy()
    // 测试点击事件
    fireEvent.click(element)
    // 判断事件是否执行
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  //  {...largePrimaryProps} 
  it('shoud render the correct primary large button', () => {
    const wrapper = render(<KButton size="large" type="primary" className='custom'>Large Primary Button</KButton>)
    const element = wrapper.getByText('Large Primary Button')
    // 是否再document
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('k-btn k-btn-large k-btn-primary custom')
  })

  it('shoud render the correct disabled button', () => {
    const wrapper = render(<KButton disabled>Large Primary Button</KButton>)
    const element = wrapper.getByText('Large Primary Button') as HTMLButtonElement
    // 是否再document
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onclick).not.toHaveBeenCalled()
  })

  it('shoud render the correct link button', () => {
    const wrapper = render(<KButton type="link" href="http://www.baidu.com">Link Button</KButton>)
    const element = wrapper.getByText('Link Button') as HTMLAnchorElement
    // 是否再document
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('k-btn k-btn-link')
  })
})
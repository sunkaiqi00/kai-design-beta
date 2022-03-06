import React from "react";
import { render, fireEvent, screen } from '@testing-library/react'
import Button, { ButtonProps } from "./Button";

// test('Button test', () => {
//   const view = render(<Button>Test Button</Button>)
//   const element = view.queryByText('Test Button')
//   expect(element).toBeTruthy()
// })

const defaultProps: ButtonProps = {
  onClick: jest.fn()
}

const largePrimaryProps: ButtonProps = {
  size: 'large',
  type: 'primary',
  className: 'custom'
}

const disabledProps: ButtonProps = {
  onClick: jest.fn()
}

describe('test Button component', () => {
  it('shoud render the correct default button', () => {
    const view = render(<Button {...defaultProps}>Test Button</Button>)
    const element = screen.getByText('Test Button') as HTMLButtonElement
    // 是否再document
    expect(element).toBeInTheDocument()
    // 标签
    expect(element.tagName).toEqual('BUTTON')
    // 类名
    expect(element).toHaveClass('kai-btn kai-btn-default')
    // 禁用
    expect(element.disabled).toBeFalsy()
    // 测试点击事件
    fireEvent.click(element)
    // 判断事件是否执行
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  //  
  it('shoud render the correct primary large button', () => {
    const view = render(<Button {...largePrimaryProps}>Large Primary Button</Button>)
    const element = screen.getByText('Large Primary Button')
    // 是否再document
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('kai-btn kai-btn-large kai-btn-primary custom')
  })

  it('shoud render the correct disabled button', () => {
    const view = render(<Button disabled>Large Primary Button</Button>)
    const element = screen.getByText('Large Primary Button') as HTMLButtonElement
    // 是否再document
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })

  it('shoud render the correct link button', () => {
    const view = render(<Button type="link" href="http://www.baidu.com">Link Button</Button>)
    const element = screen.getByText('Link Button') as HTMLAnchorElement
    // 是否再document
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('kai-btn kai-btn-link')
  })
})
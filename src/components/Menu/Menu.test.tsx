import React from "react";
import { fireEvent, render, RenderResult, cleanup } from '@testing-library/react'
import Menu, { MenuProps } from './Menu'
import MenuItem from "./MenuItem";

const baseMenuProps: MenuProps = {
  selectedIndex: 'one',
  onSelect: jest.fn(),
  className: 'custom-menu'
}

const verticalMenuProps: MenuProps = {
  selectedIndex: 'one',
  onSelect: jest.fn(),
  mode: 'vertical'
}

const getMenu = (props: MenuProps,) => {
  return (<Menu {...props}>
    <MenuItem className='item' index="one">one active</MenuItem>
    <MenuItem index='two'>two</MenuItem>
    <MenuItem index="three" disabled>three disabled</MenuItem>
    <MenuItem index="four">four</MenuItem>
  </Menu>)
}

let wrapper: RenderResult, menuElement: HTMLElement, activeMenu: HTMLElement, disabledMenu: HTMLElement
describe('test Menu MenuItem Component', () => {
  beforeEach(() => {
    wrapper = render(getMenu(baseMenuProps))
    menuElement = wrapper.getByTestId('test-menu-id')
    activeMenu = wrapper.getByText('one active')
    disabledMenu = wrapper.getByText('three disabled')
  })
  it('shoud render correct base Menu and MenuItem', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('k-menu custom-menu')
    expect(menuElement.getElementsByClassName('k-menu-item').length).toEqual(4)
    expect(activeMenu).toHaveClass('k-menu-item is-active')
    expect(disabledMenu).toHaveClass('k-menu-item is-disabled')
  })

  it('click MenuItem shoud change active and call onSelect', () => {
    // four 点击
    const fourElement = wrapper.getByText('four')
    fireEvent.click(fourElement)
    expect(baseMenuProps.onSelect).toHaveBeenCalledWith('four')
    expect(fourElement).toHaveClass('k-menu-item is-active')
    // 上一个active
    expect(activeMenu).not.toHaveClass('is-active')
    // 禁用
    expect(disabledMenu).not.toHaveClass('is-active')
    expect(disabledMenu).toHaveClass('is-disabled')
    expect(baseMenuProps.onSelect).not.toHaveBeenCalledWith('three')
  })

  it('shoud render vertical Menu', () => {
    cleanup()
    const wrapper = render(getMenu(verticalMenuProps))
    const element = wrapper.getByTestId('test-menu-id')
    expect(element).toHaveClass('k-menu-vertical')
  })
})
import React from "react";
import { fireEvent, render, RenderResult, cleanup, screen } from '@testing-library/react'
import Menu, { MenuProps } from './Menu'
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu/SubMenu";

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

const createStyle = () => {
  const cssFile: string = `
    .kai-submenu{
      display: none;
    }
    .kai-submenu.menu-opened {
      display: block;
    }
  `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}

const getMenu = (props: MenuProps,) => {
  return (
    <Menu {...props}>
      <MenuItem className='item' index="one">one active</MenuItem>
      <MenuItem index='two'>two</MenuItem>
      <MenuItem index="three" disabled>three disabled</MenuItem>
      <MenuItem index="four">four</MenuItem>
      <SubMenu index='SubMenu' title='SubMenu'>
        <MenuItem index="five">five</MenuItem>
      </SubMenu>
    </Menu>
  )
}

let wrapper: RenderResult, menuElement: HTMLElement, activeMenu: HTMLElement, disabledMenu: HTMLElement
describe('test Menu MenuItem Component', () => {
  beforeEach(() => {
    wrapper = render(getMenu(baseMenuProps))
    wrapper.container.appendChild(createStyle()) // 插入style标签
    menuElement = screen.getByTestId('test-menu-id')
    activeMenu = screen.getByText('one active')
    disabledMenu = screen.getByText('three disabled')
  })
  it('shoud render correct base Menu and MenuItem', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('kai-menu custom-menu')
    // 找到所有
    // expect(menuElement.getElementsByClassName('kai-menu-item').length).toEqual(4)
    // expect(menuElement.querySelectorAll(':scope > .kai-menu-item').length).toEqual(5)
    expect(activeMenu).toHaveClass('kai-menu-item is-active')
    expect(disabledMenu).toHaveClass('kai-menu-item is-disabled')
  })

  it('click MenuItem shoud change active and call onSelect', () => {
    // four 点击
    const fourElement = screen.getByText('four')
    fireEvent.click(fourElement)
    expect(baseMenuProps.onSelect).toHaveBeenCalledWith('four')
    expect(fourElement).toHaveClass('kai-menu-item is-active')
    // 上一个active
    expect(activeMenu).not.toHaveClass('is-active')
    // 禁用
    expect(disabledMenu).not.toHaveClass('is-active')
    expect(disabledMenu).toHaveClass('is-disabled')
    expect(baseMenuProps.onSelect).not.toHaveBeenCalledWith('three')
  })

  it('shoud render vertical Menu', () => {
    cleanup()
    const view = render(getMenu(verticalMenuProps))
    const element = screen.getByTestId('test-menu-id')
    expect(element).toHaveClass('kai-menu-vertical')
  })

  it('shoud show dropdown items when hover submenu', async () => {
    const subMenu = screen.queryByText('SubMenu') as HTMLElement
    const dropdownFive = screen.queryByText('five') as HTMLElement
    // 默认submenu隐藏
    expect(dropdownFive).not.toBeVisible()
    // 鼠标经过submenu title 下拉菜单显示
    fireEvent.mouseEnter(subMenu)
    expect(dropdownFive).toBeVisible()
    // 点击下拉菜单 调用onSelect
    fireEvent.click(dropdownFive)
    expect(baseMenuProps.onSelect).toHaveBeenCalledWith('five')
    // 鼠标离开 隐藏下拉 如何处理定时器待了解
    // await fireEvent.mouseLeave(subMenu)
    // expect(dropdownFive).not.toBeVisible()
    // act(() => {
    //   fireEvent.mouseLeave(subMenu)
    // })
    // expect(dropdownFive).not.toBeVisible()
  })
})
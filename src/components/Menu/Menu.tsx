import React, { useState, memo, createContext, useCallback } from "react";
import classNames from "classnames";
import { MenuItemProps } from './MenuItem/MenuItem'

export type MenuMode = 'horizontal' | 'vertical'
type SelectedCallback = (key: string) => void

export interface MenuProps {
  selectedIndex?: string,
  className?: string,
  mode?: MenuMode,
  style?: React.CSSProperties,
  onSelect?: SelectedCallback,
  defaultOpenIndex?: string[]
}

interface IMenuContext {
  selectedIndex: string,
  onSelect?: SelectedCallback,
  mode?: MenuMode,
  defaultOpenIndex?: string[]
}

export const MenuContext = createContext<IMenuContext>({ selectedIndex: '' })

const Menu: React.FC<MenuProps> = memo(props => {
  const { selectedIndex, className, mode = 'horizontal', style, onSelect, defaultOpenIndex, children } = props

  const [selectKey, setSelectKey] = useState(selectedIndex)

  const classes = classNames('k-menu', className, {
    'k-menu-vertical': mode === 'vertical',
    'k-menu-horizontal': mode !== 'vertical'
  })

  const handleClick = useCallback((key: string) => {
    setSelectKey(key)
    if (onSelect) {
      onSelect(key)
    }
  }, [selectKey])

  const ContextValue = {
    selectedIndex: selectKey ? selectKey : '',
    onSelect: handleClick,
    mode,
    defaultOpenIndex
  }

  // 只允许MenuItem组件
  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      let childElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem' || childElement.type.displayName === 'SubMenu') {
        return childElement
      } else {
        console.error('Waring: Menu has a children which is not a MenuItem children')
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="test-menu-id">
      <MenuContext.Provider value={ContextValue}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
})

Menu.defaultProps = {
  mode: 'horizontal'
}

export default Menu

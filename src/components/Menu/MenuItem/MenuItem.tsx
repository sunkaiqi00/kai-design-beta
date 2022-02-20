import React, { memo, useCallback, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from '../Menu'

export interface MenuItemProps {
  index?: string,
  className?: string,
  disabled?: boolean,
  style?: object
}

const MenuItem: React.FC<MenuItemProps> = memo((props) => {
  const { index = '', className, disabled, style, children } = props
  const context = useContext(MenuContext)

  const classes = classNames('k-menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.selectedIndex === index
  })
  const handelClick = useCallback((e) => {
    if (context.onSelect && !disabled) {
      e.stopPropagation()
      context.onSelect(index)
    }
  }, [index])

  const menuItemStyle = context.mode === 'vertical' ? { paddingLeft: '24px', } : { padding: '0 20px', ...style }
  return (
    <li className={classes} style={menuItemStyle} onClick={handelClick}>
      <span>{children}</span>
    </li>
  )
})

MenuItem.displayName = 'MenuItem'

export default MenuItem

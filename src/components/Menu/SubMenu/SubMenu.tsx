import React, { useContext, useCallback } from "react";
import classNames from "classnames";
import { MenuContext } from "../Menu";
import { MenuItemProps } from "../MenuItem/MenuItem";

export interface SubMenuProps {
  index?: string,
  title?: string,
  className?: string,
  disabled?: boolean
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, className, disabled, children }) => {
  const context = useContext(MenuContext)
  console.log(index, context.selectedIndex);

  const classes = classNames('k-menu-item k-submenu-item', className, {
    'is-active': index === context.selectedIndex,
    'is-disabled': disabled
  })
  const handelClick = useCallback((e) => {
    if (context.onSelect && !disabled && typeof index !== 'undefined') {
      console.log(e);
      e.stopPropagation()
      context.onSelect(index)
    }
  }, [index])

  const renderChildren = () => {
    const childrenElementList = React.Children.map(children, child => {
      const childrenElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childrenElement.type.displayName === 'MenuItem' || childrenElement.type.displayName === 'SubMenu') {
        return childrenElement
      } else {
        console.error('Waring: Menu has a children which is not a MenuItem children')
      }
    })
    return (
      <ul className="k-submenu">
        {childrenElementList}
      </ul>
    )
  }

  return (
    <>
      <li className={classes} onClick={handelClick}>
        <div className="k-submenu-title">{title}</div>

      </li>
      {renderChildren()}
    </>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu

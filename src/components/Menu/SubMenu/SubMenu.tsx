import React, { useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "../Menu";
import { MenuItemProps } from "../MenuItem/MenuItem";

export interface SubMenuProps {
  index?: string,
  title?: string,
  className?: string,
  disabled?: boolean
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const context = useContext(MenuContext)
  const { index, title, className, disabled, children } = props
  const defaultOpenIndex = context.defaultOpenIndex as Array<string>
  const isOpen = (context.mode === 'vertical' && index) ? defaultOpenIndex.includes(index) : false

  const [isSubOpen, setSubOpen] = useState(isOpen)

  const classes = classNames('k-menu-item k-submenu-item', className, {
    'is-active': index === context.selectedIndex,
    'is-disabled': disabled
  })


  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setSubOpen(!isSubOpen)
  }

  let timer: any
  const mouseEntry = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSubOpen(true)
    // if (context.onSelect && !disabled && typeof index !== 'undefined') {
    //   context.onSelect(index)
    // }
  }
  const mouseLave = (e: React.MouseEvent) => {
    return new Promise(resolve => {
      e.preventDefault()
      clearTimeout(timer)
      timer = setTimeout(() => {
        setSubOpen(false)
        resolve(true)
      }, 300);
    })
  }
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const mouseEvents = context.mode === 'horizontal' ? {
    onMouseEnter: mouseEntry,
    onMouseLeave: mouseLave
  } : {}

  const renderChildren = () => {
    const childrenElementList = React.Children.map(children, child => {
      const childrenElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childrenElement.type.displayName === 'MenuItem' || childrenElement.type.displayName === 'SubMenu') {
        return React.cloneElement(childrenElement, {
          style: context.mode === 'vertical' ? { paddingLeft: '48px' } : {}
        })
      } else {
        console.error('Waring: Menu has a children which is not a MenuItem children')
      }
    })
    const classes = classNames('k-submenu', {
      'menu-opened': isSubOpen
    })
    return (
      <ul className={classes}>
        {childrenElementList}
      </ul>
    )
  }

  const titleStyle = context.mode === 'vertical' ? { paddingLeft: '24px' } : { padding: '0 20px' }

  return (
    //  
    <li className={classes} {...mouseEvents}>
      <div className="k-submenu-title" {...clickEvents} style={titleStyle}>{title}</div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu

import React, { useState, memo, createContext, useCallback } from "react";
import classNames from "classnames";

type MenuMode = 'horiaontal' | 'vertical'
type SelectedCallback = (key: string) => void

interface MenuProps {
  selectedIndex?: string,
  className?: string,
  mode?: MenuMode,
  style?: React.CSSProperties,
  onSelect?: SelectedCallback
}

interface IMenuContext {
  selectedIndex: string,
  onSelect?: SelectedCallback
}

export const MenuContext = createContext<IMenuContext>({ selectedIndex: '' })

const Menu: React.FC<MenuProps> = memo(props => {
  const { selectedIndex, className, mode, style, onSelect, children } = props

  const [selectKey, setSelectKey] = useState(selectedIndex)

  const classes = classNames('k-menu', className, {
    'k-menu-vertical': mode === 'vertical',
    'k-menu-horiaontal': mode === 'horiaontal'
  })

  const handleClick = useCallback((key: string) => {
    setSelectKey(key)
    if (onSelect) {
      onSelect(key)
    }
  }, [selectKey])

  const ContextValue = {
    selectedIndex: selectKey ? selectKey : '',
    onSelect: handleClick
  }
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={ContextValue}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
})

Menu.defaultProps = {
  mode: 'vertical'
}

export default Menu

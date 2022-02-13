import React, { memo } from "react";
import classNames from "classnames";

type MenuMode = 'horiaontal' | 'vertical'

export interface MenuProps {
  activeIndex?: number,
  className?: string,
  mode?: MenuMode,
  style?: React.CSSProperties,
  onSelect?: (param: string | number) => void
}

const KMenu: React.FC<MenuProps> = memo(props => {
  const { activeIndex, className, mode, style, onSelect } = props
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
})

export default KMenu

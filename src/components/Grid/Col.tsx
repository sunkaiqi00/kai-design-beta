import React, { FC, useContext } from "react";
import classNames from "classnames";

import { RowContext } from './Row'

// default top
export type RowAlign = 'top' | 'middle' | 'bottom'
export type RowGutter = number | number[] | string[]
export type RowJustify = 'start' | 'end' | 'center' | 'space-around ' | 'space-between'

interface BaseColProps {
  span: number,
  style?: object,
  className?: string
}

const Col: FC<BaseColProps> = (props) => {
  const { span, style = {}, children, ...resetProps } = props
  const { gutter } = useContext(RowContext)
  const colStyle = {
    ...style
  }
  if (typeof gutter !== 'undefined') {
    if (typeof gutter === 'number') {
      let paddingStyle = {
        'padding-left': gutter / 2 + 'px',
        'padding-right': gutter / 2 + 'px'
      }
      Object.assign(colStyle, paddingStyle)
    }
  }
  const classes = classNames('kai-col', `kai-col-${span}`)
  return (<div className={classes} {...resetProps} style={colStyle}>{children}</div>)
}

export default Col
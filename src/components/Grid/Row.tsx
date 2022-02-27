import classNames from "classnames";
import React, { FC, createContext } from "react";

// default top
export type RowAlign = 'top' | 'middle' | 'bottom'
export type RowGutter = number | number[]
export type RowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'

interface BaseRowProps {
  align?: RowAlign,
  gutter?: RowGutter,
  justify?: RowJustify,
  wrap?: boolean,
  className?: string,
  style?: object
}

interface IRowContext {
  gutter?: RowGutter
}

export const RowContext = createContext<IRowContext>({})

const Row: FC<BaseRowProps> = (props) => {
  const { gutter, wrap, children, justify, align, style, ...resetProps } = props
  const RowStyle = { ...style }

  if (Array.isArray(gutter)) {
    Object.assign(RowStyle, {
      rowGap: gutter[1] + 'px'
    })
  }
  const RowContextValue = {
    gutter
  }
  const classes = classNames('kai-row', {
    'kai-row-no-wrap': !wrap,
    [`kai-row-${justify}`]: typeof justify !== 'undefined',
    [`kai-row-${align}`]: typeof align !== 'undefined'
  })
  return <div className={classes} {...resetProps} style={RowStyle}>
    <RowContext.Provider value={RowContextValue}>
      {children}
    </RowContext.Provider>
  </div>
}

Row.defaultProps = {
  align: 'top',
  gutter: 0,
  justify: 'start',
  wrap: true
}

export default Row
import React, { FC, createContext } from "react";

// default top
export type RowAlign = 'top' | 'middle' | 'bottom'
export type RowGutter = number | number[] | string[] | object
export type RowJustify = 'start' | 'end' | 'center' | 'space-around ' | 'space-between'

interface BaseRowProps {
  align?: string,
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
  const { gutter, children, ...resetProps } = props
  const RowContextValue = {
    gutter
  }
  return <div className="kai-row" {...resetProps}>
    <RowContext.Provider value={RowContextValue}>
      {children}
    </RowContext.Provider>
  </div>
}

export default Row
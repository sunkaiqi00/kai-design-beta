import React, { FC } from "react";
export declare type RowAlign = 'top' | 'middle' | 'bottom';
export declare type RowGutter = number | number[];
export declare type RowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
interface BaseRowProps {
    align?: RowAlign;
    gutter?: RowGutter;
    justify?: RowJustify;
    wrap?: boolean;
    className?: string;
    style?: object;
}
interface IRowContext {
    gutter?: RowGutter;
}
export declare const RowContext: React.Context<IRowContext>;
declare const Row: FC<BaseRowProps>;
export default Row;

import React, { ReactElement, InputHTMLAttributes, ReactNode } from "react";
export declare type InputSize = 'large' | 'small';
export interface BaseInputProps {
    /** 控件大小 */
    size?: InputSize;
    /** 是否禁用 */
    disabled?: boolean;
    /** 前缀图标 */
    prefixIcon?: ReactNode | ReactElement;
    /** 后缀图标 */
    suffix?: ReactNode | ReactElement;
    /** 添加前缀 用于配置一些固定组合 */
    addonBefore?: string | ReactElement | ReactNode;
    /** 添加后缀 用于配置一些固定组合 */
    addonAfter?: string | ReactElement | ReactNode;
}
export declare type InputProps = BaseInputProps & Omit<InputHTMLAttributes<HTMLElement>, 'size'>;
declare const Input: React.FC<InputProps>;
export default Input;

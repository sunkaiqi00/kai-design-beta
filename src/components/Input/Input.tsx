import React, { ReactElement, InputHTMLAttributes, ReactNode, ChangeEvent } from "react";
import classNames from "classnames";

export type InputSize = 'large' | 'small'

export interface BaseInputProps {
  /** 控件大小 */
  size?: InputSize,
  /** 是否禁用 */
  disabled?: boolean,
  /** 前缀图标 */
  prefixIcon?: ReactNode | ReactElement,
  /** 后缀图标 */
  suffix?: ReactNode | ReactElement,
  /** 添加前缀 用于配置一些固定组合 */
  addonBefore?: string | ReactElement | ReactNode,
  /** 添加后缀 用于配置一些固定组合 */
  addonAfter?: string | ReactElement | ReactNode,
  // onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
}

export type InputProps = BaseInputProps & Omit<InputHTMLAttributes<HTMLElement>, 'size'>

const Input: React.FC<InputProps> = (props) => {
  const { size, disabled, addonBefore, addonAfter, prefixIcon, suffix, ...resetProps } = props
  const wrapperClasses = classNames('kai-input', {
    [`kai-input-${size}`]: size,

  })
  const inputClasses = classNames('kai-input-inner', {
    'kai-input-disabled': disabled
  })

  const BorderRadiusStyle = addonBefore && addonAfter ? { borderRadius: 0 } : addonAfter ? {
    'border-top-right-radius': 0,
    'border-bottom-right-radius': 0
  } : {}

  const suffixInputStyle = suffix ? (size === 'large' ? { paddingRight: '40px' } : size === 'small' ? { paddingRight: '30px' } : { paddingRight: '35px' }) : {}

  return (
    <div className={wrapperClasses}>
      {addonBefore && <div className="kai-input-group-addon-before">{addonBefore}</div>}
      {prefixIcon && <span className="kai-prefix-icon kai-input-icon">{prefixIcon}</span>}
      <input disabled={disabled} {...resetProps} className={inputClasses} style={{ ...suffixInputStyle, ...BorderRadiusStyle }} />
      {suffix && <span className="kai-suffix-icon kai-input-icon">{suffix}</span>}
      {addonAfter && <div className="kai-input-group-addon-after">{addonAfter}</div>}
    </div>
  )
}



export default Input
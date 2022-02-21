import classNames from "classnames";
import React, { ReactElement, InputHTMLAttributes, ReactNode } from "react";

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
  prepand?: string | ReactElement | ReactNode,
  /** 添加后缀 用于配置一些固定组合 */
  append?: string | ReactElement | ReactNode
}

type InputProps = BaseInputProps & Omit<InputHTMLAttributes<HTMLElement>, 'size'>

const Input: React.FC<InputProps> = (props) => {
  const { size, disabled, prepand, prefixIcon, suffix, append, ...resetProps } = props
  const wrapperClasses = classNames('k-input', {
    [`k-input-${size}`]: size,

  })
  const inputClasses = classNames('k-input-inner', {
    'k-btn-disabled': disabled
  })
  const suffixInputStyle = suffix ? (size === 'large' ? { paddingRight: '35px' } : size === 'small' ? { paddingRight: '25px' } : { paddingRight: '30px' }) : {}
  return (
    <div className={wrapperClasses}>
      {prefixIcon && <span className="k-prefix-icon k-input-icon">{prefixIcon}</span>}
      <input disabled={disabled} {...resetProps} className={inputClasses} style={suffixInputStyle} />
      {suffix && <span className="k-suffix-icon k-input-icon">{suffix}</span>}
    </div>
  )
}



export default Input
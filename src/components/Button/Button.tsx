import React from "react";
import classNames from "classnames";

export type ButtonSize = 'large' | 'default' | 'small';

export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'success' | 'warning' | 'info';

interface BaseButtonProps {
  className?: string,
  // 禁用
  disabled?: boolean,
  // 尺寸
  size?: ButtonSize,
  // 类型
  type?: ButtonType,
  children?: React.ReactNode,
  href?: string,
  block?: boolean,
  plan?: boolean,
  icon?: React.ReactElement
}

// button 自定义属性与原生属性的联合类型
// Omit 剔除原生type属性
type NativeButtonProps = Omit<BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>
// a 自定义属性与原生属性的联合类型
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

// Partial 将所有属性转为可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>


const KButton: React.FC<ButtonProps> = props => {
  const { icon, type, disabled, size, children, href, block, plan, className, ...resetProps } = props

  const classes = classNames('kai-btn', className,
    {
      [`kai-btn-${size}`]: size,
      [`kai-btn-${type}`]: type !== 'default' && type,
      'kai-btn-block': block,
      'kai-btn-plan': plan,
      disabled: type === 'link' && disabled
    }
  )
  if (type === 'link' && href) {
    return <a className={classes} href={href} {...resetProps}>{children}</a>
  } else {
    return <button className={classes} disabled={disabled}  {...resetProps}><span>{icon}{children}</span></button>
  }
}
KButton.defaultProps = {
  disabled: false,
  type: 'default'
}

export default KButton

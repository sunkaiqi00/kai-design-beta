import React from "react";

export type ButtonSize = 'lage' | 'default' | 'small';

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
  href?: string
}

const KButton: React.FC<BaseButtonProps> = () => {
  return <button>button</button>
}
KButton.defaultProps = {
  disabled: false,
  size: "lage",
  type: 'primary'
}
export default KButton
 
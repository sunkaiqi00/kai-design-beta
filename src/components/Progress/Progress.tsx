import classNames from "classnames";
import React, { FC } from "react";

export type ProgressType = 'line' | 'bar' | 'dashboard'
export type ProgressStatus = 'success' | 'error' | 'warning' | 'info' | 'active'
export type strokeCap = 'round' | 'square'
export interface BaseProgressProps {
  percent: number, // 百分比，必填
  type?: ProgressType, // 进度条类型
  status?: string, // 进度条当前状态
  color?: string, // 进度条背景色 进度条背景色 （会覆盖 status 状态颜色）
  strokeWidth?: number, // default:8 进度条线的宽度，单位 px
  strokeLinecap?: strokeCap, // default:round 进度条的样式
  textInside?: boolean, // 进度条显示文字内置在进度条内（仅 type 为 'line' 时可用）
  width?: number, // default:126  环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）
  showInfo?: boolean, // default:true 是否显示进度条文字内容
  format?: (percent: number) => any  // 	(percent) => percent + %
}

const Progress: FC<BaseProgressProps> = (props) => {
  const {
    percent,
    strokeLinecap,
    format,
    status,
    strokeWidth,
    color
  } = props

  let formatFun = null
  if (format) {
    formatFun = format
  } else {
    formatFun = (percent: number) => `${percent}%`;
  }

  const percentage = percent < 0 ? 0 : percent > 100 ? 100 : percent

  const barClasses = classNames('kai-progress-bar', {
    [`kai-progress-bar-${status}`]: status
  })
  const barStyle = {
    width: percentage + '%',
    height: strokeWidth + 'px'
  }
  if (color) {
    Object.assign(barStyle, { backgroundColor: color })
  }
  return (
    <div className={`kai-preogress kai-preogress-${strokeLinecap}`}>
      <div className="kai-progress-outer">
        <div className="kai-progress-inner">
          <div className={barClasses} style={barStyle}>
          </div>
        </div>
      </div>
      <span className="kai-progress-text">{formatFun(percentage)}</span>

    </div>
  )
}

Progress.defaultProps = {
  type: 'line',
  strokeLinecap: 'round',
  showInfo: true,
  percent: 0,
  status: 'success',
  strokeWidth: 8,
}

export default Progress;

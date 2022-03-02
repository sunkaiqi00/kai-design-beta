import React, { FC } from "react";

export type ProgressType = 'line' | 'bar' | 'dashboard'
export type ProgressStatus = 'success' | 'error' | 'warning'
export interface BaseProgressProps {
  percentage: number, // 百分比，必填
  type: ProgressType, // 进度条类型
  status?: string, // 进度条当前状态
  color?: string, // 进度条背景色 进度条背景色 （会覆盖 status 状态颜色）
  'stroke-width'?: number, // 进度条的宽度
  'text-inside'?: boolean, // 进度条显示文字内置在进度条内（仅 type 为 'line' 时可用）
  width?: number, // default:126  环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）
  'show-text'?: number, // default:true 是否显示进度条文字内容
  format?: (percent: number) => any  // 	(percent) => percent + %
}

const Progress: FC<BaseProgressProps> = () => {
  return (
    <div className="kai-preogress">
      <div className="kai-progress-outer">
        <div className="kai-progress-inner">
          <div className="kai-progress-bar">
          </div>
        </div>
      </div>
      <span className="kai-progress-text">60%</span>
    </div>
  )
}

export default Progress;

import { FC } from "react";
export declare type ProgressType = 'line' | 'bar' | 'dashboard';
export declare type ProgressStatus = 'success' | 'error' | 'warning' | 'info' | 'active';
export declare type strokeCap = 'round' | 'square';
export interface BaseProgressProps {
    percent: number;
    type?: ProgressType;
    status?: string;
    color?: string;
    strokeWidth?: number;
    strokeLinecap?: strokeCap;
    textInside?: boolean;
    width?: number;
    showInfo?: boolean;
    format?: (percent: number) => any;
}
declare const Progress: FC<BaseProgressProps>;
export default Progress;

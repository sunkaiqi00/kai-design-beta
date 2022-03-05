import React from "react";
export declare type ButtonSize = 'large' | 'default' | 'small';
export declare type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'success' | 'warning' | 'info';
interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    type?: ButtonType;
    children?: React.ReactNode;
    href?: string;
    block?: boolean;
    plan?: boolean;
    icon?: React.ReactElement;
}
declare type NativeButtonProps = Omit<BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;
declare type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
declare const KButton: React.FC<ButtonProps>;
export default KButton;

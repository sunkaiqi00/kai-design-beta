import React from "react";
export declare type MenuMode = 'horizontal' | 'vertical';
declare type SelectedCallback = (key: string) => void;
export interface MenuProps {
    selectedIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectedCallback;
    defaultOpenIndex?: string[];
}
interface IMenuContext {
    selectedIndex: string;
    onSelect?: SelectedCallback;
    mode?: MenuMode;
    defaultOpenIndex?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<MenuProps>;
export default Menu;

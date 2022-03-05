import React from "react";
export interface MenuItemProps {
    index?: string;
    className?: string;
    disabled?: boolean;
    style?: object;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;

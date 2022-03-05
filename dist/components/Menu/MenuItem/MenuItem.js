var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { memo, useCallback, useContext } from "react";
import classNames from "classnames";
import { MenuContext } from '../Menu';
var MenuItem = memo(function (props) {
    var _a = props.index, index = _a === void 0 ? '' : _a, className = props.className, disabled = props.disabled, style = props.style, children = props.children;
    var context = useContext(MenuContext);
    var classes = classNames('kai-menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.selectedIndex === index
    });
    var handelClick = useCallback(function (e) {
        if (context.onSelect && !disabled) {
            e.stopPropagation();
            context.onSelect(index);
        }
    }, [index]);
    var menuItemStyle = context.mode === 'vertical' ? { paddingLeft: '24px', } : __assign({ padding: '0 20px' }, style);
    return (React.createElement("li", { className: classes, style: menuItemStyle, onClick: handelClick },
        React.createElement("span", null, children)));
});
MenuItem.displayName = 'MenuItem';
export default MenuItem;

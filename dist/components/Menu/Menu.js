import React, { useState, memo, createContext, useCallback } from "react";
import classNames from "classnames";
export var MenuContext = createContext({ selectedIndex: '' });
var Menu = memo(function (props) {
    var selectedIndex = props.selectedIndex, className = props.className, _a = props.mode, mode = _a === void 0 ? 'horizontal' : _a, style = props.style, onSelect = props.onSelect, _b = props.defaultOpenIndex, defaultOpenIndex = _b === void 0 ? [] : _b, children = props.children;
    var _c = useState(selectedIndex), selectKey = _c[0], setSelectKey = _c[1];
    var classes = classNames('kai-menu', className, {
        'kai-menu-vertical': mode === 'vertical',
        'kai-menu-horizontal': mode !== 'vertical'
    });
    var handleClick = useCallback(function (key) {
        setSelectKey(key);
        if (onSelect) {
            onSelect(key);
        }
    }, [selectKey]);
    var ContextValue = {
        selectedIndex: selectKey ? selectKey : '',
        onSelect: handleClick,
        mode: mode,
        defaultOpenIndex: defaultOpenIndex
    };
    // 只允许MenuItem组件
    var renderChildren = function () {
        return React.Children.map(children, function (child) {
            var childElement = child;
            if (childElement.type.displayName === 'MenuItem' || childElement.type.displayName === 'SubMenu') {
                return childElement;
            }
            else {
                console.error('Waring: Menu has a children which is not a MenuItem children');
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style, "data-testid": "test-menu-id" },
        React.createElement(MenuContext.Provider, { value: ContextValue }, renderChildren())));
});
Menu.defaultProps = {
    mode: 'horizontal'
};
export default Menu;

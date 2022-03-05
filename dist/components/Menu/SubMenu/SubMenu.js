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
import React, { useContext, useState } from "react";
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import classNames from "classnames";
// import { CSSTransition } from 'react-transition-group'
import CollapseTransition from '../../Transition/CollapseTransition';
import { MenuContext } from "../Menu";
var SubMenu = function (props) {
    var context = useContext(MenuContext);
    var index = props.index, title = props.title, className = props.className, disabled = props.disabled, children = props.children;
    var defaultOpenIndex = context.defaultOpenIndex;
    var isOpen = (context.mode === 'vertical' && index) ? defaultOpenIndex.includes(index) : false;
    var _a = useState(isOpen), isSubOpen = _a[0], setSubOpen = _a[1];
    var classes = classNames('kai-menu-item kai-submenu-item', className, {
        'is-active': index === context.selectedIndex,
        'is-disabled': disabled
    });
    var handleClick = function (e) {
        e.preventDefault();
        setSubOpen(!isSubOpen);
        // if (context.onSelect && !disabled && typeof index !== 'undefined') {
        // context.onSelect(index)
        // }
    };
    var timer;
    var mouseEntry = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setSubOpen(true);
    };
    var mouseLave = function (e) {
        return new Promise(function (resolve) {
            e.preventDefault();
            clearTimeout(timer);
            timer = setTimeout(function () {
                setSubOpen(false);
                resolve(true);
            }, 300);
        });
    };
    var clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {};
    var mouseEvents = context.mode === 'horizontal' ? {
        onMouseEnter: mouseEntry,
        onMouseLeave: mouseLave
    } : {};
    var renderChildren = function () {
        var childrenElementList = React.Children.map(children, function (child) {
            var childrenElement = child;
            if (childrenElement.type.displayName === 'MenuItem' || childrenElement.type.displayName === 'SubMenu') {
                return React.cloneElement(childrenElement, {
                    style: context.mode === 'vertical' ? { paddingLeft: '48px' } : {}
                });
            }
            else {
                console.error('Waring: Menu has a children which is not a MenuItem children');
            }
        });
        var classes = classNames('kai-submenu', {
            'menu-opened': isSubOpen
        });
        return (React.createElement(CollapseTransition, { in: isSubOpen, addEndListener: function () { } },
            React.createElement("ul", { className: classes }, childrenElementList)));
    };
    // 第一级的图标需要翻转动画  现在是有翻转动画 看不到是因为没有设置过渡
    var arrowClass = classNames({
        'arrow-rotate': isSubOpen && context.mode === 'vertical'
    });
    var titleStyle = context.mode === 'vertical' ? { paddingLeft: '24px', paddingRight: '24px' } : { padding: '0 20px' };
    var titleIcon = context.mode === 'vertical' ? React.createElement("span", { className: arrowClass },
        React.createElement(DownOutlined, null)) : (React.createElement("span", { className: arrowClass },
        React.createElement(DownOutlined, null),
        React.createElement(RightOutlined, null)));
    return (
    //  
    React.createElement("li", __assign({ className: classes }, mouseEvents),
        React.createElement("div", __assign({ className: 'kai-submenu-title' }, clickEvents, { style: titleStyle }),
            title,
            titleIcon),
        renderChildren()));
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;

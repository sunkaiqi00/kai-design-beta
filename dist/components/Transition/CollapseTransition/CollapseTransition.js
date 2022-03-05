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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { CSSTransition } from 'react-transition-group';
var CollapseTransition = function (props) {
    var children = props.children, wrapper = props.wrapper, classNames = props.classNames, animation = props.animation, resetProps = __rest(props, ["children", "wrapper", "classNames", "animation"]);
    var classes = classNames ? classNames : animation;
    return (React.createElement(CSSTransition, __assign({ classNames: classes }, resetProps), wrapper ? React.createElement("div", null, "children") : children));
};
CollapseTransition.defaultProps = {
    timeout: 300,
    appear: true,
    unmountOnExit: true,
    wrapper: false,
    animation: 'zoom-in-top'
};
export default CollapseTransition;

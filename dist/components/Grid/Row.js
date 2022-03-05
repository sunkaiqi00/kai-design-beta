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
import classNames from "classnames";
import React, { createContext } from "react";
export var RowContext = createContext({});
var Row = function (props) {
    var _a;
    var gutter = props.gutter, wrap = props.wrap, children = props.children, justify = props.justify, align = props.align, style = props.style, resetProps = __rest(props, ["gutter", "wrap", "children", "justify", "align", "style"]);
    var RowStyle = __assign({}, style);
    if (Array.isArray(gutter)) {
        Object.assign(RowStyle, {
            rowGap: gutter[1] + 'px'
        });
    }
    var RowContextValue = {
        gutter: gutter
    };
    var classes = classNames('kai-row', (_a = {
            'kai-row-no-wrap': !wrap
        },
        _a["kai-row-".concat(justify)] = typeof justify !== 'undefined',
        _a["kai-row-".concat(align)] = typeof align !== 'undefined',
        _a));
    return React.createElement("div", __assign({ className: classes }, resetProps, { style: RowStyle }),
        React.createElement(RowContext.Provider, { value: RowContextValue }, children));
};
Row.defaultProps = {
    align: 'top',
    gutter: 0,
    justify: 'start',
    wrap: true
};
export default Row;

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
import React, { useContext } from "react";
import classNames from "classnames";
import { RowContext } from './Row';
var Col = function (props) {
    var _a;
    var span = props.span, offset = props.offset, push = props.push, pull = props.pull, order = props.order, flex = props.flex, _b = props.style, style = _b === void 0 ? {} : _b, children = props.children, resetProps = __rest(props, ["span", "offset", "push", "pull", "order", "flex", "style", "children"]);
    var gutter = useContext(RowContext).gutter;
    var getColPaddingStyle = function (padding) { return ({
        paddingLeft: padding + 'px',
        paddingRight: padding + 'px'
    }); };
    var colStyle = __assign({}, style);
    // gutter column row 边距
    if (typeof gutter !== 'undefined') {
        var paddingStyle = {};
        if (typeof gutter === 'number') {
            Object.assign(paddingStyle, getColPaddingStyle(gutter / 2));
        }
        else if (Array.isArray(gutter)) {
            var padding = gutter[0];
            Object.assign(paddingStyle, getColPaddingStyle(padding / 2));
        }
        Object.assign(colStyle, paddingStyle);
    }
    // order
    if (typeof order !== 'undefined') {
        Object.assign(colStyle, { order: order });
    }
    // flex
    if (typeof flex !== 'undefined') {
        // flex 2 2 auto
        if (typeof flex === 'number') {
            Object.assign(colStyle, { flex: "".concat(flex, " ").concat(flex, " auto") });
        }
        // flex 1 1 auto
        else if (flex === 'auto') {
            Object.assign(colStyle, { flex: '1 1 auto' });
        }
        // flex 0 0 auto
        else if (flex === 'none') {
            Object.assign(colStyle, { flex: '0 0 auto' });
        }
        // flex 1 1 200px
        else if (typeof flex === 'string' && flex.split(' ').length === 3) {
            Object.assign(colStyle, { flex: flex });
        }
        // flex 0 0 200px
        else if (typeof flex === 'string') {
            Object.assign(colStyle, { flex: "0 0 ".concat(flex) });
        }
    }
    var judgeClass = function (props) { return !!(props && props !== 0); };
    var classes = classNames('kai-col', (_a = {},
        _a["kai-col-".concat(span)] = judgeClass(span),
        _a["kai-col-offset-".concat(offset)] = judgeClass(offset),
        _a["kai-col-push-".concat(push)] = judgeClass(push),
        _a["kai-col-pull-".concat(pull)] = judgeClass(pull),
        _a));
    return (React.createElement("div", __assign({ className: classes }, resetProps, { style: colStyle }), children));
};
Col.defaultProps = {
    span: 0,
    offset: 0,
    pull: 0,
    push: 0
};
export default Col;

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
import React from "react";
import classNames from "classnames";
var KButton = function (props) {
    var _a;
    var icon = props.icon, type = props.type, disabled = props.disabled, size = props.size, children = props.children, href = props.href, block = props.block, plan = props.plan, className = props.className, resetProps = __rest(props, ["icon", "type", "disabled", "size", "children", "href", "block", "plan", "className"]);
    var classes = classNames('kai-btn', className, (_a = {},
        _a["kai-btn-".concat(size)] = size,
        _a["kai-btn-".concat(type)] = type !== 'default' && type,
        _a['kai-btn-block'] = block,
        _a['kai-btn-plan'] = plan,
        _a.disabled = type === 'link' && disabled,
        _a));
    if (type === 'link' && href) {
        return React.createElement("a", __assign({ className: classes, href: href }, resetProps), children);
    }
    else {
        return React.createElement("button", __assign({ className: classes, disabled: disabled }, resetProps),
            React.createElement("span", null,
                icon,
                children));
    }
};
KButton.defaultProps = {
    disabled: false,
    type: 'default'
};
export default KButton;

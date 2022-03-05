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
var Input = function (props) {
    var _a;
    var size = props.size, disabled = props.disabled, addonBefore = props.addonBefore, addonAfter = props.addonAfter, prefixIcon = props.prefixIcon, suffix = props.suffix, resetProps = __rest(props, ["size", "disabled", "addonBefore", "addonAfter", "prefixIcon", "suffix"]);
    var wrapperClasses = classNames('kai-input', (_a = {},
        _a["kai-input-".concat(size)] = size,
        _a));
    var inputClasses = classNames('kai-input-inner', {
        'kai-input-disabled': disabled
    });
    var BorderRadiusStyle = addonBefore && addonAfter ? { borderRadius: 0 } : addonAfter ? {
        'border-top-right-radius': 0,
        'border-bottom-right-radius': 0
    } : {};
    var suffixInputStyle = suffix ? (size === 'large' ? { paddingRight: '40px' } : size === 'small' ? { paddingRight: '30px' } : { paddingRight: '35px' }) : {};
    return (React.createElement("div", { className: wrapperClasses },
        addonBefore && React.createElement("div", { className: "kai-input-group-addon-before" }, addonBefore),
        prefixIcon && React.createElement("span", { className: "kai-prefix-icon kai-input-icon" }, prefixIcon),
        React.createElement("input", __assign({ disabled: disabled }, resetProps, { className: inputClasses, style: __assign(__assign({}, suffixInputStyle), BorderRadiusStyle) })),
        suffix && React.createElement("span", { className: "kai-suffix-icon kai-input-icon" }, suffix),
        addonAfter && React.createElement("div", { className: "kai-input-group-addon-after" }, addonAfter)));
};
export default Input;

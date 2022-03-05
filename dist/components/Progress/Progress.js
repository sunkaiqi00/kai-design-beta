import classNames from "classnames";
import React from "react";
var Progress = function (props) {
    var _a;
    var percent = props.percent, strokeLinecap = props.strokeLinecap, format = props.format, status = props.status, strokeWidth = props.strokeWidth, color = props.color;
    var formatFun = null;
    if (format) {
        formatFun = format;
    }
    else {
        formatFun = function (percent) { return "".concat(percent, "%"); };
    }
    var percentage = percent < 0 ? 0 : percent > 100 ? 100 : percent;
    var barClasses = classNames('kai-progress-bar', (_a = {},
        _a["kai-progress-bar-".concat(status)] = status,
        _a));
    var barStyle = {
        width: percentage + '%',
        height: strokeWidth + 'px'
    };
    if (color) {
        Object.assign(barStyle, { backgroundColor: color });
    }
    return (React.createElement("div", { className: "kai-preogress kai-preogress-".concat(strokeLinecap) },
        React.createElement("div", { className: "kai-progress-outer" },
            React.createElement("div", { className: "kai-progress-inner" },
                React.createElement("div", { className: barClasses, style: barStyle }))),
        React.createElement("span", { className: "kai-progress-text" }, formatFun(percentage))));
};
Progress.defaultProps = {
    type: 'line',
    strokeLinecap: 'round',
    showInfo: true,
    percent: 0,
    status: 'success',
    strokeWidth: 8,
};
export default Progress;

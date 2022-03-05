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
import React, { useState, useEffect, useRef } from "react";
import { Loading3QuartersOutlined } from '@ant-design/icons';
import useDebounce from '../../hooks/useDebounce';
import useClickOutSide from "../../hooks/useClickOutSide";
import CollapseTransition from "../Transition/CollapseTransition";
import Input from "../Input";
import classNames from "classnames";
var AutoComplete = function (props) {
    var filterOption = props.filterOption, onSelect = props.onSelect, value = props.value, renderTemplate = props.renderTemplate, _a = props.notFoundContent, notFoundContent = _a === void 0 ? '暂无内容' : _a, resetProps = __rest(props, ["filterOption", "onSelect", "value", "renderTemplate", "notFoundContent"]);
    var _b = useState(value), inputValue = _b[0], setInputValue = _b[1];
    var _c = useState([]), suggestions = _c[0], setSuggestions = _c[1];
    var _d = useState(false), loading = _d[0], setLoading = _d[1];
    var _e = useState(-1), highlightIndex = _e[0], setHighlightIndex = _e[1];
    var _f = useState(false), showOption = _f[0], setShowOption = _f[1];
    var _g = useState(false), noSuggestion = _g[0], setNoSuggestion = _g[1];
    var debounceValue = useDebounce(inputValue);
    // 下拉选择改变了inputValue 触发了useEffect加载一次数据 通过这个变量控制选中后不再加载(不引起组件重新渲染)
    var triggerSearch = useRef(false);
    var componentRef = useRef(null);
    useClickOutSide(componentRef, function () { setShowOption(false); });
    // 设置高亮行
    var handleHighLightIndex = function (index) {
        var len = suggestions.length;
        var i = index < 0 ? len - 1 : index >= len ? 0 : index;
        setHighlightIndex(i);
    };
    useEffect(function () {
        if (debounceValue && triggerSearch.current) {
            setShowOption(true);
            var result = filterOption(debounceValue);
            if (result instanceof Promise) {
                setLoading(true);
                result.then(function (data) {
                    setSuggestions(data);
                    setLoading(false);
                    if (data.length) {
                        noSuggestion && setNoSuggestion(false);
                    }
                    else {
                        setNoSuggestion(true);
                    }
                });
            }
            else {
                setSuggestions(result);
            }
        }
        else {
            setShowOption(false);
        }
    }, [debounceValue]);
    // 键盘事件
    var handleKeyDown = function (e) {
        switch (e.code) {
            case 'Enter':
                dropOptionSelect(suggestions[highlightIndex]);
                break;
            case 'ArrowDown':
                handleHighLightIndex(highlightIndex + 1);
                break;
            case 'ArrowUp':
                handleHighLightIndex(highlightIndex - 1);
                break;
            case 'Escape':
                setShowOption(false);
                break;
            default:
                break;
        }
    };
    var handleFocus = function (e) {
        if (inputValue) {
            setShowOption(true);
        }
    };
    var handleChange = function (e) {
        var text = e.target.value.trim();
        console.log(text);
        setInputValue(text);
        setHighlightIndex(-1);
        if (!text) {
            setShowOption(false);
            setNoSuggestion(false);
            setSuggestions([]);
        }
        !triggerSearch.current && (triggerSearch.current = true);
    };
    var dropOptionSelect = function (item, index) {
        setInputValue(item.value);
        if (typeof index !== 'undefined') {
            setHighlightIndex(index);
        }
        if (onSelect) {
            onSelect(item);
        }
        setShowOption(false);
        triggerSearch.current = false;
    };
    var renderDropTemlate = function (item) {
        return renderTemplate ? renderTemplate(item) : item.value;
    };
    var emptyStyle = (suggestions.length === 0 && inputValue) ? { padding: '30px 0' } : {};
    var renderSugesstions = function () {
        return (React.createElement(CollapseTransition, { in: showOption, addEndListener: function () { } },
            React.createElement("ul", { className: "auto-complete-options-wrapper", style: emptyStyle },
                noSuggestion && React.createElement("div", { className: "auto-complete-not-found-content" }, notFoundContent),
                loading && React.createElement("div", { className: "loading-tooltip" },
                    React.createElement(Loading3QuartersOutlined, { spin: true })),
                suggestions.map(function (item, index) {
                    var optionsClasses = classNames('options-item', {
                        'options-item-active': index === highlightIndex
                    });
                    return React.createElement("li", { className: optionsClasses, key: item.value, onClick: function () { return dropOptionSelect(item, index); } }, renderDropTemlate(item));
                }))));
    };
    return (React.createElement("div", { className: "kai-auto-complete", ref: componentRef },
        React.createElement(Input, __assign({ value: inputValue }, resetProps, { onChange: handleChange, onKeyDown: handleKeyDown, onFocus: handleFocus })),
        renderSugesstions()));
};
export default AutoComplete;

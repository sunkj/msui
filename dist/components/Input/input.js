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
import classNames from 'classnames';
import Icon from '../Icon/icon';
/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 *
 * ~~~js
 * // 这样引用
 * import { Input } from 'msui'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
export var Input = function (props) {
    var _a;
    // 取出所有的属性
    var disabled = props.disabled, className = props.className, icon = props.icon, size = props.size, prepend = props.prepend, append = props.append, style = props.style, restProps = __rest(props, ["disabled", "className", "icon", "size", "prepend", "append", "style"]);
    // 计算className
    var classes = classNames('form-input-wrapper', className, (_a = {},
        _a["form-input-" + disabled] = disabled,
        _a["form-input-" + size] = size,
        _a["form-input-group-prepend"] = prepend,
        _a["form-input-group-append"] = append,
        _a));
    // 根据属性判断是否需要添加特定的节点
    var normalizeControlValue = function (value) {
        if (typeof value === 'undefined' || value === null) {
            return '';
        }
        return value;
    };
    // value 如果存在，不允许有defaultValue
    if ('value' in props) {
        delete restProps.defaultValue;
        restProps.value = normalizeControlValue(props.value);
    }
    return (React.createElement("div", { className: classes, style: style },
        prepend && React.createElement("div", { className: "form-input-group-prepend" }, prepend),
        icon && React.createElement("div", { className: "form-input-icon-wrapper" },
            React.createElement(Icon, { icon: icon, title: "title-" + icon })),
        React.createElement("input", __assign({ className: "form-input", disabled: disabled }, restProps)),
        append && React.createElement("div", { className: "form-input-group-append" }, append)));
};
export default Input;

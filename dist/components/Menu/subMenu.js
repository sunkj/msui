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
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import Icon from '../Icon/icon';
import Transition from '../Transition/transition';
var SubMenu = function (props) {
    var index = props.index, title = props.title, className = props.className, children = props.children;
    var context = useContext(MenuContext);
    var openedSubMenus = context.defaultOpenSubMenus;
    var isOpen = (index && context.mode === 'vertical') ? openedSubMenus.includes("" + index) : false;
    var _a = useState(isOpen), menuOpen = _a[0], setOpen = _a[1];
    var classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
    });
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    var timeout;
    var handleMouse = function (e, toggle) {
        clearTimeout(timeout);
        e.preventDefault();
        timeout = setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    var clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {};
    var mouseEvents = context.mode === 'horizontal' ? {
        onMouseEnter: function (e) { return handleMouse(e, true); },
        onMouseLeave: function (e) { return handleMouse(e, false); }
    } : {};
    var renderChildren = function () {
        var subMenuClasses = classNames('submenu', {
            'menu-opened': menuOpen
        });
        var subMenuItem = React.Children.map(children, function (child, subIndex) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElement, { index: index + "-" + subIndex });
            }
            else {
                console.warn('SubMenu 只接受 MenuItem');
            }
        });
        return (React.createElement(Transition, { "in": menuOpen, timeout: 300, animation: 'zoom-in-top' },
            React.createElement("ul", { className: subMenuClasses }, subMenuItem)));
    };
    return (React.createElement("li", __assign({ key: index, className: classes }, mouseEvents),
        React.createElement("div", __assign({ className: "submenu-title" }, clickEvents),
            title,
            React.createElement(Icon, { icon: "angle-down", theme: "primary", size: "sm", className: "arrow-icon" })),
        renderChildren()));
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;

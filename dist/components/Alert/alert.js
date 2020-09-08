import React from 'react';
import classNames from 'classnames';
export var AlertType;
(function (AlertType) {
    AlertType["Success"] = "success";
    AlertType["Error"] = "error";
    AlertType["Warning"] = "warning";
})(AlertType || (AlertType = {}));
var Alert = function (props) {
    var _a;
    var type = props.type, title = props.title, message = props.message;
    var classes = classNames('alert', (_a = {},
        _a["alert-" + type] = type,
        _a));
    var hanlderClose = function () {
        alert('close');
    };
    return (React.createElement("div", { className: classes },
        React.createElement("span", { className: "alert-close", onClick: hanlderClose }, "X"),
        React.createElement("div", { className: "alert-title" }, title),
        React.createElement("div", { className: "alert-message" }, message)));
};
Alert.defaultProps = {
    type: AlertType.Success
};
export default Alert;

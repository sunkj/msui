import React from 'react';
export declare enum AlertType {
    Success = "success",
    Error = "error",
    Warning = "warning"
}
interface BaseAlertProps {
    type: AlertType;
    title: string;
    message: string;
}
declare const Alert: React.FC<BaseAlertProps>;
export default Alert;

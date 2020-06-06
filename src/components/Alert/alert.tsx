import React from 'react';
import classNames from 'classnames';

export enum AlertType {
  Success = 'success',
  Error = 'error',
  Warning = 'warning'
}

interface BaseAlertProps {
  type: AlertType;
  title: string;
  message: string;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const { type, title, message } = props;
  const classes = classNames('alert', {
    [`alert-${type}`]: type
  })
  const hanlderClose = () => {
    alert('close');
  }
  return (
    <div className={classes}>
      <span className="alert-close" onClick={hanlderClose}>X</span>
      <div className="alert-title">{title}</div>
      <div className="alert-message">{message}</div>
    </div>
  )
}

Alert.defaultProps = {
  type: AlertType.Success
}

export default Alert;

import React, { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from 'react';
import classNames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '../Icon/icon'

type InputSize = 'large' | 'small';

interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /**是否禁用 Input */
  disabled?: boolean;
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp;
  /**设置 input 大小，支持 large 或者是 small */
  size?: InputSize;
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | ReactElement;
  /**添加后缀 用于配置一些固定组合 */
  append?: boolean | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 *
 * ~~~js
 * // 这样引用
 * import { Input } from 'msui'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
export const Input: FC<InputProps> = (props) => {
  // 取出所有的属性
  const { disabled, className, icon, size, prepend, append, style, ...restProps } = props;
  // 计算className
  const classes = classNames('form-input-wrapper', className, {
    [`form-input-${disabled}`]: disabled,
    [`form-input-${size}`]: size,
    [`form-input-group-prepend`]: prepend,
    [`form-input-group-append`]: append,
  });
  // 根据属性判断是否需要添加特定的节点
  const normalizeControlValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return '';
    }
    return value;
  }
  // value 如果存在，不允许有defaultValue
  if ('value' in props) {
    delete restProps.defaultValue;
    restProps.value = normalizeControlValue(props.value);
  }
  return (
    <div className={classes} style={style}>
      {prepend && <div className="form-input-group-prepend">{prepend}</div>}
      {icon && <div className="form-input-icon-wrapper"><Icon icon={icon} title={`title-${icon}`} /></div>}
      <input
        className="form-input"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="form-input-group-append">{append}</div>}
    </div>
  );
}

export default Input;
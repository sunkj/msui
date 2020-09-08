import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
export declare type ButtonSize = 'lg' | 'sm';
export declare type ButtonType = 'primary' | 'default' | 'danger' | 'link';
interface BaseButtonProps {
    /** 按钮类型 */
    btnType?: ButtonType;
    /** 按钮尺寸 */
    btnSize?: ButtonSize;
    /** 是否禁用 */
    disabled?: boolean;
    /** 按钮样式 */
    className?: string;
    children: React.ReactNode;
    /** 链接类型按钮的链接地址 */
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 这个是按钮组件
 * @param props
 */
export declare const Button: FC<ButtonProps>;
export default Button;

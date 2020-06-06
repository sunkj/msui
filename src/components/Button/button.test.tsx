import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './button';

const defaultProps = {
  onClick: jest.fn()
}

const testProps = {
  btnType: 'primary',
  btnSize: 'lg',
  className: 'klass'
}

const disabledProps = {
  btnType: 'default',
  disabled: true,
  onClick: jest.fn()
}

describe('Button 组件测试', () => {
  it('预期渲染默认按钮', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
    expect(element.disabled).toBeFalsy();
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('预期渲染正确的按钮根据不同的属性', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn btn-primary btn-lg klass');
  });
  it('预期渲染一个链接按钮，如果提供了href属性', () => {
    const wrapper = render(<Button btnType='link' href="http://www.baidu.com">Link</Button>);
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  });
  it('预期渲染一个禁用的按钮', () => {
    const wrapper = render(<Button {...disabledProps}>Disabled</Button>);
    const element = wrapper.getByText('Disabled') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element.disabled).toBeTruthy();
  });
});
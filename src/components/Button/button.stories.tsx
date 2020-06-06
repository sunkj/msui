import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './button';

const defaultButton = () => (
  <Button onClick={action('click')}>Default Button</Button>
)

const withSizeButton = () => {
  return (
    <div>
      <Button btnSize="lg" onClick={action('click')}>Large Button</Button>
      <Button btnSize="sm" onClick={action('click')}>Small Button</Button>
    </div>
  )
}

const withTypeButton = () => (
  <div>
    <Button btnType="primary" onClick={action('click')}>Primary Button</Button>
    <Button btnType='danger' onClick={action('click')}>Danger Button</Button>
    <Button btnType='default' onClick={action('click')}>Default Button</Button>
    <Button btnType='link' href="https://www.baidu.com" onClick={action('click')}>Link Button</Button>
  </div>
)

storiesOf('Button', module)
  .addParameters({
    info: {
      text: `
        代码示例

        ~~~js
        import { Button } from 'msui'
        ~~~
      `,
    }
  })
  .add('默认Button', defaultButton)
  .add('不同尺寸Button', withSizeButton)
  .add('不同类型Button', withTypeButton)
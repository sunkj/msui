import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './input';

const ChangeInput = () => {
  const [value, setValue] = useState('');
  return <Input style={{ width: '300px' }} value={value} defaultValue={value} onChange={(e) => { setValue(e.target.value) }} />
}

const defaultInput = () => (
  <div>
    <Input
      style={{ width: '300px' }}
      placeholder="placeholder"
      onChange={action('changed')}
    />
    <ChangeInput />
  </div>
)

const disabledInput = () => (
  <Input style={{ width: '300px' }} disabled />
)

const withSizeInput = () => {
  return (
    <div>
      <Input style={{ width: '300px' }} size="large" />
      <Input style={{ width: '300px' }} size="small" />
    </div>
  )
}

const widthIconInput = () => (
  <div>
    <Input style={{ width: '300px' }} icon="search" size="small" placeholder="input with icon" />
  </div>
)

const widthAppendInput = () => (
  <div>
    <Input style={{ width: '300px' }} placeholder="input with prepend" prepend={<span>http://</span>} />
    <Input style={{ width: '300px' }} placeholder="input with append" append={<span>.com</span>} />
  </div>
)

storiesOf('Input', module)
  .addParameters({
    info: {
      text: `
        代码示例

        ~~~js
        import { Input } from 'msui'
        ~~~
      `,
    }
  })
  .add('默认input', defaultInput)
  .add('禁用input', disabledInput)
  .add('不同尺寸Input', withSizeInput)
  .add('带Icon的Input', widthIconInput)
  .add('带前后缀的Input', widthAppendInput)
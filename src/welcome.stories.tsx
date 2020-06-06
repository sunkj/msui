import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

storiesOf('Welcome', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true,
      header: false,
      source: false,
      propTables: false,
    }
  })
  .add('welcome', () => {
    return (
      <div>
        <h1>欢迎来到 MSUI 组件库</h1>
        <p>MSUI 是为慕课网课程打造的一套教学组件库，从零到一让大家去学习</p>
        <h3>安装试试</h3>
        <code>
          npm install msui --save
      </code>
      </div>
    )
  })
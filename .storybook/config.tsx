import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import "../src/styles/index.scss";

const wrapperStyles: React.CSSProperties = {
  padding: '20px 40px',
}

const storyWrapper = (storyFn: any) => {
  return (
    <div style={wrapperStyles}>
      <h3>组件的演示</h3>
      {storyFn()}
    </div>
  )
}

addDecorator(storyWrapper);
addDecorator(withInfo);
addParameters({
  info: {
    inline: true,
    header: true,
    source: false,
  }
});

const loaderFn = () => {
  const allExports = [require('../src/welcome.stories.tsx')];
  const req = require.context('../src/components', true, /\.stories\.tsx$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};


// automatically import all files ending in *.stories.js
configure(loaderFn, module);
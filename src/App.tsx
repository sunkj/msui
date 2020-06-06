import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';

library.add(fas);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-up" theme="danger" size="10x" />
        <Menu
          defaultIndex='0'
          onSelect={(index) => { alert(index) }}
          // mode="vertical"
          defaultOpenSubMenus={['3']}
        >
          <MenuItem>menu1</MenuItem>
          <MenuItem disabled>menu2</MenuItem>
          <MenuItem>menu3</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown1</MenuItem>
            <MenuItem>dropdown2</MenuItem>
          </SubMenu>
        </Menu>
        <Alert type={AlertType.Success} title="Title" message="This is a message"></Alert>
        <Alert type={AlertType.Warning} title="Title" message="This is a message"></Alert>
        <Alert type={AlertType.Error} title="Title" message="This is a message"></Alert>
        <Button className="custom" onClick={(e) => { alert(0) }}>Default</Button>
        <Button disabled>Disabled</Button>
        <Button btnType="primary" btnSize='lg'>Primary Large</Button>
        <Button btnType='link' href="http://baidu.com" target="_blank">Baidu Link</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './menuItem';
import { MenuContext } from './menu';
import Icon from '../Icon/icon';
import Transition from '../Transition/transition'

interface SubMenuProps {
  index?: string;
  title: string;
  className?: string
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props;
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpen = (index && context.mode === 'vertical') ? openedSubMenus.includes(`${index}`) : false;
  const [menuOpen, setOpen] = useState(isOpen);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  });
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  }
  let timeout: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timeout);
    e.preventDefault();
    timeout = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  }
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {};
  const mouseEvents = context.mode === 'horizontal' ? {
    onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
    onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false)
  } : {};
  const renderChildren = () => {
    const subMenuClasses = classNames('submenu', {
      'menu-opened': menuOpen
    });
    const subMenuItem = React.Children.map(children, (child, subIndex) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index: `${index}-${subIndex}` });
      } else {
        console.warn('SubMenu 只接受 MenuItem');
      }
    });
    return (
      <Transition
        in={menuOpen}
        timeout={300}
        animation='zoom-in-top'
      >
        <ul className={subMenuClasses}>
          {subMenuItem}
        </ul>
      </Transition>
    )
  }
  return (
    <li key={index} className={classes} {...mouseEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" theme="primary" size="sm" className="arrow-icon"></Icon>
      </div>
      {renderChildren()}

    </li>
  )
}

SubMenu.displayName = 'SubMenu';

export default SubMenu;
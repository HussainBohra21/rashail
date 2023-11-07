import React from 'react';
import { NavDropdown } from 'react-bootstrap'; // Assuming you are using react-bootstrap

const HeaderMenuItems = ({ title, items, children }) => {
  const renderItems = (menuItems) => {
    return menuItems.map((item, index) => {
      if (Array.isArray(item.children)) {
        const renderedChildren = renderItems(item.children);
        if (renderedChildren.length > 0) {
          return (
            <NavDropdown title={item.label} key={index} menuAlign="right">
              {renderedChildren}
            </NavDropdown>
          );
        }
      } else if (item.link) {
        return (
          <NavDropdown.Item key={index} to={item.link}>
            {item.label}
          </NavDropdown.Item>
        );
      }
      return null; // Return null for items with no link or children
    });
  };

  return (
    <NavDropdown title={title} menuAlign="right">
    {renderItems(items)}
    {children}
  </NavDropdown>
  );
};

export default HeaderMenuItems;

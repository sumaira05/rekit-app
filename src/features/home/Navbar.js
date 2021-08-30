import React from 'react';
const Navbar = props => {
  // console.log('Nav items in navbar are-----', props);
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <img src="images/logo.jpeg" />
        </div>

        <div className="links-container">
          <div className="inner-links-container">
            {props.navItems.map((item, key) => (
              <span
                onClick={() => props.onNavItemClick(item)}
                key={key}
                className={item.active ? 'active' : ''}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

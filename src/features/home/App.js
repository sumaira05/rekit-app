import React, { Component } from 'react';
import Navbar from './Navbar';
import * as commonActoins from '../common/redux/actions';
import * as actions from './redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    // actions: PropTypes.object.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { label: 'Home', active: true },
        { label: 'Services', active: false },
        { label: 'Our Team', active: false },
        { label: 'About us', active: false },
        { label: 'Conatct us', active: false },
      ],
    };
  }

  onNavItemClick = clickedItem => {
    console.log('Item clicked is------', clickedItem);

    let newNavItems = [];

    this.state.navItems &&
      this.state.navItems.map(val => {
        if (val.label === clickedItem.label) {
          newNavItems.push({ label: val.label, active: true });
        } else {
          newNavItems.push({ label: val.label, active: false });
        }
      });

    this.setState({ navItems: newNavItems });
  };

  render() {
    return (
      <div>
        <Navbar navItems={this.state.navItems} onNavItemClick={this.onNavItemClick} />

        {this.props.children}
        {/* <Footer /> */}
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions, ...commonActoins }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as commonActoins from '../common/redux/actions';
import * as actions from './redux/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from './App';
import { HeroSection } from './HeroSection';
import { WhatWeDo } from './WhatWeDo';

export class WelcomePage extends Component {
  render() {
    return (
      <div className="home-welcome-page">
        <HeroSection
          title={'Some title '}
          description={'Some description of around 20 words will be better visualized here!'}
          buttonText={'Send Your Query'}
          buttonAction={''}
          heroImage={'../../../images/hero.jpg'}
          hideBlob={true}
        />
        <WhatWeDo
          topHeading={'What we do ?'}
          subHeading1={'We are in'}
          subHeading2={' a mission!'}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);

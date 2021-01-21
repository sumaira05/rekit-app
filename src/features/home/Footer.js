import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Footer extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-footer">
        <div>
          <div className="sub-footer-1">
            <span>item 1</span>
            <span>item 2</span>
            <span>item 3</span>
          </div>

          <div className="sub-footer-2">
            <span>item 1</span>
            <span>item 2</span>
            <span>item 3</span>
          </div>

          <div className="sub-footer-3">
            <span>item 1</span>
            <span>item 2</span>
            <span>item 3</span>
          </div>
        </div>
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
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

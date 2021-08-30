import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class WhatWeDo extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div classNameName="home-what-we-do">
        <div className="what-we-do-container content-wrapper">
          <div className="what-we-do-title">
            <div className="part-1">
              <span className="font12 primary-text general-text">{this.props.topHeading}</span>
            </div>

            <div className="part-2">
              <span
                className="
                secondary-text
                font26
                bold-text
                general-text-bigger
                splash-title
              "
              >
                {this.props.subHeading1} <br />
                {this.props.subHeading2}
              </span>
            </div>
          </div>

          <div className="what-we-do-description items">
            <div className="neo-card show_item">
              <div className="image-holder">
                <img src="images/bb1.jpg" alt="" />
              </div>
              <div className="card-desc">
                <div className="title">
                  <span className="font12 bold-text">Lorem ipsum dolor sit amet.</span>
                </div>
                <div className="description">
                  <span className="font12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi asperiores
                    praesentium, accusamus animi obcaecati voluptatibus.
                  </span>
                </div>
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <a href="about.html?director">
                    <h2 className="item-text-title">Lorem ipsum dolor sit amet.</h2>
                  </a>
                </div>
              </div>
            </div>
            <div className="neo-card show_item">
              <div className="image-holder">
                <img src="images/bb1.jpg" alt="" />
              </div>
              <div className="card-desc">
                <div className="title">
                  <span className="font12 bold-text">Lorem ipsum dolor sit amet.</span>
                </div>
                <div className="description">
                  <span className="font12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi asperiores
                    praesentium, accusamus animi obcaecati voluptatibus.
                  </span>
                </div>
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <a href="about.html?director">
                    <h2 className="item-text-title">Lorem ipsum dolor sit amet.</h2>
                  </a>
                </div>
              </div>
            </div>
            <div className="neo-card show_item">
              <div className="image-holder">
                <img src="images/bb1.jpg" alt="" />
              </div>
              <div className="card-desc">
                <div className="title">
                  <span className="font12 bold-text">Lorem ipsum dolor sit amet.</span>
                </div>
                <div className="description">
                  <span className="font12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi asperiores
                    praesentium, accusamus animi obcaecati voluptatibus.
                  </span>
                </div>
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <a href="about.html?director">
                    <h2 className="item-text-title">Lorem ipsum dolor sit amet.</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="link-div">
            <a href="./ourgoals.html">
              <span className="font12 bold-text secondary-text">All Goals</span>
              <i className="fas fa-caret-right"></i>
            </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(WhatWeDo);

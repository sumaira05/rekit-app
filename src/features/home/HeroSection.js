import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class HeroSection extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-hero-section">
        <div className="hero-section-container">
          <div className="hero-image-container">
            <img src={this.props.heroImage} />
          </div>
          <div className="hero-overlap">
            <div className="punch-line">
              <div className="punch-line-container">
                <span className="font26 bold-text general-text white-text">{this.props.title}</span>
              </div>

              <div className="baseline">
                <span className="font14 general-text white-text">{this.props.description}</span>
              </div>
              <div className="main-button-container">
                <div className="main-button">
                  <a href="./donateus.html">{this.props.buttonText}</a>
                </div>
              </div>
            </div>
            <div className="hero-side-image">
              {this.props.hideBlob ? null : (
                <div className="blob-shape">
                  <div className="image-container">
                    <img src={this.props.image} alt="image" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* <div style={{ top: '70%', left: '69%' }} className="rotating-square"></div>
          <div style={{ top: '55%', left: '40%' }} className="rotating-square"></div>
          <div style={{ top: '40%', left: '55%' }} className="rotating-square"></div>
          <div style={{ top: '25%', left: '38%' }} className="rotating-square"></div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);

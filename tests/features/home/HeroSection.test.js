import React from 'react';
import { shallow } from 'enzyme';
import { HeroSection } from '../../../src/features/home/HeroSection';

describe('home/HeroSection', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <HeroSection {...props} />
    );

    expect(
      renderedComponent.find('.home-hero-section').length
    ).toBe(1);
  });
});

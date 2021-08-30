import React from 'react';
import { shallow } from 'enzyme';
import { WhatWeDo } from '../../../src/features/home/WhatWeDo';

describe('home/WhatWeDo', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <WhatWeDo {...props} />
    );

    expect(
      renderedComponent.find('.home-what-we-do').length
    ).toBe(1);
  });
});

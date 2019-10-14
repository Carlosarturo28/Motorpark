import React from 'react';
import { shallow } from 'enzyme';
import Title from './index';

describe('Title', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Title debug />);
  
    expect(component).toMatchSnapshot();
  });

  it('should render Title correctly with given props', () => {
  const props = { title: 'This is a Test', color: '#065' };
  const component = shallow(<Title title={props.title} color={props.color} />);
  expect(component).toMatchSnapshot();
});
});
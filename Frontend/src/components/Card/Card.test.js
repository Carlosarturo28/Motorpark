import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe('Card', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Card debug />);
  
    expect(component).toMatchSnapshot();
  });

it('should render card correctly with given props', () => {
  const props = { brand: 'Kia', model: 'Cerato', year: 2019, color: 'black', plate: 'TST002' };
  const component = shallow(<Card brand={props.brand} model={props.model} year={props.year} color={props.color} plate={props.plate} />);
  expect(component).toMatchSnapshot();
});

});
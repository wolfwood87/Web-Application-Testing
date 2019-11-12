import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Strikes from '../Components/Strikes';

Enzyme.configure({ adapter: new EnzymeAdapter()});

test('Strikes render', () => {
  const wrapper = shallow(<Strikes />);
  const strikeCom = wrapper.find("[data-test='strike-Com']");
  expect(strikeCom.length).toBe(1);
});
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Balls from '../Components/Balls';

Enzyme.configure({ adapter: new EnzymeAdapter()});

test('Strikes render', () => {
  const wrapper = shallow(<Balls />);
  const ballCom = wrapper.find("[data-test='ball-Com']");
  expect(ballCom.length).toBe(1);
});
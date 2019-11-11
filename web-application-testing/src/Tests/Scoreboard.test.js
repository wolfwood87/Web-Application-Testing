import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import ScoreBoard from '../Components/ScoreBoard';

Enzyme.configure({ adapter: new EnzymeAdapter()});

test('Scoreboard renders', () => {
  const wrapper = shallow(<ScoreBoard />);
  const scoreCom = wrapper.find("[data-test='score-Com']");
  expect(scoreCom.length).toBe(1);
});
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App.js';

Enzyme.configure({ adapter: new EnzymeAdapter()});

test('App renders', () => {
  const wrapper = shallow(<App />);
  const appCom = wrapper.find("[data-test='app-Com']");
  expect(appCom.length).toBe(1);
});
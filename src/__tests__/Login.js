import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../pages/Login';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Enzyme allows to test simulated events able to run with latest React
Enzyme.configure({ adapter: new Adapter() });

// TEST WRITTEN IN JEST
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

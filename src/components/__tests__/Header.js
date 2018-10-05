import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Enzyme, { mount,shallow,render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Enzyme allows to test simulated events able to run with latest React
Enzyme.configure({ adapter: new Adapter() });
describe('login rendering', ()=>{
  // TEST WRITTEN IN JEST
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the header logo',()=>{
    expect(shallow(<Header/>).find('#smallLogo').exists()).toBe(true)
  })
  it('renders an dropdown menu', ()=>{
    expect(shallow(<Header/>).find('.burger').exists()).toBe(true)
  })
  it('renders a logout button', ()=>{
    expect(shallow(<Header/>).find('.logout').exists()).toBe(false)
  })
  it('renders a login button',()=>{
    expect(shallow(<Header/>).find('.login').exists()).toBe(true)
  })
  it('renders a home button',()=>{
    expect(shallow(<Header/>).find('.home').exists()).toBe(true)
  })
  it('renders a Contact Us button',()=>{
    expect(shallow(<Header/>).find('.contactUs').exists()).toBe(true)
  })
  it('renders an About button',()=>{
    expect(shallow(<Header/>).find('.about').exists()).toBe(true)
  })
  it('renders a register button',()=>{
    expect(shallow(<Header/>).find('.register').exists()).toBe(true)
  })
})

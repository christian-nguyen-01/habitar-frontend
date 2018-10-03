import React from 'react';
import ReactDOM from 'react-dom';
import Register from '../Register';
import Enzyme, { mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Enzyme allows to test simulated events able to run with latest React
Enzyme.configure({ adapter: new Adapter() });
describe('register render',()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Register />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the form',()=>{
    expect(shallow(<Register/>).find('form.registerForm').exists()).toBe(true)
  })
  it('renders an email input', ()=>{
    expect(shallow(<Register/>).find('#email').exists()).toBe(true)
  })
  it('renders an password input', ()=>{
    expect(shallow(<Register/>).find('#password').exists()).toBe(true)
  })
  it('renders a submit button',()=>{
    expect(shallow(<Register/>).find('#submit').exists()).toBe(true)
  })
})

describe('register input',()=>{
it('should respond to a change to the email field',()=>{
  const wrapper = mount(<Register/>)
  // expect(wrapper.state().user).toEqual({email: "e@me.com", password: ""})
  expect(wrapper.state().form.user.email).toEqual("")
  wrapper.find('#email').simulate('change', {target: {name: 'email', value:'test@mail.com'}})
  expect(wrapper.state().form.user.email).toEqual("test@mail.com")
})
it('should respond to a change to the password field',()=>{
  const wrapper = mount(<Register/>)
  // expect(wrapper.state().user).toEqual({email: "e@me.com", password: ""})
  expect(wrapper.state().form.user.password).toEqual("")
  wrapper.find('#password').simulate('change', {target: {name: 'password', value:'password'}})
  expect(wrapper.state().form.user.password).toEqual("password")
  })
})

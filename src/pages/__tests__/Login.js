import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login';
import Enzyme, { mount,shallow,render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Enzyme allows to test simulated events able to run with latest React
Enzyme.configure({ adapter: new Adapter() });
describe('login rendering', ()=>{
  // TEST WRITTEN IN JEST
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the form',()=>{
    expect(shallow(<Login/>).find('form.loginForm').exists()).toBe(true)
  })
  it('renders an email input', ()=>{
    expect(shallow(<Login/>).find('input#email').exists()).toBe(true)
  })
  it('renders an password input', ()=>{
    expect(shallow(<Login/>).find('input#password').exists()).toBe(true)
  })
  it('renders a submit button',()=>{
    expect(shallow(<Login/>).find('input#submit').exists()).toBe(true)
  })
})

describe('login input',()=>{
  it('should respond to a change to the email field',()=>{
    const wrapper = mount(<Login/>)
    // expect(wrapper.state().user).toEqual({email: "e@me.com", password: ""})
    expect(wrapper.state().user.email).toEqual(" ")
    wrapper.find('#email').simulate('change', {target: {name: 'email', value:'test@mail.com'}})
    expect(wrapper.state().user.email).toEqual("test@mail.com")
  })
  it('should respond to a change to the password field',()=>{
    const wrapper = mount(<Login/>)
    // expect(wrapper.state().user).toEqual({email: "e@me.com", password: ""})
    expect(wrapper.state().user.password).toEqual("")
    wrapper.find('#password').simulate('change', {target: {name: 'password', value:'password'}})
    expect(wrapper.state().user.password).toEqual("password")
  })
})

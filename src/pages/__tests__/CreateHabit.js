// import React from 'react';
// import ReactDOM from 'react-dom';
// import CreateHabit from '../CreateHabit';
// import Enzyme, { mount,shallow,render } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
//
// // Enzyme allows to test simulated events able to run with latest React
// Enzyme.configure({ adapter: new Adapter() });
// describe('login rendering', ()=>{
//   // TEST WRITTEN IN JEST
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<CreateHabit />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });
//   it('renders the form',()=>{
//     expect(shallow(<CreateHabit/>).find('form.createForm').exists()).toBe(true)
//   })
//   it('renders an child input', ()=>{
//     expect(shallow(<CreateHabit/>).find('input#child').exists()).toBe(true)
//   })
//   it('renders an habit_name input', ()=>{
//     expect(shallow(<CreateHabit/>).find('input#habit_name').exists()).toBe(true)
//   })
//   it('renders a habit_description button',()=>{
//     expect(shallow(<CreateHabit/>).find('input#habit_description').exists()).toBe(true)
//   })
//   it('renders an reward input', ()=>{
//     expect(shallow(<CreateHabit/>).find('input#reward').exists()).toBe(true)
//   })
//   it('renders a habitar button',()=>{
//     expect(shallow(<CreateHabit/>).find('input#habitar').exists()).toBe(true)
//   })
//   it('renders an reminder_time input', ()=>{
//     expect(shallow(<CreateHabit/>).find('input#reminder_time').exists()).toBe(true)
//   })
//   it('renders an submit input', ()=>{
//     expect(shallow(<CreateHabit/>).find('input#submit').exists()).toBe(true)
//   })
// })

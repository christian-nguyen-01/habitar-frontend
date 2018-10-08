import React from 'react'
import ReactDOM from 'react-dom'
import HabitCard from '../HabitCard'
import Enzyme, { mount,shallow,render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });
let testobject=JSON.parse('{"id":1,"user_id":1,"created_at":"2018-10-04T18:52:36.427Z","updated_at":"2018-10-04T18:52:36.427Z","habit_name":"Being Chill","child":"Daquan","streak_count":3,"habitar":3,"reward":"Ice cream","completed":false,"habit_description":"Do not cry for 2 hours in a row","reminder_time":"2000-01-01T08:30:00.000Z"}')


describe('HabitCard rendering',()=>{
  it('renders without crashing',()=>{
    const div = document.createElement('div');
    ReactDOM.render(<HabitCard habit={testobject} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the contents', ()=>{
    const wrapper = mount(<HabitCard habit={testobject}/>)
    expect(wrapper.find('.habitCard')).toBeTruthy() //// TODO: get the actual contents of the card
  })
  it('renders the edit link to EditHabit component',()=>{
      const wrapper = mount(<HabitCard habit={testobject}/>)
    expect(wrapper.find('.edit').exists()).toBe(true)
  })
  it('renders the delete link',()=>{
      const wrapper = mount(<HabitCard habit={testobject}/>)
    expect(wrapper.find('.delete').exists()).toBe(true)
  })
})

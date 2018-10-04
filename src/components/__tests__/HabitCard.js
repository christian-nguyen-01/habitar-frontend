import React from 'react'
import ReactDOM from 'react-dom'
import HabitCard from '../HabitCard'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

let testobject={user_id: user1.id, habit_name: 'Being Chill', child: 'Daquan', streak_count: 3, habitar: 3, reward: 'Ice cream', completed: false, habit_description: 'Do not cry for 2 hours in a row', reminder_time: '08:30:00'}

Enzyme.configure({adapter: new Adapter()})
describe('HabitCard rendering',()=>{
  it('renders without crashing',()=>{
    const div = document.createElement('div');
    ReactDOM.render(<HabitCard habit={testobject} />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders the contents', ()=>{
    expect(mount(<HabitCard habit={testobject/>}).find(<p>)).toBe(true)
  }) 
})

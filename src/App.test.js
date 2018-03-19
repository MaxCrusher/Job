import React from 'react';
import ReactDOM from 'react-dom';
import Drag from './Drag';
import 'jest-enzyme';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('<Drag/>', ()=>{
  const wrupper = shallow(<Drag/>);
  it('renders without crashing', () => {
    expect(wrupper).toMatchSnapshot();
    console.log(wrupper.name());
  });
  it('render',()=>{
    expect(wrupper.name()).toEqual("div");
  })
}); 
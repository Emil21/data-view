import React from 'react';
import ReactDOM from 'react-dom';
import SignalGraph from '../Components/SignalGraph';

describe('SignalGraph page test', () => {

  let div = null;
  beforeAll(() => {
    return div = document.createElement('div');
  });

  const newData = [
    {
      data : [1,2,1,0,1,2,1,8,9,8,1,2,0,2,1,2,3,1,2,0,8,9,2,0,3,0,2,1,2,3,8,10,2,1,2,3,0,1,2,1,2,7,6,9,1,2,0,1,2,1],
      signal: [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
    }
  ];

  it('renders without crashing', () => {
    ReactDOM.render(<SignalGraph data={newData} index={0} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


});

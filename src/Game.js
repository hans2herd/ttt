import React, { Component } from 'react'
import './App.css'
import OPiece from './OPiece'
import XPiece from './XPiece'


class App extends Component {
  render() {
    return (
      <div>
          <div>

            <div className='ttt'>
              <div className='upper-left'> <OPiece/> </div>
              <div className='upper-middle'></div>
              <div className='upper-right'></div>
            </div>

            <div className='ttt'>
              <div className='middle-left'></div>
              <div className='middle-middle'> <XPiece/> </div>
              <div className='middle-right'></div>
            </div>

            <div className='ttt'>
              <div className='bottom-left'></div>
              <div className='bottom-middle'></div>
              <div className='bottom-right'></div>
            </div>

          </div>
      </div>
        );
      }
  }

export default App;

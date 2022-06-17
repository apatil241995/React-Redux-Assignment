import './App.css';
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { ADD, REMOVE } from './redux/item_list';


function App() {
  const [item, setItem] = useState('');
  const itemList = useSelector(state => state.itemList.value)
  const dispatch = useDispatch()

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(ADD(item))
  }
  return (
    <div className="App">
      <form onSubmit={handelSubmit}>
        <label>Add item</label><br></br>
        <input
          type="text"
          name='add_item'
          onChange={(e) => {
            setItem(e.target.value);
          }}
        ></input><br></br>
        <button type='submit'>
          add
        </button>
      </form>
      {itemList.map((i) => {
        return (
          <div>
            <h1>{i}</h1>
            <button onClick={() => dispatch(REMOVE(i))}>
              remove
            </button>
          </div>
        )
      })}
    </div>
  );
}

export default App;

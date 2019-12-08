import React from 'react';

const List = props => (
  <ul>
    {props.items.map((item, index) => (
      <li key={index}>
        <div onClick={props.deleteItem.bind(this, item)} className='delete'>
          &times;
        </div>
        {item}
      </li>
    ))}
  </ul>
);

export default List;

import React from 'react';

function ListSelector({ lists, onChange }) {
  return (
    <div className="list-selector">
      <label htmlFor="selected-list">List to put on parade:</label>
      <select name="selected-list" onChange={onChange} >
        <option></option>
        { lists.map(list => <option key={list.id} value={list.id}>{list.name}</option>) }
      </select>
    </div>
  );
}

export default ListSelector;

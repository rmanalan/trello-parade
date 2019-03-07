import React from 'react';

function ListSelector({ lists, onChange }) {
  return (
    <>
      <label htmlFor="selected-list">List to put on parade:</label>
      <select name="selected-list" onChange={onChange.bind(this.)} >
        <option></option>
        { lists.map(list => <option key={list.id} value={list.id}>{list.name}</option>) }
      </select>
    </>
  );
}

export default ListSelector;

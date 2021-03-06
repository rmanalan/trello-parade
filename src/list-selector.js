import React from 'react';

function ListSelector({ lists, onChange }) {
  return (
    <div className="list-selector">
      <select name="selected-list" onChange={onChange} >
        <option value="">Select a list to present...</option>
        { lists.map(list => <option key={list.id} value={list.id}>{list.name}</option>) }
      </select>
    </div>
  );
}

export default ListSelector;

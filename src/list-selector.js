import React from 'react';

function ListSelector({ lists }) {
  return (
    <select>
      { lists.map(list => <option value={list.id}>{list.name}</option>) }
    </select>
  );
}

export default ListSelector;

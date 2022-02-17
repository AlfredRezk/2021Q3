import React from 'react'
import ListItem from './ListItem';

const TodosList = (props) => {

  return (
    <ul>
      { props.todos.map(t =>
        <ListItem
          listText={ t.title }
          key={ t.id.toString() }
          onDelete={ props.onDelete } id={ t.id }
        />)
      }
    </ul>
  ); 
};

export default TodosList;
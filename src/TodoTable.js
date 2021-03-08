import React from "react";

const TodoTable = ({ todos, onDelete }) => {
  return (
    <table>
      <tbody>
        {todos.map((todo, i) => (
          <tr key={i}>
            <td>{todo.description}</td>
            <td>{todo.date}</td>
            <td>
              <button onClick={() => onDelete(i)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;

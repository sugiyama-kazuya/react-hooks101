import React from "react";

const Event = ({ dispatch, event }) => {
  const id = event.id;
  const handleClickDeleteBtn = () => {
    dispatch({
      type: "DELETE_EVENTS",
      id,
      title: event.title,
      body: event.body,
    });
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button className="btn btn-danger" onClick={handleClickDeleteBtn}>
          削除
        </button>
      </td>
    </tr>
  );
};

export default Event;

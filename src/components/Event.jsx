import React from "react";
import { DELETE_EVENTS } from "../actions/index";

const Event = ({ dispatch, event }) => {
  const id = event.id;
  const handleClickDeleteBtn = () => {
    const result = window.confirm(`イベント(id:${id})を削除しても良いですか？`);

    if (result)
      dispatch({
        type: DELETE_EVENTS,
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

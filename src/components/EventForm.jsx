import React, { useState } from "react";
import { DELETE_ALL_EVENTS, CREATE_EVENTS } from "../actions/index";

const EventForm = ({ state, dispatch }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e) => {
    e.preventDefault();

    dispatch({
      type: CREATE_EVENTS,
      title,
      body,
    });

    resetState();
  };

  const resetState = () => {
    setTitle("");
    setBody("");
  };

  const deleteAllEvent = (e) => {
    e.preventDefault();
    const result = window.confirm(
      "全てのイベントを本当に削除しても良いですか？"
    );
    if (result) dispatch({ type: DELETE_ALL_EVENTS });
  };

  const unCreatable = title === "" || body === "" ? true : false;

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            id="formEventTitle"
            className="form-control"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="formEventBody">ボディ</label>
          <textarea
            id="formEventBody"
            className="form-control"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          作成する
        </button>
        <button
          type="submit"
          className="btn btn-danger"
          onClick={deleteAllEvent}
          disabled={state.length === 0}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;

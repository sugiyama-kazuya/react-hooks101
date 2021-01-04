import React from "react";
import Event from "../components/Event";

const Events = ({ state, dispatch }) => {
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">タイトル</th>
            <th scope="col">ボディ</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event event={event} dispatch={dispatch} key={index} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;

import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Events from "../components/Events";
import EventForm from "../components/EventForm";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={"元気ですか？"}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
};

export default App;

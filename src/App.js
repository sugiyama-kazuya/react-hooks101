import React, { useState, useEffect } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  useEffect(() => {
    console.log("get");
  });

  return (
    <>
      <p>現在の価格は{price}</p>
      <p>{name}です</p>
      <button>+1</button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

App.defaultProps = {
  name: "和也",
  price: 1000,
};

export default App;

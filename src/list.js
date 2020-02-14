import React from "react";
import "./App.css";

const List = () => {
  const [getItem, setItem] = React.useState("");
  const [getItems, setItems] = React.useState([]);

  const handleItem = event => {
    setItem({ item: event.target.value });
  };

  let item = Object.values(getItem);

  const handleItems = () => {
    setItems(items => [...items, item]);
  };

  let itemList = Object.values(
    getItems.map(item => (
      <div class="card">
        <div class="card-body">
          <h1>{item}</h1>
          <p>Description </p>
        </div>
      </div>
    ))
  );
  return (
    <div>
      <div className="input">
        <input
          placeholder="item"
          name="item"
          value={Object.values(getItem)}
          onChange={handleItem}
        />
        <button onClick={handleItems}>Add</button>
      </div>

      <ul>{itemList}</ul>
    </div>
  );
};

export default List;

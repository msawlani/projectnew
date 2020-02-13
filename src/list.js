import React from "react";
import "./App.css";

const List = () => {
  const [getItem, setItem] = React.useState("");
  const [getItems, setItems] = React.useState([]);

  const handleItem = event => {
    setItem({ item: event.target.value });
  };

  const handleItems = () => {
    setItems(items => [...items, Object.values(getItem)]);
  };

  let itemList = Object.values(getItems.map(item => <li>{item}</li>));
  return (
    <div>
      <input
        placeholder="item"
        name="item"
        value={Object.values(getItem)}
        onChange={handleItem}
      />
      <button onClick={handleItems}>Add</button>
      <ul>{itemList}</ul>
    </div>
  );
};

export default List;

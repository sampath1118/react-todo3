import React, { useState } from "react";
import logo from "./images/todologo.png";

const App = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [editItem, setEditItem] = useState(null);

  const addItem = () => {
    if (!data) {
      alert("please add items");
    } else if (data && !toggle) {
      setItems(
        items.map((elem) => {
          if (elem.id === editItem) {
            return { ...items, name: data };
          }
          return elem;
        })
      );
      setToggle(true);
      setData("");
      setEditItem(null);
    } else {
      const allData = { id: new Date().getTime().toString(), name: data };
      setItems([...items, allData]);
    }
    setData("");
  };

  const deleteItems = (id) => {
    const remainedItems = items.filter((val) => {
      return val.id !== id;
    });
    setItems(remainedItems);
  };

  const deleteAll = () => {
    setItems([]);
  };

  const editItems = (id) => {
    const editableItem = items.find((elements) => {
      return elements.id === id;
    });
    setData(editableItem.name);
    setToggle(false);
    setEditItem(id);
  };
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <img src={logo} alt="todo logo" />
          <figcaption>Add Your List Here</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder="✍️Add Items Here..."
            value={data}
            onChange={(event) => setData(event.target.value)}
          />
          {toggle ? (
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={addItem}
            ></i>
          ) : (
            <i
              className="fa fa-edit add-btn"
              title="Add Item"
              onClick={addItem}
            ></i>
          )}
        </div>
        <div className="showItems">
          {items.map((curVal) => {
            return (
              <div className="eachItem" key={curVal.id}>
                <h3>{curVal.name}</h3>
                <div className="todo-btn">
                  <i
                    className="far fa-edit add-btn"
                    title="EDit Item"
                    onClick={() => editItems(curVal.id)}
                  ></i>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() => deleteItems(curVal.id)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="showItems">
          <button
            className="btn effect04"
            data-sm-link-text="Remove All"
            onClick={deleteAll}
          >
            <span>CHECK LIST</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

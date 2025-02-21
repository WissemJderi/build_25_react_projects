import { useState } from "react";
import data from "./data";
import "./styles.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    let cpyMultiple = [...multiple];
    const findeIndexOfCurrentId = cpyMultiple.indexOf(currentId);
    if (findeIndexOfCurrentId === -1) cpyMultiple.push(currentId);
    else cpyMultiple.splice(findeIndexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  }
  return (
    <>
      <div className="wrapper">
        <button
          className="enbale"
          onClick={() => setMultiSelection(!multiSelection)}
        >
          Enable Multi Selection{" "}
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div className="item" key={item.id}>
                <div
                  className="title"
                  onClick={() =>
                    multiSelection
                      ? handleMultiSelection(item.id)
                      : handleSingleSelection(item.id)
                  }
                >
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                  <div className="content">{item.answer}</div>
                ) : null}
              </div>
            ))
          ) : (
            <div>No data found!</div>
          )}
        </div>
      </div>
    </>
  );
}

import React from "react";
import "./inputfields.css";

export default function InputFields() {
  return (
    <div className="inputfields-el">
      <div className="item1">
        <label>
          Top Text
          <input
            type="text"
            className="form--input"
            placeholder="Top Text"
          ></input>
        </label>
      </div>
      <div className="item2">
        <label>
          Bottom Text
          <input
            type="text"
            className="form--input"
            placeholder="Bottom Text"
          ></input>
        </label>
      </div>

      <button id="new-meme-btn" className="item3">
        Get new meme image 🖼️
      </button>
    </div>
  );
}

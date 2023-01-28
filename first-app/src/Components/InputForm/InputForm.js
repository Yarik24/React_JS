import { memo, useState } from "react";
import './InputFormStyle.css';

function InputForm({ setMessageList }) {
    const [nameValue, setNameValue] = useState("");
    const [textValue, setTextValue] = useState("");

    function submitHandler(e) {
    e.preventDefault();
    setMessageList((prev) => [...prev, { author: nameValue, text: textValue }]);
    setTextValue("");
    };
    
    return (
    <form className="form">
      <label className="form_name">Name : <input type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)}></input></label>
      <label className="form_text">Message : <input type="text" value={textValue} onChange={(e) => setTextValue(e.target.value)} ></input></label>
      <button type="submit" className="form_submit" onClick={(e) => submitHandler(e)}>Send</button>
    </form >
  );
};

export default memo(InputForm);
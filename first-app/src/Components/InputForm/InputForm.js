
import { memo, useState, useEffect, useRef } from "react";
import {TextField, Button } from '@material-ui/core';
import './InputFormStyle.css';

function InputForm({ setMessageList }) {

    const [nameValue, setNameValue] = useState("");
    const [textValue, setTextValue] = useState("");
    const inputRef = useRef();
    
      useEffect(() => {
       inputRef.current?.focus();
      }, [textValue]);
    

    function submitHandler(e) {
    e.preventDefault();
    setMessageList((prev) => [...prev, { author: nameValue, text: textValue }]);
    setTextValue("");
    };
    
    return (
    <form className="form">
            <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                size="small"
                required
                className="form_name"
                type="text"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
            ></TextField>
            <TextField
                id="outlined-basic"
                label="Message"
                variant="outlined"
                size="small"
                className="form_text"
                inputRef={inputRef}
                type="text"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
            ></TextField>
            <Button
                variant="contained"
                color="secondary"
                type="submit"
                className="form_submit"
                onClick={(e) => submitHandler(e)}
            >
                Send
            </Button>
    </form >
  );
};

export default memo(InputForm);
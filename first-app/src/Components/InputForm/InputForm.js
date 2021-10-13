import { memo, useState, useEffect, useRef } from "react";
import {TextField, Button } from '@material-ui/core';
import './InputFormStyle.css';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import addMessage from "../../Action/MessagesActions";

function InputForm({ chatId }) {

    const [textValue, setTextValue] = useState("");
    const inputRef = useRef();
    const author = useSelector((state) => state.profile.name, shallowEqual);
    const dispatch = useDispatch();
    
      useEffect(() => {
       inputRef.current?.focus();
      }, [textValue]);
    
    function submitHandler(e) {
    e.preventDefault();
    dispatch( addMessage(chatId, textValue, author) );
    setTextValue("");
    };
    
    return (
    <form className="form">
            <TextField
               sx={{
                 width: 500,
                }}
                id="outlined-basic"
                label="Message"
                variant="outlined"
                size="small"
                required
                className="form_text"
                type="text"
                value={nameValue}
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
import { memo, useState, useEffect, useRef } from "react";
import {TextField, Button } from '@material-ui/core';
import './InputFormStyle.css';
import { useDispatch } from "react-redux";
import addMessage from "../../Action/messagesActions";
import { getRandomQuote, getQuotesByAnimeName } from "../../Action/quotesAction";

function InputForm({ chatId, author }) {

    const [textValue, setTextValue] = useState("");
    const inputRef = useRef();
    const dispatch = useDispatch();
    
      useEffect(() => {
       inputRef.current?.focus();
      }, [textValue]);
    
    function submitHandler(e) {
    e.preventDefault();
    dispatch( addMessage(chatId, textValue, author) );
    setTextValue("");
    };
  
    function quotesSubmitHandler(e) {
    e.preventDefault();
    if (textValue) dispatch(getQuotesByAnimeName(textValue));
    else dispatch(getRandomQuote());
    setTextValue("");
    }
    
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
                inputRef={inputRef}
                className="form_text"
                type="text"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
            ></TextField>
            <Button
                variant="contained"
                color="secondary"
                type="submit"
                className="form_submit"
                onClick={(e) => {
                  chatId ? chatSubmitHandler(e) : quotesSubmitHandler(e);
                }}
             >
                Send
            </Button>
    </form >
  );
};

export default memo(InputForm);
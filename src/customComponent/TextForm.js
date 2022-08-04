import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCaseCLick = (e) => {
    e.preventDefault();
    setText(text.toUpperCase());
  };

  const Change = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState(" This is useState text");

  return (
    <form>
     {props.alert &&  <div className={`alert alert-${props.alert.type}`} role="alert">
       {props.alert.message} 
      </div>}

      <h2
        htmlFor="floatingTextarea2"
        style={props.theme === "dark" ? { color: "white" } : { color: "black" }}
      >
        {props.heading}
      </h2>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="'floatingTextarea2"
          value={text}
          onChange={Change}
          style={
            props.theme === "dark"
              ? {
                  backgroundColor: "black",
                  color: "white",
                  height: "200px",
                  width: "90%",
                  margin: "0rem 4rem 0rem 4rem",
                  borderColor: "white",
                  borderWidth: ".1rem",
                }
              : {
                  backgroundColor: "white",
                  color: "black",
                  height: "200px",
                  width: "90%",
                  margin: "0rem 4rem 0rem 4rem",
                  borderColor: "black",
                  borderWidth: ".1rem",
                }
          }
        ></textarea>
        <button
          className="btn btn-primary"
          onClick={handleUpperCaseCLick}
          style={{ margin: "1rem 0 0 3.5rem" }}
        >
          Convert
        </button>
      </div>
      <div className="constainer">
        <h3
          style={
            props.theme === "dark" ? { color: "white" } : { color: "black" }
          }
        >
          Text Summery
        </h3>
        <h4
          style={
            props.theme === "dark" ? { color: "white" } : { color: "black" }
          }
        >
          No of letters: {text.length}
        </h4>
        <h4
          style={
            props.theme === "dark" ? { color: "white" } : { color: "black" }
          }
        >
          No of words: {text.split(" ").length - 1}
        </h4>

        <h2
          style={
            props.theme === "dark" ? { color: "white" } : { color: "black" }
          }
        >
          Preview the Text:
        </h2>
        <p
          style={
            props.theme === "dark" ? { color: "white" } : { color: "black" }
          }
        >
          {text}
        </p>
      </div>
    </form>
  );
}

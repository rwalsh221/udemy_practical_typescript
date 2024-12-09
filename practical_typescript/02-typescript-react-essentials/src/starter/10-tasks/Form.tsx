import React, { useState } from "react";
import { type Task } from "./types";

type FormProps = {
  addTask: (task: Task) => void;
};

const Form = ({ addTask }: FormProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter a task");
      return;
    }
    addTask({
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    });
    console.log(text);
    setText("");
  };

  return (
    <form className="form task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn">
        add task
      </button>
    </form>
  );
};

export default Form;

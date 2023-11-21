"use client";

import React, { useState } from "react";

function UseTitle() {
  const [title, settitle] = useState("");
  return [title, settitle];
}

function UseDesc() {
  const [desc, setdesc] = useState("");
  return [desc, setdesc];
}

function Maintask() {
  const [mainTask, setMainTask] = useState([]);
  return [mainTask, setMainTask];
}

const page = () => {
  const [title, settitle] = UseTitle();
  const [desc, setdesc] = UseDesc();
  const [mainTask, setMainTask] = Maintask();

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };

  let renderTask = <h2>No Task available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <>
          <li key={i} className="flex items-center justify-between mb-8">
            <div className="flex items-center justify-between w-2/3">
              <h5 className="text-2xl font-semibold">{t.title}</h5>
              <h6 className="text-lg font-medium">{t.desc}</h6>
            </div>
            <button
              onClick={() => {
                deleteHandler(i);
              }}
              className="bg-red-400 text-white px-4 py-2 rounded font-bold"
            >
              Delete
            </button>
          </li>
        </>
      );
    });
  }

  return (
    <>
      <h1 className="text-white bg-yellow-500 p-5 text-5xl font-bold text-center">
        My Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-yellow-600 border-4 m-8 px-4 py-2"
          placeholder="Enter Task here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-yellow-600 border-4 m-8 px-4 py-2"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-yellow-500 text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-yellow-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;

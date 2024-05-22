import React from "react";
import './Components.css'

const AddNoteContainer = () => {
  return (
    <form className="form-container">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Enter Title
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Enter Description
        </label>
        <textarea class="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" class="btn btn-success">
        Add Note
      </button>
    </form>
  );
};

export default AddNoteContainer;

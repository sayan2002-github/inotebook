import React from "react";
import './Components.css'

const NoteItem = ({ title, description, tags }) => {
  return (
    <div class="card card-container">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">
          {description}
        </p>
        <p className="tag-grp">
            {tags}
        </p>
        <div className="btn-grp">
            <button className="btn btn-info">Update Note</button>
            <button className="btn btn-danger">Delete Note</button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;

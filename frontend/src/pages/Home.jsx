import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMail, updateUser } from "../store/UserSlice";
import NotesContainer from "../components/NotesContainer";
import AddNoteContainer from "../components/AddNoteContainer";

const Home = () => {
  const { username, email } = useSelector((state) => state.userDetails);
  const { notes } = useSelector((state) => state.noteDetails);
  const dispatch = useDispatch();
  const newUser = useRef();
  const newEmail = useRef();

  return (
    <div className="container mb-5">
      <AddNoteContainer/>      
      <NotesContainer/>
    </div>
  );
};

export default Home;

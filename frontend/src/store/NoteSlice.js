import { createSlice } from "@reduxjs/toolkit";

const notes = [
  {
    _id: "664abac1c37f090433e5801c",
    userId: "664abbe8feaae51ba52ee87f",
    title: "Updaated note 1",
    description: "Note1 hellooooo...",
    tags: "#hellops",
    date: "2024-05-20T02:51:45.808Z",
    __v: 0,
  },
  {
    _id: "664abafdc37f090433e58020",
    userId: "664abbe8feaae51ba52ee87f",
    title: "Demo Note 2",
    description: "It is a demo note 2 used for testing..",
    tags: "#hello-world",
    date: "2024-05-20T02:52:45.149Z",
    __v: 0,
  },,
  {
    _id: "664abafdc37f090433e58020",
    userId: "664abbe8feaae51ba52ee87f",
    title: "Demo Note 2",
    description: "It is a demo note 2 used for testing..",
    tags: "#hello-world",
    date: "2024-05-20T02:52:45.149Z",
    __v: 0,
  },,
  {
    _id: "664abafdc37f090433e58020",
    userId: "664abbe8feaae51ba52ee87f",
    title: "Demo Note 2",
    description: "It is a demo note 2 used for testing..",
    tags: "#hello-world",
    date: "2024-05-20T02:52:45.149Z",
    __v: 0,
  },,
  {
    _id: "664abafdc37f090433e58020",
    userId: "664abbe8feaae51ba52ee87f",
    title: "Demo Note 2",
    description: "It is a demo note 2 used for testing..",
    tags: "#hello-world",
    date: "2024-05-20T02:52:45.149Z",
    __v: 0,
  },
];

const noteSlice = createSlice({
  name: "noteDetails",
  initialState: {notes},
  reducers: {
    updateNote: ()=>{

    },
    deleteNote: ()=>{

    },
  }
});

export const {updateNote, deleteNote} = noteSlice.actions;
export default noteSlice;
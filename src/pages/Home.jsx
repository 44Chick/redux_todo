import React from "react";
import List from "../components/List";
import InputForm from "../components/InputForm";
import '../App.css'

function Home() {
  return (
    <div className="App">
      <InputForm />
      <List />
    </div>
  )
}

export default Home
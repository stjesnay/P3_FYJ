import React from "react";
import "./App.css";


//import axios from "axios";

function App() {
  const [artifact, setArtifact] = React.useState(null);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/getArtifactData")
      .then((res) => res.json())
      .then((artifact) => setArtifact(artifact.name));
  }, [])
  console.log("getartifactdata");

  React.useEffect(() => {
    fetch("/api/getUserData")
      .then((res) => res.json())
      .then((user) => setUser(user.name));
  }, [])
  console.log("getuserdata");

  return (
    <div className="App">
      <header className="App-header">
        <p>{!user ? "Loading..." : user}</p>
        <p>{!artifact ? "Loading..." : artifact}</p>
      <button className="btn btn-primary">HELLO WORLD</button>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import { Greet } from "./component/Greet";
import { Person } from "./component/Person";
import { PersonList } from "./component/PersonList";

function App() {
  const name = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <>
      <Greet name='surendra' messageCount={10} isLoggedIn={false} />
      <Person name={name} />
      <PersonList names={nameList} />
    </>
  );
}

export default App;

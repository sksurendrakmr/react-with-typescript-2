import React from "react";
import { Greet } from "./component/Greet";
import { Heading } from "./component/Heading";
import { Oscar } from "./component/Oscar";
import { Person } from "./component/Person";
import { PersonList } from "./component/PersonList";
import { Status } from "./component/Status";

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
      <Greet name='surendra' isLoggedIn={false} />
      <Person name={name} />
      <PersonList names={nameList} />
      <Status status='success' />

      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
    </>
  );
}

export default App;

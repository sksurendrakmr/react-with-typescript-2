import React from "react";
import Button from "./component/Button";
import { Container } from "./component/Container";
import { Greet } from "./component/Greet";
import { Heading } from "./component/Heading";
import { Input } from "./component/Input";
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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log("Button Clicked", e, id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <>
      <Greet name='surendra' messageCount={10} isLoggedIn={false} />
      {/* Optional Props */}
      <Greet name='surendra' isLoggedIn={false} />
      {/* Object props type */}
      <Person name={name} />
      {/* Array props types */}
      <PersonList names={nameList} />
      {/* Union String literal */}
      <Status status='success' />

      {/* Children props  */}
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      {/* Event props */}
      <Button handleClick={handleClick} />
      <Input value='' handleChange={handleChange} />

      {/* CSS Props */}
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
    </>
  );
}

export default App;

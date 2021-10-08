import React from "react";
//Typing ob object

export type Name = {
  first: string;
  last: string;
};
type PersonProps = {
  name: Name;
};
export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

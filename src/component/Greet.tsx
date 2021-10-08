import React from "react";

/**
 * We need to inform typescript what is the structure of this
 * props passed. By default, it could be any structure which typescript will
 * be not happy about.
 *
 * So we need to let typescript know what is the type for the props we are passed.
 *
 * So we need a way to inform the type of props to typescript.
 *
 */

/**
 *Advantage of typing props
  1) we will get autocomple suggesting we might need propert name(in our example)
  2) While invoking the component in App.tsx, If we try to pass in any other data type 
     apart from string. Typescript straight away points the doubt.

     Thus, now we are able to identify the issues when we are typing the code rather than figuring out in browser.
 */

/**
 * A component props is an object.
 * We have now defined the strucuture or the type of the props
 * that the component will recieve.
 */
type GreetProps = {
  name: string;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome {props.name}! Let's get started with typescript.</h2>
    </div>
  );
};

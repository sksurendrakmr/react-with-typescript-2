import React, { ReactNode } from "react";
//reactNode children props
type OscarProps = {
  children: ReactNode;
};
export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};

import React from "react";

type StatusProps = {
  status: "loading" | "success" | "error"; //Union
};
export const Status = (props: StatusProps) => {
  let message: string;
  switch (props.status) {
    case "loading":
      message = "Loading...";
      break;
    case "success":
      message = "Data fetched successfully";
      break;
    case "error":
      message = "Error feteching data";
      break;
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

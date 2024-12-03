import React from "react";
import { observer } from "../../reactive-react";
import { useField } from "../hooks";

export function mapProps(...args) {
  return (target) => {
    return observer((props) => {
      const field = useField();
      const results = args.reduce(
        (props, mapper) => {
          return Object.assign(props, mapper(props, field));
        },
        { ...props },
      );
      return React.createElement(target, results);
    });
  };
}

export function connect(target, ...args) {
  const Target = args.reduce((target, mapper) => {
    return mapper(target);
  }, target);
  // eslint-disable-next-line react/display-name
  return (props) => {
    return React.createElement(Target, { ...props });
  };
}

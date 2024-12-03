import React from "react";
import { useForm } from "../hooks";
import { ReactiveField } from "./ReactiveField";
import { FieldContext } from "../shared";

export const Field = (props) => {
  const form = useForm();
  const field = form.createField(props);
  return (
    <FieldContext.Provider value={field}>
      <ReactiveField field={field}>{props.children}</ReactiveField>
    </FieldContext.Provider>
  );
};

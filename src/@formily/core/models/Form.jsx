import { define, observable } from "../../reactive";
import { Field } from "./Field";
import { FormPath } from "../../shared";

export class Form {
  values = {};
  fields = {};

  constructor(props) {
    this.initialize(props);
    this.makeObservable();
    this.makeValues();
  }

  initialize(props) {
    this.props = { ...props };
  }

  makeObservable() {
    define(this, {
      values: observable,
      fields: observable.shallow,
    });
  }

  makeValues() {
    this.values = this.props.values;
  }

  createField(props) {
    const address = FormPath.parse().concat(props.name);
    new Field(address, props, this);
    return this.fields[address.entire];
  }
}

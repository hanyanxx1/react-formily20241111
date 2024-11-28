import { define, observable } from "../../reactive";

export class Field {
  constructor(address, props, form) {
    this.props = { ...props };
    this.form = form;
    this.locate(address);
    this.initialize();
    this.makeObservable();
  }

  initialize() {
    this.value = this.props.value;
  }

  makeObservable() {
    define(this, {
      value: observable,
    });
  }

  locate(address) {
    this.form.fields[address.entire] = this;
  }
}

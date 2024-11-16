// import { observable, autorun, define } from "./@formily/reactive";
// const form = {
//   values: { username: { value: "zhangfeng" } },
//   fields: { username: { name: "用户名" } },
// };

// define(form, {
//   values: observable,
//   fields: observable.shallow,
// });

// autorun(() => {
//   console.log(form.values, form.values.username, form.values.username.value);
//   console.log(form.fields, form.fields.username, form.fields.username.name);
// });

// form.values.username.value = "jiagou";
// form.fields.username.name = "密码";

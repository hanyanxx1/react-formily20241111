// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <App />
// )

import { observable, autorun } from "@/@formily/reactive";

const values = { username: "zhangsan", home: { name: "hy" } };
const observableValues = observable(values);
console.log(observableValues);
console.log(observableValues.username);
console.log(observableValues.home);
console.log(observableValues.home);

/* autorun(() => {
  console.log(observableValues.username);
});
observableValues.username = "jiagou"; */

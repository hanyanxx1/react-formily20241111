import { createForm } from "./@formily/core";
import { FormProvider, Field } from "./@formily/react";
import { FormItem, Input } from "./@formily/antd";
const form = createForm();
const App = () => {
  return (
    <FormProvider form={form}>
      <Field
        name="username"
        title="用户名"
        value="jiagou"
        decorator={[FormItem]}
        component={[Input]}
      />
      <button
        onClick={() => {
          form.submit(console.log);
        }}
      >
        提交
      </button>
    </FormProvider>
  );
};

export default App;

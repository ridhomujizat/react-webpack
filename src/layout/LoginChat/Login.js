import React from "react";
import "./login.styles.scss";
import ChatContex from "../../context/ChatContext";
import BasicInput from "../../component/BasicInput";
import { Formik, Form } from "formik";

export default function Login() {
  const { login, setLogin } = React.useContext(ChatContex);
  React.useEffect(() => {
    // console.log(login);
  });
  return (
    <div className="wgchat-login">
      <p>Please fill out the form below to begin chatting with us</p>
      <Formik
        initialValues={{
          email: "",
          name: "",
          mobile: "",
          gender: ""
        }
        }
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ errors, touched, values, handleChange, handleBlur, isValid }) => (
          <Form>
            {field.map((val, index) => (
              <BasicInput
                key={index}
                name={val.name}
                type={val.type}
                placeholder={val.placeholder}
                data={val.data}
                onChange={handleChange}
                value={values[val.name]}
              />
            ))}
            <button
              type="submit"
            >
              Start Chat
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const field = [
  {
    name: "email",
    placeholder: "Email",
    type: "text",
  },
  {
    name: "name",
    placeholder: "Name",
    type: "text",
  },
  {
    name: "mobile",
    placeholder: "Mobile Phone",
    type: "number",
  },
  {
    name: "gender",
    placeholder: "Gender",
    type: "select",
    data: [
      {
        value: "male",
        label: "Male",
      },
      {
        value: "female",
        label: "Female",
      },
    ],
  },
];

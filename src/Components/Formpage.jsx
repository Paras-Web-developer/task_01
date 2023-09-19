import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLocation, useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 500px;
  margin: 0 auto;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #1e7e34;
  }

  .form-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: baseline;

    input[type="text"],
    input[type="number"],
    input[type="email"],
    select,
    textarea {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      width: 100%;
      outline: none;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
    }

    input[type="radio"],
    input[type="checkbox"] {
      margin-right: 5px;
    }
  }

  .error {
    color: red;
    font-size: 12px;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    button {
      flex: 1;
      padding: 10px;
      margin: 0 2px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .preview-button {
      background-color: #007bff;
      color: #fff;

      &:hover {
        background-color: #0056b3;
      }
    }

    .submit-button {
      background-color: #28a745;
      color: #fff;

      &:hover {
        background-color: #1e7e34;
      }
    }
  }
`;

export default function Formpage() {
  const [data, setData] = useState({});
  function send() {
    if (Object.keys(data).length !== 0) {
      navigate("/preview", { state: { formData: data } });
    }
  }
  console.log(data);
  const navigate = useNavigate(); // Get the navigate function
  const location = useLocation();

  return (
    <Wrapper>
      <h1>Please Fill the Form</h1>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          number: "",
          gender: "",
          interests: [],
          location: "",
          textarea: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }
          if (!values.number) {
            errors.number = "Required";
          }
          if (!values.gender) {
            errors.gender = "Required";
          }
          if (values.interests.length < 2) {
            errors.interests = "Select at least 2 interests";
          }
          if (!values.location) {
            errors.location = "Select a location";
          }
          if (!values.textarea) {
            errors.textarea = "Required";
          } else if (values.textarea.length < 50) {
            errors.textarea = "Textarea must be at least 100 characters";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            setData(values);
            // After form submission, navigate to the Preview component
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-field">
              <label htmlFor="name">Enter Name :</label>
              <Field
                type="text"
                name="name"
                placeholder="Enter Name"
                required
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-field">
              <label htmlFor="lastName">Last Name :</label>
              <Field
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                required
              />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>
            <div className="form-field">
              <label htmlFor="number">Enter Number :</label>
              <Field
                type="number"
                name="number"
                placeholder="Enter Number"
                required
              />
              <ErrorMessage name="number" component="div" className="error" />
            </div>
            <div className="form-field">
              <label>Gender:</label>
              <div>
                <label>
                  <Field type="radio" name="gender" value="Male" /> Male
                </label>
                <label>
                  <Field type="radio" name="gender" value="Female" /> Female
                </label>
              </div>
              <ErrorMessage name="gender" component="div" className="error" />
            </div>
            <div className="form-field">
              <label>Interests:</label>
              <div>
                <label>
                  <Field
                    type="checkbox"
                    name="interests"
                    value="Reading Books"
                  />{" "}
                  Reading Books
                </label>
                <label>
                  <Field
                    type="checkbox"
                    name="interests"
                    value="Watching Movies"
                  />{" "}
                  Watching Movies
                </label>
                <label>
                  <Field type="checkbox" name="interests" value="Others" />{" "}
                  Others
                </label>
              </div>
              <ErrorMessage
                name="interests"
                component="div"
                className="error"
              />
            </div>
            <div className="form-field">
              <label htmlFor="location">Location:</label>
              <Field as="select" name="location" required>
                <option value="">Select Location</option>
                <option value="Delhi">Delhi</option>
                <option value="Noida">Noida</option>
                <option value="Gurugram">Gurugram</option>
                <option value="Sonipat">Sonipat</option>
                <option value="Rohtak">Rohtak</option>
              </Field>
              <ErrorMessage name="location" component="div" className="error" />
            </div>
            <div className="form-field">
              <label htmlFor="textarea">About:</label>
              <Field
                as="textarea"
                name="textarea"
                rows={5}
                cols={30}
                placeholder="Write here"
                required
              />
              <ErrorMessage name="textarea" component="div" className="error" />
            </div>
            <div className="button-container" type="submit">
              {/* Use a regular button to trigger form submission */}
              <button onClick={send}>preview</button>
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}

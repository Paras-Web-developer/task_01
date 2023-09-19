import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-color: #f0f0f0;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 500px;
  margin: 0 auto;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .data-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: baseline;
  }

  .label {
    font-weight: bold;
    margin-bottom: 5px;
    color: #1e7e34;
  }

  .value {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 100%;
    outline: none;
  }
  .text .value {
    overflow: scroll;
  }
`;

export default function Preview() {
  const location = useLocation();
  const formData = location?.state?.formData;

  return (
    <Wrapper>
      <h1>Preview</h1>
      <div className="data-field">
        <span className="label">Name:</span>
        <span className="value">{formData?.name}</span>
      </div>
      <div className="data-field">
        <span className="label">Last Name:</span>
        <span className="value">{formData?.lastName}</span>
      </div>
      <div className="data-field">
        <span className="label">Number:</span>
        <span className="value">{formData?.number}</span>
      </div>
      <div className="data-field">
        <span className="label">Gender:</span>
        <span className="value">{formData?.gender}</span>
      </div>
      <div className="data-field">
        <span className="label">Interests:</span>
        <span className="value">{formData?.interests.join(", ")}</span>
      </div>
      <div className="data-field">
        <span className="label">Location:</span>
        <span className="value">{formData?.location}</span>
      </div>
      <div className="data-field text">
        <span className="label">About:</span>
        <span className="value">{formData?.textarea}</span>
      </div>
      <Link to="/" className="back-button">
        Back to Form
      </Link>
    </Wrapper>
  );
}

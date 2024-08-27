import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const location = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?keyword=${keyword}`);
    } else {
      navigate(location.pathname);
    }
  };
  return (
    <Form onSubmit={submitHandler} className="d-flex mx-4">
      <Form.Group>
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Button type="submit" variant="light">
        SEARCH
      </Button>
    </Form>
  );
}

export default SearchBox;

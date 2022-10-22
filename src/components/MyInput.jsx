import React from 'react';
import {InputGroup, Form} from "react-bootstrap";

const MyInput = ({ type, name }) => {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">

            </InputGroup.Text>
            <Form.Control
                type={ type }
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
            />
        </InputGroup>
    );
};

export default MyInput;
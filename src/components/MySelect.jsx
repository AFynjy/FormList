import React from 'react';
import {Dropdown, DropdownButton, InputGroup, Form} from "react-bootstrap";

const MySelect = () => {
    return (
        <InputGroup className="mb-3">
            <DropdownButton
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-1"
            >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
            <Form.Control aria-label="Text input with dropdown button" />
        </InputGroup>
    );
};

export default MySelect;
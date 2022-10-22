import React, { useState } from "react";
import MySelect from "./MySelect";
import MyInput from "./MyInput";

const FormCards = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <div style={{ display: "flex", justifyContent: "columns" }}>
        <div style={{ padding: "0 7% 0 0" }}>
          <MyInput value={value} type="text" />
          <MyInput type="date" />
          <MyInput type="date" />
          <MyInput type="text" />
          <MyInput type="text" />
          <MySelect />
          <MySelect />
          <MySelect />
          <MySelect />
          <MySelect />
          <MyInput type="text" />
          <MyInput type="text" />
        </div>
        <div>
          <MyInput type="text" />
          <MyInput type="date" />
          <MyInput type="date" />
          <MyInput type="text" />
          <MyInput type="text" />
          <MySelect />
          <MySelect />
          <MySelect />
          <MySelect />
          <MySelect />
          <MyInput type="text" />
          <MyInput type="text" />
        </div>
      </div>
    </>
  );
};

export default FormCards;

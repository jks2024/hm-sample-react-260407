// 이름, 회사, 주소, 이메일을 입력 받아 제출 버튼을 누르면 정보를 화면에 표시 하기
// onchage, onClick, useState 사용

import { useState } from "react";

const NameCardEx = () => {
  const [form, setFormm] = useState({
    name: "",
    company: "",
    addr: "",
    email: "",
  });

  const [sumit, setSubmit] = useState(false);

  const handleChange = (key, value) => {
    setFormm({ ...form, [key]: value }); // ES6에서 부터 지원하는 문법은 계산된 속성명
  };

  return (
    <>
      <input
        type="text"
        placeholder="이름 입력"
        onChange={(e) => handleChange("name", e.target.value)}
        value={form.name}
      />
      <br />
      <input
        type="text"
        placeholder="회사 입력"
        onChange={(e) => handleChange("company", e.target.value)}
        value={form.company}
      />
      <br />
      <input
        type="text"
        placeholder="주소 입력"
        onChange={(e) => handleChange("addr", e.target.value)}
        value={form.addr}
      />
      <br />
      <input
        type="text"
        placeholder="이메일 입력"
        onChange={(e) => handleChange("email", e.target.value)}
        value={form.email}
      />
      <br />
      <button onClick={() => setSubmit(true)}>제출</button>

      {sumit && (
        <>
          <h3>명함 정보</h3>
          <p>이름 : {form.name}</p>
          <p>회사 : {form.company}</p>
          <p>주소 : {form.addr}</p>
          <p>이메일 : {form.email}</p>
        </>
      )}
    </>
  );
};

export default NameCardEx;

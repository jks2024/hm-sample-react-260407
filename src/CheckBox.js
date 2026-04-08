import { useState } from "react";

const CheckBox = () => {
  const [val, setVal] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setVal([...val, value]);
    } else {
      setVal(val.filter((e) => e !== value)); // 체크가 안된 값을 제외해서 새로운 별을 만들서 set
    }
  };

  return (
    <>
      <label htmlFor="apple">
        <input
          type="checkbox"
          id="apple"
          value="apple"
          onChange={handleChange}
        />
        사과
      </label>
      <br />
      <label htmlFor="banana">
        <input
          type="checkbox"
          id="banana"
          value="banana"
          onChange={handleChange}
        />
        바나나
      </label>
      <br />
      <label htmlFor="grape">
        <input
          type="checkbox"
          id="grape"
          value="grape"
          onChange={handleChange}
        />
        포도
      </label>
      <br />
      <p>선택된 항목 : {val}</p>
    </>
  );
};

export default CheckBox;

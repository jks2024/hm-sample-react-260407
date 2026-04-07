import React from "react";
import "./App.css";
// JSX(JavaScript XML) : 리액트에서 사용하는 비표준 문법
// HTML과 자바스크립트를 횬용하는 방식
// 실제 브라우저에서 실행은 Babel이라는 라이브러리를 통해 자바스크립트와 html로 분리되어 실행
// {} 표현식 사용 가능
// 한개의 태그로 반환해야 함.(감싸인 태그) 여러개의 태그로 구성되는 경우 <></>로 반환 해야 함
// 이름, 주소, 성별, 나이를 표현식을 사용해 출력 해보기
// 인라인 스타일링 : 리액트에서 DOM요소에 스타일링을 적용할때는 문자열 형태가 아니고 객체 형태로 넣어야 함 (사용하지 않는 방식)
// class 선택자는 className으로 사용해야 함 :
// 주소, 성별, 나이에 대한 클래스 선택자 만들고 적용하기
// 조건부 렌더링 : if 문은 사용할 수 없지만, 조건부 연산자(?)를 사용해 조건에 따라 렌더링 할 수 있음
// 조건부 렌더링 : &&
const style = {
  backgroundColor: "#222",
  color: "royalBlue",
  fontSize: "2em",
};

const JsxBasic = () => {
  const name = "곰돌이.";
  const addr = "충남 천안시";
  const gender = "남성";
  const age = 16;
  return (
    <>
      <h1 style={style}>JSX 문법</h1>
      {name === "곰돌이" && (
        <h3 className="name">안녕하세요.저는 {name}입니다.</h3>
      )}
      <h4>주소는 {addr}입니다.</h4>
      <h4>성별은 {gender} 입니다.</h4>
      {age > 18 ? <h4>성인 입니다.</h4> : <h4>미성년자 입니다.</h4>}
      <h4>나이는 {age} 입니다.</h4>
    </>
  );
};

export default JsxBasic;

import React, { useState } from "react";
import DropDown from "./DropDown";

export let itemType = "신발";

function MyComponent() {
  const [formData, setFormData] = useState({
    fname: "뉴 샌달",
    fprice: "3000000",
    ftype: "신발",
    fdate: new Date().toISOString().substring(0, 10),
    fisMemo: true,
    Memo: "선물입니다!!!",
    fisrepurchasing: true,
    fisNotRepurchsing: true,
  });

  function changeHandle(event) {
    event.preventDefault();

    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function submitHandle(event) {
    event.preventDefault();

    const outputDiv = document.querySelector(".main-output");
    const newOutput = document.createElement("div");
    newOutput.innerText =
      formData.fname +
      " " +
      formData.fprice +
      " " +
      formData.ftype +
      " " +
      formData.fdate +
      " " +
      formData.Memo;

    outputDiv.appendChild(newOutput);
  }

  return (
    <div className="InputComponent">
      <form className="main-input-form" onSubmit={submitHandle}>
        <label>
          이름{" "}
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={changeHandle}
            required
          />
        </label>

        <label>
          가격{" "}
          <input
            type="number"
            name="fprice"
            value={formData.fprice}
            onChange={changeHandle}
            required
          />
        </label>

        <label>
          유형{" "}
          <DropDown
            menuName="상품 유형"
            param1="신발"
            param2="옷"
            param3="가구"
          />
        </label>

        <label>
          구입 날짜
          <input
            type="date"
            name="fdate"
            value={formData.fdate}
            onChange={changeHandle}
            required
          />
        </label>

        <label>
          메모 <input type="checkbox" name="fisMemo" />
          <input
            type="text"
            name="Memo"
            value={formData.Memo}
            onChange={changeHandle}
          />
        </label>

        <label>
          재구매 의사
          <input type="radio" name="fisrepurchasing" onChange={changeHandle} />
          <input
            type="radio"
            name="fisNotRepurchsing"
            value={formData.fisNotRepurchsing}
            onChange={changeHandle}
          />
        </label>

        <button type="submit">입력하기</button>
      </form>
      <form className="main-sort">
        <DropDown
          menuName="상품 유형"
          param1="신발"
          param2="옷"
          param3="가구"
        />
        <DropDown
          menuName="정렬 기준"
          param1="가격 높은 순"
          param2="가격 낮은 순"
          param3="최신 순"
          param4="오래된 순"
        />
        <div className="main-first-date">
          시작 기간
          <input
            type="date"
            value={new Date().toISOString().substring(0, 10)}
          />
        </div>
        <div className="main-second-date">
          끝 기간
          <input
            type="date"
            value={new Date().toISOString().substring(0, 10)}
          />
        </div>
      </form>
      <div className="main-output"></div>
    </div>
  );
}

export default MyComponent;

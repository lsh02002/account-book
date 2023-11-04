import React, { useState } from "react";

function MyComponent() {
  const [formData, setFormData] = useState({
    fname: "이세호",
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
          <input
            type="text"
            name="ftype"
            value={formData.ftype}
            onChange={changeHandle}
            required
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
        <div className="main-dropdown-1"></div>
        <div className="main-dropdown-2"></div>
        <div className="main-first-date"></div>
        <div className="main-second-date"></div>
      </form>
      <div className="main-output"></div>
    </div>
  );
}

export default MyComponent;

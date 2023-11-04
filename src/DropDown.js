import "./DropDown.css";

function DropDown(props) {
  return (
    <div class="dropdown">
      <button class="dropbtn">{props.menuName}</button>
      <div class="dropdown-content">
        <a href="https://www.naver.com">{props.param1}</a>
        <a href="https://www.naver.com">{props.param2}</a>
        <a href="https://www.naver.com">{props.param3}</a>
        <a href="https://www.naver.com">{props.param4}</a>
      </div>
    </div>
  );
}

export default DropDown;

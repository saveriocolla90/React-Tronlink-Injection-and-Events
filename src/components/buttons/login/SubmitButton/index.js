import { SubmitBtn } from "./SubmitBtn.styles";
import "./SubmitButton.css";

const SubmitButton = ({ ...props }) => {
  return (
    <div className="SubmitButton">
      <SubmitBtn
        className="btn"
        disabled={props.disabled}
        onClick={() => props.onClick()}
      >
        {props.text}
      </SubmitBtn>
    </div>
  );
};

export default SubmitButton;

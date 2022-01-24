import { useRef } from "react";

import { useDispatch } from "react-redux";
import { closeModal } from "../../store/actions/signinAction";

import CutstomButton from "../Button/CustomButton";

import "./SigninModal.scss";

function SigninModal(props) {
  const dispatch = useDispatch();
  const overlayRef = useRef();

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      dispatch(closeModal());
    }
  };

  return (
    <div
      ref={overlayRef}
      onClick={(e) => handleOverlayClick(e)}
      className="modal__wrapper"
    >
      <div className="modal__container">
        <div className="modal__title">SIGN IN</div>
        <form id="sign-in" className="modal__form">
          <label htmlFor="signin__email">
            E-mail:
            <input
              required
              type="email"
              name="signin__email"
              className="modal__input"
              placeholder="Enter e-mail"
            />
          </label>
          <label htmlFor="signin__password">
            Password:
            <input
              required
              type="password"
              name="signin__password"
              className="modal__input"
              placeholder="Enter password"
            />
            <div className="modal__forgot">Forgot password?</div>
          </label>
          <CutstomButton
            buttonType={"submit"}
            buttonClassname={"modal__button"}
          >
            SIGN IN
          </CutstomButton>
        </form>
        <div className="modal__swap">
          Don't have an account account? <span>Create now</span>
        </div>
      </div>
    </div>
  );
}

export default SigninModal;

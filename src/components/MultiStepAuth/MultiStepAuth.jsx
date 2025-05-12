import { FormEvent, useState } from "react";
import { AccountForm } from "./forms/AccountForm";
import { AddressForm } from "./forms/AddressForm";
import { useMultistepForm } from "./hook/useMultistepForm";
import { UserForm } from "./forms/UserForm";
import { Container } from "@mui/material";

import "./MultiAuth.css";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function MultiStepAuth() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <AddressForm {...data} updateFields={updateFields} />,
      <UserForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  }

  return (
    <Container maxWidth="xl">
      <div className="mainBlock">
        <form onSubmit={onSubmit}>
          <div className="mainBlock_info">
            <div className="mainBlock_nav">
              {/* {currentStepIndex + 1} / {steps.length} */}
              <div
                style={{
                  backgroundColor:
                    currentStepIndex + 1 == 1
                      ? "var(--colorMain)"
                      : "var(--colorMainDark)",
                }}>
                1 Выбор типа аккаунта
              </div>
              <div
                style={{
                  backgroundColor:
                    currentStepIndex + 1 == 2
                      ? "var(--colorMain)"
                      : "var(--colorMainDark)",
                }}>
                2 Ввод данных
              </div>
              <div
                style={{
                  backgroundColor:
                    currentStepIndex + 1 == 3
                      ? "var(--colorMain)"
                      : "var(--colorMainDark)",
                }}>
                3 Подтверждение почты
              </div>
            </div>
            <div className="mainBlock_step">{step}</div>
          </div>
          <div className="mainBlock_contoller ">
            <button type="button" onClick={back} className="mainBlock_btn">
              Вернуться
            </button>
            <button type="submit" className="mainBlock_btn">
              Продолжить
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default MultiStepAuth;

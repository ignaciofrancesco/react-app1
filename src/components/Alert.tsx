import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onCloseButtonClicked: () => void;
}

const Alert = ({ children, onCloseButtonClicked }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onCloseButtonClicked}
      ></button>
    </div>
  );
};

export default Alert;

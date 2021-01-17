import "./Button.scss";

export const Button = ({ onClick, className, children, ...props }) => {
  return (
    <button
      className={`custom-button ${className ? className : ""}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

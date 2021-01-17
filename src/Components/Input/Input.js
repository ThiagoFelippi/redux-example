import "./Input.scss";

export const Input = ({ inputRef, ...props }) => {
  return <input ref={inputRef} className="custom-input" {...props} />;
};

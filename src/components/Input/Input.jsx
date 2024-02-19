import "./Input.css";

export default function Input({ children, className, name, ...props }) {
  return (
    <div className={className}>
      <label htmlFor={name}>{children}</label>
      <input id={name} name={name} {...props} />
    </div>
  );
}

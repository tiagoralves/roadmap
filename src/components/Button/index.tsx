import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...rest }: ButtonProps) {
  return (
    <button type="button" className={styles.ButtonContainer} {...rest}>
      {children}
    </button>
  );
}

export default Button;

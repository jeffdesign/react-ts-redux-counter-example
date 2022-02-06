import { useAppSelector } from "../../app/hooks";
import { selectCount } from "../counter/update";
import styles from "./Header.module.css";

export function Header() {
  const count = useAppSelector(selectCount);

  const fizzBuzz = (count: number) => {
    if (count % 3 === 0 && count % 5 === 0) {
      return "FizzBuzz";
    } else if (count % 3 === 0) {
      return "Fizz";
    } else if (count % 5 === 0) {
      return "Buzz";
    } else {
      return "";
    }
  };

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{fizzBuzz(count)}</span>
      </div>
    </div>
  );
}

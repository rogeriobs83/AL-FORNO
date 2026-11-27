import type { FunctionalComponent } from "preact";
// cspell:ignore menutest
import Styles from "./menutest.module.scss";

interface MenutestProps {
  path?: string;
}

export const Menu: FunctionalComponent<MenutestProps> = () => {
  return (
    <div className={Styles.container}>
      <div className="image">
        <img src="/CHRISTMAS MENU.png" alt="Menu Image" />
      </div>
    </div>
  );
};

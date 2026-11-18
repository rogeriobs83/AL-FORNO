import type { FunctionalComponent } from "preact";
import Styles from "./menu.module.scss";

interface MenuProps {
  path?: string;
}

export const Menu: FunctionalComponent<MenuProps> = () => (
  <div className={Styles.container}>
    {/* <a
      className={Styles.pdfViewer}
      href="/PDF/PENNE.pdf"
      title="Menu em PDF"
    /> */}
    <img src="/Menu/1.svg" alt="Menu em PDF" className={Styles.pdfViewer} />
    <img src="/Menu/2.svg" alt="Menu em PDF" className={Styles.pdfViewer} />
    <img src="/Menu/3.svg" alt="Menu em PDF" className={Styles.pdfViewer} />
    <img src="/Menu/4.svg" alt="Menu em PDF" className={Styles.pdfViewer} />
    <img src="/Menu/5.svg" alt="Menu em PDF" className={Styles.pdfViewer} />
    <img src="/Menu/6.svg" alt="Menu em PDF" className={Styles.pdfViewer} />
    <img src="/Menu/7.svg" alt="Menu em PDF" className={Styles.pdfViewer} />
    <img src="/Menu/8.svg" alt="Menu em PDF" className={Styles.pdfViewer} />
  </div>
);

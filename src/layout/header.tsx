import Styles from "./header.module.scss";
import { Navbar } from "../components/navbar/navbar";
import { useEffect, useState } from "preact/hooks";



export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className={Styles.spacer}></div>
    <header className={`${Styles.header} ${scrolled ? Styles.scrolled : ""}`}>

      <div className={Styles.container}>
        <div className={Styles.brand}>
          <img src="/Logo.svg" alt="" />
          {/* <div className={Styles.text}>
          <h3>AL FORNO - PUTNEY</h3>
          <p>Authentic Sicilian Cuisine</p>
          </div> */}
        </div>
        <Navbar />
      </div>

    </header>
    </> 
  );
}

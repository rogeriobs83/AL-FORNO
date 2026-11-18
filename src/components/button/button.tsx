import Styles from "./button.module.scss";
import type { ReactNode } from "react";

export function Button({ children, href, className }: { children: ReactNode; href?: string; className?: string }) {
    return (
        <button className={`${Styles.button} ${className ?? ""}`} onClick={() => href && (window.location.href = href)}>{ children }</button>
    );
}
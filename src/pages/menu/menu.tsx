import type { FunctionalComponent } from "preact";
import Styles from "./menu.module.scss";

interface MenuProps {
  path?: string;
}

export const Menu: FunctionalComponent<MenuProps> = () => {
  // You can add any state or logic here if needed
  const content = [
    {
      title: "Main Menu",
      description:
        "Discover our carefully curated selection of Italian dishes, crafted with the freshest ingredients.",
      image: "/1.webp",
      link: "/MAIN MENU.pdf",
    },
    {
      title: "Desserts",
      description:
        "Indulge in our delectable Italian desserts, made to perfection.",
      image: "/2.webp",
      link: "/DESSERTS.pdf",
    },
    {
      title: "Drinks & Cocktails",
      description:
        "Quench your thirst with our selection of Italian beverages, from classic wines to refreshing soft drinks.",
      image: "/Capa.webp",
      link: "/Drink.pdf"
    }
  ];
  return (
    <div className={Styles.container}>
      {content.map((item) => (
        <div>
          <div className={Styles.cards}>
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                View Full Menu
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

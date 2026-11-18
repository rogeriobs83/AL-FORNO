import type { FunctionalComponent } from "preact";
// cspell:ignore menutest
import Styles from "./menutest.module.scss";

interface MenutestProps {
  path?: string;
}

export const Menu: FunctionalComponent<MenutestProps> = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.top_right}>
        <div className={Styles.bottom_right}>
          <div className={Styles.top_left}>
            <div className={Styles.bottom_left}>
              <div className={Styles.wrapper}>
                <div className={Styles.content}>
                  <h1 className={Styles.mainTitle}>Christmas Menu</h1>
                  <h3 className={Styles.contentH3}>
                    £49.95 PER PERSON (INC. GLASS OF PROSECCO)
                  </h3>
                </div>
                <div className={Styles.Starter}>
                  <h2>✦ Starters ✦</h2>
                  <p>
                    <span className={Styles.block}>
                      <span className={Styles.product}>Melanzane al Forno</span>
                      . Baked aubergine, tomato, and buffalo
                    </span>
                    <span className={Styles.block}>
                      mozzarella layered & finished with breadcrumbs and
                      Parmesan
                    </span>
                  </p>
                  <p>
                    <span className={Styles.block}>
                      <span className={Styles.product}>Bruschetta Trio</span>.
                      Ricotta, Parmesan & truffle oil; Buffalo
                    </span>
                    <span className={Styles.block}>
                      mozzarella & pesto; seasoned tomatoes, basil & pesto
                    </span>
                  </p>
                  <p>
                    <span className={Styles.block}>
                      <span className={Styles.product}>Arancini Misti.</span>{" "}
                      Random selection of crispy risotto balls filled
                    </span>
                    <span className={Styles.block}>
                      with either ‘nduja or truffle
                    </span>
                  </p>
                  <p>
                    <span className={Styles.block}>
                      <span className={Styles.product}>
                        Foccacia con Parma & Burrata.
                      </span>{" "}
                      Warm focaccia, Parma Ham,
                    </span>
                    <span className={Styles.block}>
                      pulled burrata & fresh basil
                    </span>
                  </p>
                </div>
                <div className={Styles.Starter}>
                  <h2>✦ Main Course ✦</h2>
                  <p>
                    <span className={Styles.block}>
                      <span className={Styles.product}>Lasagna Bianca</span>.
                      White lasagna layered with chicken, mushrooms,
                    </span>
                    <span className={Styles.block}>
                      spinach, bechamel & Parmesan
                    </span>
                  </p>
                  <p>
                    <span className={Styles.block}>
                      <span className={Styles.product}>
                        Penne alla Norma Piccante.
                      </span>
                      Pasta with garlic, onions, & aubergine,
                    </span>
                    <span className={Styles.block}>
                      cooked in a spicy tomato sauce and topped with buffalo
                      mozzarella
                    </span>
                  </p>
                  <p>
                    <span className={Styles.block}>
                      <span className={Styles.product}>
                        Pollo alla Parmigiana.
                      </span>{" "}
                      Breaded chicken breast, tomato sauce &
                    </span>
                    <span className={Styles.block}>
                      melted mozzarella, served with roasted potatoes & mixed
                      vegetables
                    </span>
                  </p>
                  <p>
                    <span className={Styles.block}>
                      <span className={Styles.product}>
                        Costolette d’Agnello.
                      </span>{" "}
                      Grilled lamb cutlets, seasoned with
                    </span>
                    <span className={Styles.block}>
                      rosmeary, salt & pepper, served with sauteed potatoes
                    </span>
                  </p>
                </div>
                <div className={Styles.Starter}>
                  <h2>✦ Desserts ✦</h2>
                  <p>
                    <span className={Styles.block}>
                      <span className={Styles.product}>
                        Chocolate Fudge Cake
                      </span>
                      . With vanilla ice cream
                    </span>
                  </p>
                  <p>
                    <span className={Styles.block}>
                      <span className={Styles.product}>
                        Panetonne Tradizionale.
                      </span>{" "}
                      With a warm milk chocolate sauce
                    </span>
                  </p>
                  <p>
                    <span className={Styles.block}>
                      <span className={Styles.product}>Apple Crumble.</span>{" "}
                      With custard on the side
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className={Styles.wrapper}>
    <div className={Styles.content}>
      <h1 className={Styles.mainTitle}>Christmas Menu</h1>
      <h3 className={Styles.contentH3}>
        £49.95 PER PERSON (INC. GLASS OF PROSECCO)
      </h3>
    </div>
    <div className={Styles.Starter}>
      <h2>✦ Starters ✦</h2>
      <p><span className={Styles.block}><span className={Styles.product}>Melanzane al Forno</span>. Baked aubergine, tomato, and buffalo</span>
      <span className={Styles.block}>mozzarella layered & finished with breadcrumbs and Parmesan</span></p>
      <p><span className={Styles.block}><span className={Styles.product}>Bruschetta Trio</span>. Ricotta, Parmesan & truffle oil; Buffalo</span>
      <span className={Styles.block}>mozzarella & pesto; seasoned tomatoes, basil & pesto</span></p>
      <p><span className={Styles.block}><span className={Styles.product}>Arancini Misti.</span> Random selection of crispy risotto balls filled</span>
      <span className={Styles.block}>with either ‘nduja or truffle</span></p>
      <p><span className={Styles.block}><span className={Styles.product}>Foccacia con Parma & Burrata.</span> Warm focaccia, Parma Ham,</span>
      <span className={Styles.block}>pulled burrata & fresh basil</span></p>

    </div>
    <div className={Styles.Starter}>
      <h2>✦ Main Course ✦</h2>
      <p><span className={Styles.block}><span className={Styles.product}>Lasagna Bianca</span>. White lasagna layered with chicken, mushrooms,</span>
      <span className={Styles.block}>spinach, bechamel & Parmesan</span></p>
      <p><span className={Styles.block}><span className={Styles.product}>Penne alla Norma Piccante.</span>Pasta with garlic, onions, & aubergine,</span>
      <span className={Styles.block}>cooked in a spicy tomato sauce and topped with buffalo mozzarella</span></p>
      <p><span className={Styles.block}><span className={Styles.product}>Pollo alla Parmigiana.</span> Breaded chicken breast, tomato sauce &</span>
      <span className={Styles.block}>melted mozzarella, served with roasted potatoes & mixed vegetables</span></p>
      <p><span className={Styles.block}><span className={Styles.product}>Costolette d’Agnello.</span> Grilled lamb cutlets, seasoned with</span>
      <span className={Styles.block}>rosmeary, salt & pepper, served with sauteed potatoes</span></p>
    </div>
    <div className={Styles.Starter}>
      <h2>✦ Desserts ✦</h2>
      <p><span className={Styles.block}><span className={Styles.product}>Chocolate Fudge Cake</span>. With vanilla ice cream</span>
      </p>
      <p><span className={Styles.block}><span className={Styles.product}>Panetonne Tradizionale.</span> With a warm milk chocolate sauce</span>
      </p>
      <p><span className={Styles.block}><span className={Styles.product}>Apple Crumble.</span> With custard on the side</span>
      </p>
    </div>
  </div> */
}

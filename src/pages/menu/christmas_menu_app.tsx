
import Styles from './christmas.module.scss';
import { useState } from 'react';

// Menu data sourced from the provided PDF
const menuData = {
  price: "£49.95 PER PERSON",
  subtitle: "(INC. GLASS OF PROSECCO)",
  categories: [
    {
      id: 'starter',
      name: 'STARTERS',
      items: [
        {
          id: 's1',
          name: 'Melanzane al Forno',
          description: 'Baked aubergine, tomato, and buffalo mozzarella layered & finished with breadcrumbs and Parmesan.',
          image: '/placeholder.jpg',
          
        },
        {
          id: 's2',
          name: 'Bruschetta Trio',
          description: 'Ricotta, Parmesan & truffle oil; Buffalo mozzarella & pesto; seasoned tomatoes, basil & pesto.',
          image: '/placeholder.jpg',
          
        },
        {
          id: 's3',
          name: 'Arancini Misti',
          description: 'Random selection of crispy risotto balls filled with either \'nduja or truffle.',
          image: '/placeholder.jpg',
         
        },
        {
          id: 's4',
          name: 'Focaccia con Parma & Burrata',
          description: 'Warm focaccia, Parma Ham, pulled burrata & fresh basil.',
          image: '/placeholder.jpg',
        
        }
      ]
    },
    {
      id: 'main',
      name: 'MAIN COURSES',
      items: [
        {
          id: 'm1',
          name: 'Lasagna Bianca',
          description: 'White lasagna layered with chicken, mushrooms, spinach, bechamel & Parmesan.',
          image: '/placeholder.jpg',
          
        },
        {
          id: 'm2',
          name: 'Penne alla Norma Piccante',
          description: 'Pasta with garlic, onions, & aubergine, cooked in a spicy tomato sauce and topped with buffalo mozzarella.',
          image: '/placeholder.jpg',
          
          
        },
        {
          id: 'm3',
          name: 'Pollo alla Parmigiana',
          description: 'Breaded chicken breast, tomato sauce & melted mozzarella, served with roasted potatoes & mixed vegetables.',
          image: '/placeholder.jpg',
         
        },
        {
          id: 'm4',
          name: 'Costolette d\'Agnello',
          description: 'Grilled lamb cutlets, seasoned with rosemary, salt & pepper, served with sauteed potatoes.',
          image: '/placeholder.jpg',
        }
      ]
    },
    {
      id: 'dessert',
      name: 'DESSERTS',
      items: [
        {
          id: 'd1',
          name: 'Chocolate Fudge Cake',
          description: 'With vanilla ice cream.',
          image: '/placeholder.jpg',
          
        },
        {
          id: 'd2',
          name: 'Panettone Tradizionale',
          description: 'With a warm milk chocolate sauce.',
          image: '/placeholder.jpg',
          
        },
        {
          id: 'd3',
          name: 'Apple Crumble',
          description: 'With custard on the side.',
          image: '/placeholder.jpg',
      
        }
      ]
    }
  ]
} as const;

export default function ChristmasMenuApp() {
  const [selectedItems, setSelectedItems] = useState({
    starter: 's1',
    main: 'm1',
    dessert: 'd1'
  });
  const [toastMessage, setToastMessage] = useState('');

  const handleSelect = (categoryId: keyof typeof selectedItems, itemId: string) => {
    setSelectedItems((prev: typeof selectedItems) => ({
      ...prev,
      [categoryId]: itemId
    }));
  };

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={Styles.container}>
     <div className={Styles.wrapper}>

      <main className={Styles.mainContent}>
      {/* Header */}
      <header className={Styles.header}>
        <div className={Styles.headerPattern}/>
        <div className={Styles.hero}>
          <div className={Styles.badge}>
            AL FORNO &bull; CHRISTMAS Edition
          </div>
          <h1 className={Styles.title}>
            CHRISTMAS MENU
          </h1>
          <div className={Styles.price}>
            {menuData.price}
          </div>
          <p className={Styles.subtitle}>
            {menuData.subtitle}
          </p>
        </div>
      </header>
      {/* Main Content Area */}
        

        <div className={Styles.categories}>
          {menuData.categories.map((category) => (
            <section key={category.id} className={Styles.categorySection}>
              <div className={Styles.categoryBadge}>
                <h2 className={Styles.categoryTitle}>
                  {category.name}
                </h2>
              </div>

              <div className={Styles.itemsGrid}>
                {category.items.map((item) => {
                  const isSelected = selectedItems[category.id] === item.id;
                  return (
                    <article
                      key={item.id}
                    className={`${Styles.itemCard} ${isSelected ? Styles.itemCardSelected : ''}`}
                    >
                    <button
                      type="button"
                      aria-pressed={isSelected}
                      className={Styles.itemCardButton}
                      onClick={() => {
                        handleSelect(category.id, item.id);
                        showNotification(`Selected: ${item.name}`);
                      }}
                    >
                      <img
                        className={Styles.itemImage}
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                      />
                      <div className={Styles.itemContent}>
                        <h3 className={Styles.itemName}>{item.name}</h3>
                        <p className={Styles.itemDescription}>{item.description}</p>
                      </div>
                    </button>
                    <div className={Styles.photoCredit}>
                      {"imageSource" in item ? (
                        <a href={String(item.imageSource)} target="_blank" rel="noreferrer">
                          {(item as { imageAttribution?: string }).imageAttribution}
                        </a>
                      ) : (
                        <span>{(item as { imageAttribution?: string }).imageAttribution}</span>
                      )}
                      {"imageLicenseUrl" in item && (
                        <a href={String(item.imageLicenseUrl)} target="_blank" rel="noreferrer">
                          {String((item as { imageLicense?: string }).imageLicense ?? "")}
                        </a>
                      )}
                    </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Action Panel */}
        <div className={`${Styles.actionPanel} ${Styles.noPrint}`}>
          <div className={Styles.socialMedia}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className={Styles.socialIcon + " fab fa-facebook"}></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className={Styles.socialIcon + " fab fa-instagram"}></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className={Styles.socialIcon + " fab fa-twitter"}></i>
          </a>
        </div>
          <div className={Styles.actionButtons}>
            <button 
              onClick={() => {
                const summary = `My Christmas Menu (£49.95):\n- Starter: ${menuData.categories[0].items.find(i => i.id === selectedItems.starter)?.name}\n- Main: ${menuData.categories[1].items.find(i => i.id === selectedItems.main)?.name}\n- Dessert: ${menuData.categories[2].items.find(i => i.id === selectedItems.dessert)?.name}`;
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(summary);
                  showNotification('Menu copied to clipboard!');
                } else {
                  showNotification('Menu selected successfully!');
                }
              }}
              className={Styles.btnCopy}
            >
              Main Menu
            </button>
            <button 
              onClick={handlePrint}
              className={Styles.btnPrint}
            >
              <a href="/menu" target="_blank" rel="noreferrer">Reserve Now</a>
            </button>
          </div>
        </div>
      </main>

      {toastMessage && (
        <div className={Styles.noPrint} role="status" aria-live="polite">
          {toastMessage}
        </div>
      )}

     </div>

    </div>
  );
}

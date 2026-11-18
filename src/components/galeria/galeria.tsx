
import Styles from './galeria.module.scss';
import Slide from '../../components/slide/slide';

// Example gallery data
const galleryItems = [
  { id: 1, title: 'Special Dish', category: 'Dishes', imageUrl: 'https://picsum.photos/500/500?random=1' },
  { id: 2, title: 'Indoor Ambiance', category: 'Ambiance', imageUrl: 'https://picsum.photos/500/500?random=2' },
  { id: 3, title: 'House Dessert', category: 'Desserts', imageUrl: 'https://picsum.photos/500/500?random=3' },
  { id: 4, title: 'Exclusive Cocktail', category: 'Drinks', imageUrl: 'https://picsum.photos/500/500?random=4' },
  { id: 5, title: 'Handmade Pasta', category: 'Dishes', imageUrl: 'https://picsum.photos/500/500?random=5' },
  { id: 6, title: 'Our Terrace', category: 'Ambiance', imageUrl: 'https://picsum.photos/500/500?random=6' },
  { id: 7, title: 'House Wine', category: 'Drinks', imageUrl: 'https://picsum.photos/500/500?random=7' }
];

export default function Galeria() {
  return (
    <div className={Styles.container}>
      <header className={Styles.header}>
        <h2>Our Gallery</h2>
        <p>Explore our collection of dishes, drinks, and the ambiance of our restaurant.</p>
      </header>

      <div className={Styles.grid}>
        {galleryItems.map((item) => (
          <div key={item.id} className={Styles.card}>
            <img src={item.imageUrl} alt={item.title} className={Styles.image} />
            <div className={Styles.overlay}>
              <span className={Styles.category}>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
            <Slide />
          </div>
          
        ))}
      </div>
    </div>
  );
}
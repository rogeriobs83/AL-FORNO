
import { useState, useEffect } from 'react';
import Styles from './galeria.module.scss';
import Slide from '../../components/slide/slide';

const images = import.meta.glob<string>(
  '../../assets/Gallery/*.{jpg,jpeg,png,webp}',
  {
    import: 'default',
  }
);

export default function Galeria() {
  const [galleryItems, setGalleryItems] = useState<Array<{
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    path: string;
  }>>([]);

  useEffect(() => {
    const loadGalleryImages = async () => {
      try {
        const entries = Object.entries(images);
        console.log('Found images:', entries.length);
        
        const resolvedImages = await Promise.all(
          entries.map(async ([path, imageModule]) => {
            const imageUrl = await (imageModule as () => Promise<string>)();
            return { path, imageUrl };
          })
        );

        const items = resolvedImages.map(({ path, imageUrl }, index) => ({
          id: index + 1,
          title: `Gallery Image ${index + 1}`,
          category: 'Gallery',
          imageUrl,
          path,
        }));

        setGalleryItems(items);
        console.log('Gallery images loaded:', items.length);
      } catch (error) {
        console.error('Error loading gallery images:', error);
      }
    };

    loadGalleryImages();
  }, []);

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
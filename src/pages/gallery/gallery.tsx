import Galeria from '../../components/galeria/galeria';
import Styles from './gallery.module.scss';
import type { FunctionalComponent } from 'preact';
 
interface GalleryProps {
    path?: string;
}

export const Gallery: FunctionalComponent<GalleryProps> = () => {
    return (
        <div className={Styles.container}>
            <Galeria />
        </div>
    );
};
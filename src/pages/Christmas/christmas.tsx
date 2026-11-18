import Style from './christmas.module.scss';
import type { FunctionalComponent } from 'preact';
import {Button} from '../../components/button/button';

interface ChristmasProps {
    path?: string
}
export const Christmas : FunctionalComponent<ChristmasProps> = () => {
    return (
        <div className={Style.christmas}>
            <img  src="/menu_final(1).png" alt="Christmas" className={Style.img} />

      <div className="christmasContent">

        <div className={Style.socialMidia}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        </div>
        <div className={Style.buttonContainer}>
        <Button>Order Now</Button>
        <Button>Order Now</Button>
        </div>
      </div>
        
        
        </div>
    );
};
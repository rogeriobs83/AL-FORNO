import type { FunctionalComponent } from 'preact';
import Event from './components/event';

interface EventsProps {
    path?: string;
}

export const Events: FunctionalComponent<EventsProps> = () => {
    return (
        <div>
            <div>
                <h2>Our Events</h2>
                <p>Discover the special events we host at our restaurant.</p>
            </div>
            <div>
                <Event />
                <Event />
                <Event />
            </div>
        </div>
    );
};
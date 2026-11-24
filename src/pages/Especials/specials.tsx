import type { FunctionalComponent } from 'preact';
import Special from '../home/components/special';

interface SpecialsProps {
  path?: string;
}

const Specials: FunctionalComponent<SpecialsProps> = () => {
  return <Special />;
};

export default Specials;
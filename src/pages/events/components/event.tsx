
import Styles from './event.module.scss';
import { Button } from '../../../components/button/button';

// Exemplo de dados para os próximos eventos
const eventList = [
  {
    id: 1,
    title: 'Noite de Jazz ao Vivo',
    date: '15 de Julho, 2026',
    time: '20:30 - 23:00',
    description: 'Desfrute de um jantar requintado acompanhado pelo melhor do jazz acústico ao vivo.',
    imageUrl: 'https://picsum.photos/500/500?random=10',
    badge: 'Destaque',
  },
  {
    id: 2,
    title: 'Festival de Vinhos e Queijos',
    date: '22 de Julho, 2026',
    time: '19:00 - 22:30',
    description: 'Uma seleção exclusiva de vinhos regionais harmonizados com queijos artesanais selecionados pelo nosso sommelier.',
    imageUrl: 'https://picsum.photos/500/500?random=11',
    badge: 'Vagas Limitadas',
  },
  {
    id: 3,
    title: 'Workshop de Culinária Italiana',
    date: '05 de Agosto, 2026',
    time: '15:00 - 18:00',
    description: 'Aprenda os segredos para fazer massas frescas artesanais diretamente com o nosso Chef executivo.',
    imageUrl: 'https://picsum.photos/500/500?random=12',
    badge: 'Inscrições Abertas',
  },
];

export default function Eventos() {
  return (
    <div className={Styles.container}>
      <header className={Styles.header}>
        <h2>Próximos Eventos</h2>
        <p>Acompanhe a nossa agenda e participe em experiências gastronómicas inesquecíveis.</p>
      </header>

      <div className={Styles.grid}>
        {eventList.map((event) => (
          <div key={event.id} className={Styles.card}>
            <div className={Styles.imageContainer}>
              <img src={event.imageUrl} alt={event.title} className={Styles.image} />
              <span className={Styles.badge}>{event.badge}</span>
            </div>
            
            <div className={Styles.content}>
              <div className={Styles.dateInfo}>
                <span className={Styles.date}>📅 {event.date}</span>
                <span className={Styles.time}>⏰ {event.time}</span>
              </div>
              
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              
              <Button>Reservar</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
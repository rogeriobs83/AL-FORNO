
import Styles from './special.module.scss';

// Exemplo de dados para as ofertas especiais
const specialOffersList = [
  {
    id: 1,
    title: 'Combo Família & Amigos',
    description: '2 Grandes Pizzas Artesanais + 1 Garrafa de Vinho da Casa + Sobremesa grátis.',
    originalPrice: '45,00 €',
    discountPrice: '34,90 €',
    badge: '-22%',
    imageUrl: 'https://picsum.photos/500/500?random=20',
  },
  {
    id: 2,
    title: 'Menu Executivo de Almoço',
    description: 'Entrada do dia + Prato Principal (Opção carne ou peixe) + Bebida e Café incluídos.',
    originalPrice: '18,50 €',
    discountPrice: '14,90 €',
    badge: 'Mais Popular',
    imageUrl: 'https://picsum.photos/500/500?random=21',
  },
  {
    id: 3,
    title: 'Noite de Vinho & Tábua de Frios',
    description: 'Tábua mista de queijos e enchidos artesanais acompanhada por seleção de vinhos tintos.',
    originalPrice: '28,00 €',
    discountPrice: '22,50 €',
    badge: 'Oferta Limitada',
    imageUrl: 'https://picsum.photos/500/500?random=22',
  },
];

export default function Special() {
  return (
    <div className={Styles.container}>
      <header className={Styles.header}>
        <h2>Special Offers</h2>
        <p>Aproveite as nossas promoções exclusivas e saboreie o melhor por menos.</p>
      </header>

      <div className={Styles.grid}>
        {specialOffersList.map((offer) => (
          <div key={offer.id} className={Styles.card}>
            <div className={Styles.imageContainer}>
              <img src={offer.imageUrl} alt={offer.title} className={Styles.image} />
              <span className={Styles.badge}>{offer.badge}</span>
            </div>

            <div className={Styles.content}>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>

              <div className={Styles.footerCard}>
                <div className={Styles.priceContainer}>
                  <span className={Styles.originalPrice}>{offer.originalPrice}</span>
                  <span className={Styles.discountPrice}>{offer.discountPrice}</span>
                </div>
                <button className={Styles.button}>Aproveitar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
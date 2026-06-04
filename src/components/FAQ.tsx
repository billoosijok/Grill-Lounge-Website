import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import './HomeLayout.css';

export const FAQ = () => {
    const { lang } = useLanguage();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const content = {
        fr: {
            subtitle: "Des questions ?",
            title: "Questions Fréquentes",
            faqs: [
                {
                    q: "Est-ce que vos viandes sont Halal ?",
                    a: "Oui, 100 % de nos viandes sont certifiées Halal. Nous mettons un point d'honneur à offrir une transparence totale à nos clients."
                },
                {
                    q: "Proposez-vous des options végétariennes ?",
                    a: "Absolument. Notre carte comprend des entrées et tapas à partager végétariennes, ainsi que des salades et des suggestions du chef adaptées."
                },
                {
                    q: "Est-il possible de commander à emporter ?",
                    a: "Oui, tous nos plats (grillades, burgers, salades, etc.) sont disponibles sur place et à emporter."
                },
                {
                    q: "Faut-il réserver une table ?",
                    a: "La réservation est vivement conseillée, particulièrement les week-ends pour déguster notre couscous traditionnel ou en soirée. Vous pouvez réserver directement en nous contactant."
                },
                {
                    q: "Comment accéder au restaurant depuis la gare ?",
                    a: "Le restaurant est situé au 5 Avenue Pierre Semard, à seulement 2 minutes à pied de la gare SNCF de Narbonne. Idéal pour manger rapidement avant ou après votre train."
                }
            ]
        },
        en: {
            subtitle: "Any questions?",
            title: "Frequently Asked Questions",
            faqs: [
                {
                    q: "Is your meat Halal?",
                    a: "Yes, 100% of our meats are certified Halal. We make it a priority to offer complete transparency to our customers."
                },
                {
                    q: "Do you offer vegetarian options?",
                    a: "Absolutely. Our menu includes vegetarian starters and tapas to share, as well as adapted salads and chef's suggestions."
                },
                {
                    q: "Is takeout available?",
                    a: "Yes, all our dishes (grills, burgers, salads, etc.) are available for dine-in and takeout."
                },
                {
                    q: "Do I need to book a table?",
                    a: "Booking is highly recommended, especially on weekends to enjoy our traditional couscous or during busy evenings. You can book directly by contacting us."
                },
                {
                    q: "How do I access the restaurant from the train station?",
                    a: "The restaurant is located at 5 Avenue Pierre Semard, just a 2-minute walk from the Narbonne SNCF station. Ideal for a quick bite before or after your train."
                }
            ]
        },
        es: {
            subtitle: "¿Preguntas?",
            title: "Preguntas Frecuentes",
            faqs: [
                {
                    q: "¿Sus carnes son Halal?",
                    a: "Sí, el 100 % de nuestras carnes están certificadas como Halal. Hacemos que sea una prioridad ofrecer total transparencia a nuestros clientes."
                },
                {
                    q: "¿Ofrecen opciones vegetarianas?",
                    a: "Absolutamente. Nuestra carta incluye entrantes y tapas para compartir vegetarianas, así como ensaladas y sugerencias adaptadas."
                },
                {
                    q: "¿Se puede pedir para llevar?",
                    a: "Sí, todos nuestros platos (parrilladas, hamburguesas, ensaladas, etc.) están disponibles para consumir aquí o para llevar."
                },
                {
                    q: "¿Es necesario reservar mesa?",
                    a: "Se recomienda encarecidamente reservar, sobre todo los fines de semana para disfrutar de nuestro cuscús tradicional o por la noche. Puede reservar directamente contactando con nosotros."
                },
                {
                    q: "¿Cómo llegar al restaurante desde la estación?",
                    a: "El restaurante está situado en el 5 Avenue Pierre Semard, a solo 2 minutos a pie de la estación de tren SNCF de Narbona. Ideal para comer rápido antes o después de su tren."
                }
            ]
        }
    };

    const text = content[lang as keyof typeof content] || content.fr;

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" style={{ backgroundColor: 'var(--primary-bg)', padding: '80px 5%', textAlign: 'center' }}>
            <div className="section-subtitle">{text.subtitle}</div>
            <h2 className="section-title" style={{ marginBottom: '50px' }}>{text.title}</h2>

            <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {text.faqs.map((faq, idx) => {
                    const isOpen = activeIndex === idx;
                    return (
                        <div 
                            key={idx} 
                            className="faq-item"
                            style={{
                                backgroundColor: 'var(--white)',
                                borderRadius: '12px',
                                boxShadow: 'var(--card-shadow)',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                border: isOpen ? '1px solid rgba(142, 58, 53, 0.2)' : '1px solid rgba(0, 0, 0, 0.02)'
                            }}
                        >
                            <button
                                onClick={() => toggleFaq(idx)}
                                style={{
                                    width: '100%',
                                    background: 'none',
                                    border: 'none',
                                    padding: '22px 28px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    outline: 'none'
                                }}
                            >
                                <span style={{
                                    fontSize: '1.15em',
                                    fontWeight: 'bold',
                                    color: isOpen ? 'var(--accent-red)' : 'var(--accent-green)',
                                    fontFamily: "'Outfit', sans-serif",
                                    transition: 'color var(--transition-speed)'
                                }}>
                                    {faq.q}
                                </span>
                                <span style={{
                                    fontSize: '1.4em',
                                    color: isOpen ? 'var(--accent-red)' : 'var(--accent-green)',
                                    transition: 'transform 0.3s ease',
                                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                                    lineHeight: 1
                                }}>
                                    +
                                </span>
                            </button>
                            
                            <div style={{
                                maxHeight: isOpen ? '300px' : '0px',
                                opacity: isOpen ? 1 : 0,
                                overflow: 'hidden',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                padding: isOpen ? '0 28px 25px 28px' : '0 28px'
                            }}>
                                <p style={{
                                    margin: 0,
                                    color: 'var(--text-muted)',
                                    fontSize: '1.05em',
                                    lineHeight: '1.6'
                                }}>
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

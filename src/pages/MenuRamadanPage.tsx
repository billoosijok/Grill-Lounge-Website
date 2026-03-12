import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../index.css';

export const MenuRamadanPage = () => {
    return (
        <div className="menu-page-container animate__animated animate__fadeIn">
            <Header />

            <main className="menu-content" style={{ marginTop: '40px', maxWidth: '800px', width: '100%', margin: '0 auto 60px auto', padding: '0 10px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div className="menu-title-section" style={{ textAlign: 'center', marginBottom: '40px', backgroundColor: '#3b1509', color: '#fbf0e8', padding: '40px 20px', borderRadius: '12px' }}>
                    <h1 className="menu-main-title" style={{ color: '#fbf0e8', fontSize: '2.5em', marginBottom: '10px' }}>Menu Ramadan</h1>
                    <p className="menu-subtitle" style={{ color: '#fbf0e8', fontSize: '1.2em', marginBottom: '20px' }}>
                        Iftar + Entrée + Plat + Dessert
                    </p>
                    <div style={{ fontSize: '3em', fontWeight: 'bold', margin: '20px 0' }}>25€</div>
                    <div style={{ fontSize: '1.1em', letterSpacing: '2px', textTransform: 'uppercase' }}>Sur réservation uniquement</div>
                    <div style={{ marginTop: '15px', display: 'inline-block', backgroundColor: '#d48a42', color: '#fff', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9em', fontWeight: 'bold' }}>Fait Maison</div>
                </div>

                {/* Iftar */}
                <section className="menu-category">
                    <div className="category-header">
                        <h2 className="category-title" style={{ textAlign: 'center', width: '100%', borderBottom: '2px solid #8e3a35', paddingBottom: '10px', marginBottom: '20px' }}>IFTAR</h2>
                    </div>
                    <div className="category-content" style={{ textAlign: 'center', fontSize: '1.2em', color: '#4a4a4a' }}>
                        3 dattes + 1 verre de Lben ou lait
                    </div>
                </section>

                {/* Entrées */}
                <section className="menu-category">
                    <div className="category-header">
                        <h2 className="category-title" style={{ textAlign: 'center', width: '100%', borderBottom: '2px solid #8e3a35', paddingBottom: '10px', marginBottom: '20px' }}>ENTRÉE AU CHOIX</h2>
                    </div>
                    <div className="category-content">
                        <div className="menu-items">
                            <div className="menu-item">
                                <div className="menu-item-header">
                                    <strong className="item-name">SOUPE DU JOUR</strong>
                                </div>
                                <p className="item-description">Selon l'inspiration du chef, servie chaude pour bien commencer.</p>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-header">
                                    <strong className="item-name">BRIK CROUSTILLANTE (AU CHOIX)</strong>
                                </div>
                                <p className="item-description">Poulet & legumes ou Epinards & feta. Brik dorée, croustillante et fondante.</p>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-header">
                                    <strong className="item-name">TAJINE AU FROMAGE</strong>
                                </div>
                                <p className="item-description">Pommes de terre, œufs et fromage, gratiné au four.</p>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-header">
                                    <strong className="item-name">ASSIETTE DE MEZZES</strong>
                                </div>
                                <p className="item-description">Houmous, feta fouettée, dip de poivrons, muhammara et dolmas. Fraîche, savoureuse et généreuse.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Plats */}
                <section className="menu-category">
                    <div className="category-header">
                        <h2 className="category-title" style={{ textAlign: 'center', width: '100%', borderBottom: '2px solid #8e3a35', paddingBottom: '10px', marginBottom: '20px' }}>PLAT AU CHOIX</h2>
                    </div>
                    <div className="category-content">
                        <div className="menu-items">
                            <div className="menu-item">
                                <div className="menu-item-header">
                                    <strong className="item-name">POULET AUX OLIVES</strong>
                                </div>
                                <p className="item-description">Poulet rôti au four avec oignons, olives et pommes de terre. Servi avec riz et salade mixte.</p>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-header">
                                    <strong className="item-name">GRILLADES SIGNATURES (+ 5€)</strong>
                                </div>
                                <p className="item-description">Koftas de poulet, brochette mixte poulet & viande, cotelette d'agneau et ailes de poulet. Servies avec riz et sauce Grill Lounge.</p>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-header">
                                    <strong className="item-name">MIX FAJITA</strong>
                                </div>
                                <p className="item-description">Poivrons, oignons, grillade mixte de poulet et de bœuf marinés façon fajita.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Desserts */}
                <section className="menu-category">
                    <div className="category-header">
                        <h2 className="category-title" style={{ textAlign: 'center', width: '100%', borderBottom: '2px solid #8e3a35', paddingBottom: '10px', marginBottom: '20px' }}>DESSERT AU CHOIX</h2>
                    </div>
                    <div className="category-content">
                        <div className="menu-items">
                            <div className="menu-item">
                                <div className="menu-item-header">
                                    <strong className="item-name">BAKLAVA MAISON</strong>
                                </div>
                                <p className="item-description">Pâtisserie orientale croustillante, nappée de miel.</p>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-header">
                                    <strong className="item-name">KNAFEH MAISON À LA PISTACHE</strong>
                                </div>
                                <p className="item-description">Farcis à la pistache, fleur d'oranger et miel.</p>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-header">
                                    <strong className="item-name">KNAFEH MAISON CROUSTILLANTE</strong>
                                </div>
                                <p className="item-description">Garnie de crème, touche de pistache et miel.</p>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-header">
                                    <strong className="item-name">TIRAMISU MAISON</strong>
                                </div>
                                <p className="item-description">Le classique, façon Grill Lounge.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Boissons Specialites Ramadan */}
                <section className="menu-category">
                    <div className="category-header">
                        <h2 className="category-title" style={{ textAlign: 'center', width: '100%', borderBottom: '2px solid #8e3a35', paddingBottom: '10px', marginBottom: '20px' }}>BOISSONS SPÉCIALITÉS RAMADAN</h2>
                    </div>
                    <div className="category-content">
                        <div className="menu-items" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                            <div className="menu-item">
                                <div className="menu-item-header" style={{ justifyContent: 'space-between', paddingRight: '10px' }}>
                                    <strong className="item-name">KARKADÉ (HIBISCUS)</strong>
                                    <span className="item-price">5</span>
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-header" style={{ justifyContent: 'space-between', paddingRight: '10px' }}>
                                    <strong className="item-name">CITRONNADE MAISON</strong>
                                    <span className="item-price">5</span>
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-header" style={{ justifyContent: 'space-between', paddingRight: '10px' }}>
                                    <strong className="item-name">THÉ VERT À LA MENTHE ORIENTALE</strong>
                                    <span className="item-price">3 / 5</span>
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-header" style={{ justifyContent: 'space-between', paddingRight: '10px' }}>
                                    <strong className="item-name">LBEN</strong>
                                    <span className="item-price">2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Menu Enfant */}
                <section className="menu-category" style={{ border: '2px solid #8e3a35' }}>
                    <div className="category-header">
                        <h2 className="category-title" style={{ textAlign: 'center', width: '100%', marginBottom: '20px' }}>MENU ENFANT - 14€</h2>
                    </div>
                    <div className="category-content">
                        <div className="menu-items" style={{ gap: '20px' }}>
                            <div className="menu-item">
                                <div className="menu-item-header">
                                    <strong className="item-name">ENTRÉE AU CHOIX</strong>
                                </div>
                                <p className="item-description">Tajine au Fromage <u>ou</u> Brik croustillante</p>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-header">
                                    <strong className="item-name">PLAT AU CHOIX</strong>
                                </div>
                                <p className="item-description">Filet de poulet grillé <u>ou</u> burger enfant</p>
                            </div>
                            <div className="menu-item">
                                <div className="menu-item-header">
                                    <strong className="item-name">DESSERT ENFANT DU JOUR</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

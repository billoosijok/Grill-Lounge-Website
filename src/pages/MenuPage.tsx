import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import menuDataFr from '../data/menu.json';
import menuDataEn from '../data/menu_en.json';
import menuDataEs from '../data/menu_es.json';
import { useLanguage } from '../hooks/useLanguage';
import '../index.css';

const menuDataMap = {
    fr: menuDataFr,
    en: menuDataEn,
    es: menuDataEs,
};

export const MenuPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { lang } = useLanguage();
    const menuData = menuDataMap[lang] || menuDataFr;
    const [expandedCategories, setExpandedCategories] = useState<Record<number, boolean>>({});

    const getCategoryId = (name: string) => {
        return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    };

    useEffect(() => {
        if (location.hash) {
            const hash = location.hash.replace('#', '');
            const index = menuData.categories.findIndex(cat => getCategoryId(cat.name) === hash);

            if (index !== -1) {
                setExpandedCategories(prev => ({ ...prev, [index]: true }));
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        const yOffset = -100; // Account for fixed header
                        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                }, 100);
            }
        }
    }, [location.hash]);

    const toggleCategory = (index: number) => {
        setExpandedCategories(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="menu-page-container animate__animated animate__fadeIn">
            <Header />

            <main className="menu-content" style={{ marginTop: '40px' }}>
                <div className="menu-title-section" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h1 className="menu-main-title">MENU</h1>
                    <p className="menu-subtitle">Braises, épices et passion</p>
                </div>

                {menuData.categories.map((category, index) => {
                    const isExpanded = expandedCategories[index] || false;
                    const catId = getCategoryId(category.name);

                    return (
                        <section key={index} id={catId} className="menu-category">
                            <div className={`category-header ${isExpanded ? 'expanded' : ''}`} onClick={() => toggleCategory(index)} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h2 className="category-title">{category.name}</h2>
                                    {category.description && <p className="category-desc">{category.description}</p>}
                                </div>
                                <span className="category-toggle-icon">
                                    {isExpanded ? '▲' : '▼'}
                                </span>
                            </div>

                            {isExpanded && (
                                <div className="category-content animate__animated animate__fadeIn animate__faster">
                                    {category.subcategories ? (
                                        <div className="menu-subcategories">
                                            {category.subcategories.map((sub, sIndex) => (
                                                <div key={sIndex} className="menu-subcategory">
                                                    <h3 className="subcategory-title">{sub.name}</h3>
                                                    {sub.description && <p className="subcategory-desc">{sub.description}</p>}
                                                    <div className={`menu-items ${sub.name === 'SAUCES' ? 'menu-items-compact' : ''}`}>
                                                        {sub.items.map((item, iIndex) => (
                                                            <MenuItem key={iIndex} item={item} />
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="menu-items">
                                            {category.items.map((item, iIndex) => (
                                                <MenuItem key={iIndex} item={item} />
                                            ))}
                                        </div>
                                    )}

                                    {category.supplements && (
                                        <div className="menu-supplements">
                                            {category.supplements.map((sup, supIndex) => (
                                                <div key={supIndex} className="supplement-item">
                                                    <span className="supplement-name">{sup.name}: </span>
                                                    <span className="supplement-price">{sup.price}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </section>
                    );
                })}
            </main>

            <Footer />
        </div>
    );
};

const MenuItem = ({ item }: { item: any }) => {
    return (
        <div className="menu-item">
            <div className="menu-item-header">
                {item.isNew && <span className="badge-new">NEW</span>}
                <strong className="item-name">{item.name}</strong>
                {item.price && (
                    <>
                        <span className="price-separator"> - </span>
                        <span className="item-price">{item.price}</span>
                    </>
                )}
            </div>
            {item.description && <p className="item-description">{item.description}</p>}
        </div>
    );
};

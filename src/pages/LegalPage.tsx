import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useLanguage } from '../hooks/useLanguage';
import '../index.css';

interface LegalPageProps {
    type: 'mentions-legales' | 'confidentialite' | 'cookies';
}

export const LegalPage = ({ type }: LegalPageProps) => {
    const navigate = useNavigate();
    const { lang } = useLanguage();

    const handleBack = () => {
        navigate(`/${lang}`);
    };

    const renderContent = () => {
        switch (type) {
            case 'mentions-legales':
                return (
                    <article className="legal-article">
                        <h1 className="legal-title">Mentions Légales</h1>
                        
                        <section className="legal-section">
                            <h2>Éditeur du site</h2>
                            <p>Le présent site est édité par :</p>
                            <p>
                                <strong>STM (GRILL LOUNGE)</strong><br />
                                SAS au capital social de 1 000 €<br />
                                SIREN : 938 296 639<br />
                                SIRET : 938 296 639 00017<br />
                                TVA Intracommunautaire : FR78 938 296 639
                            </p>
                            <p>
                                <strong>Siège social :</strong><br />
                                5 Avenue Pierre Semard<br />
                                11100 Narbonne<br />
                                France
                            </p>
                            <p>
                                <strong>Activité :</strong> Restauration de type rapide (APE 56.10C)<br />
                                <strong>Président :</strong> Altayib ALBAROUNI<br />
                                <strong>Directeur Général :</strong> Abderazak MENAOUM<br />
                                <strong>Téléphone :</strong> 04 68 65 27 42
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Hébergement</h2>
                            <p>Le site est hébergé via l'infrastructure GitHub Pages.</p>
                            <p>
                                <strong>Hébergeur technique :</strong><br />
                                GitHub, Inc.<br />
                                88 Colin P. Kelly Jr Street<br />
                                San Francisco, CA 94107<br />
                                États-Unis
                            </p>
                            <p><strong>Infrastructure réseau et diffusion de contenu (CDN) :</strong> Fastly, Inc.</p>
                        </section>

                        <section className="legal-section">
                            <h2>Propriété intellectuelle</h2>
                            <p>
                                L'ensemble des contenus présents sur le site (textes, images, photographies, logos, graphismes et éléments visuels) est protégé par les dispositions du Code de la propriété intellectuelle.
                            </p>
                            <p>
                                Toute reproduction, représentation, diffusion ou exploitation sans autorisation préalable est interdite.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Responsabilité</h2>
                            <p>
                                Les informations publiées sur ce site sont fournies à titre indicatif. Malgré le soin apporté à leur mise à jour, STM (GRILL LOUNGE) ne saurait garantir l'exactitude ou l'exhaustivité de l'ensemble des informations diffusées.
                            </p>
                        </section>
                    </article>
                );

            case 'confidentialite':
                return (
                    <article className="legal-article">
                        <h1 className="legal-title">Politique de Confidentialité</h1>
                        
                        <section className="legal-section">
                            <h2>Protection des données personnelles</h2>
                            <p>
                                STM (GRILL LOUNGE) accorde une importance particulière à la protection des données personnelles de ses visiteurs.
                            </p>
                            <p>Le site peut collecter certaines informations lorsque vous :</p>
                            <ul>
                                <li>utilisez le formulaire de contact ;</li>
                                <li>effectuez une réservation ;</li>
                                <li>contactez le restaurant par téléphone ou e-mail.</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>Données susceptibles d'être collectées</h2>
                            <p>Selon les services utilisés :</p>
                            <ul>
                                <li>nom et prénom ;</li>
                                <li>numéro de téléphone ;</li>
                                <li>adresse e-mail ;</li>
                                <li>informations communiquées volontairement dans les messages.</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>Finalités du traitement</h2>
                            <p>Les données sont utilisées uniquement pour :</p>
                            <ul>
                                <li>répondre aux demandes des clients ;</li>
                                <li>gérer les réservations ;</li>
                                <li>assurer le suivi des échanges ;</li>
                                <li>améliorer les services proposés.</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>Durée de conservation</h2>
                            <p>
                                Les données sont conservées uniquement pendant la durée nécessaire à leur traitement et conformément aux obligations légales applicables.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Vos droits</h2>
                            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                            <ul>
                                <li>droit d'accès ;</li>
                                <li>droit de rectification ;</li>
                                <li>droit d'effacement ;</li>
                                <li>droit d'opposition ;</li>
                                <li>droit à la limitation du traitement ;</li>
                                <li>droit à la portabilité des données.</li>
                            </ul>
                            <p>Pour exercer vos droits, vous pouvez contacter :</p>
                            <p>
                                <strong>GRILL LOUNGE</strong><br />
                                5 Avenue Pierre Semard<br />
                                11100 Narbonne
                            </p>
                            <p>ou par téléphone au : 04 68 65 27 42</p>
                        </section>

                        <section className="legal-section">
                            <h2>Sécurité</h2>
                            <p>
                                STM (GRILL LOUNGE) met en œuvre des mesures raisonnables afin de protéger les données personnelles contre tout accès non autorisé, perte ou divulgation.
                            </p>
                        </section>
                    </article>
                );

            case 'cookies':
                return (
                    <article className="legal-article">
                        <h1 className="legal-title">Politique de Cookies</h1>
                        
                        <section className="legal-section">
                            <h2>Qu'est-ce qu'un cookie ?</h2>
                            <p>
                                Un cookie est un petit fichier enregistré sur votre appareil lors de la consultation d'un site internet.
                            </p>
                            <p>
                                Il permet notamment de faciliter la navigation et de mesurer l'utilisation du site.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Cookies utilisés</h2>
                            <p>
                                Actuellement, le site peut utiliser uniquement des cookies strictement nécessaires à son fonctionnement technique.
                            </p>
                            <p>
                                Si des outils statistiques ou publicitaires sont ajoutés ultérieurement (Google Analytics, Google Tag Manager ou autres services similaires), cette politique sera mise à jour afin de préciser les cookies utilisés.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Gestion des cookies</h2>
                            <p>Vous pouvez à tout moment configurer votre navigateur afin de :</p>
                            <ul>
                                <li>accepter les cookies ;</li>
                                <li>refuser les cookies ;</li>
                                <li>supprimer les cookies enregistrés.</li>
                            </ul>
                            <p>
                                Le refus de certains cookies peut toutefois affecter certaines fonctionnalités du site.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Contact</h2>
                            <p>Pour toute question concernant cette politique de cookies :</p>
                            <p>
                                <strong>GRILL LOUNGE</strong><br />
                                5 Avenue Pierre Semard<br />
                                11100 Narbonne<br />
                                France
                            </p>
                            <p>Téléphone : 04 68 65 27 42</p>
                        </section>
                    </article>
                );

            default:
                return null;
        }
    };

    return (
        <div className="legal-page-container animate__animated animate__fadeIn">
            <Header />
            <main className="legal-content">
                <button className="legal-back-button" onClick={handleBack}>
                    {lang === 'en' ? '← Back to Home' : lang === 'es' ? '← Volver al inicio' : '← Retour à l\'accueil'}
                </button>
                {renderContent()}
            </main>
            <Footer />
        </div>
    );
};

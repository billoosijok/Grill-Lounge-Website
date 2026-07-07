document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. MOBILE NAVIGATION HAMBURGER MENU
    // ----------------------------------------------------
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const headerCenter = document.querySelector('.header-center');
    const burgerIcon = document.querySelector('.burger-icon');
    const closeIcon = document.querySelector('.close-icon');

    if (mobileMenuBtn && headerCenter) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = headerCenter.classList.toggle('mobile-open');
            if (isOpen) {
                burgerIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            } else {
                burgerIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        });

        // Close menu when clicking navigation links
        const navLinks = headerCenter.querySelectorAll('.header-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                headerCenter.classList.remove('mobile-open');
                burgerIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            });
        });
    }

    // ----------------------------------------------------
    // 2. LANGUAGE PICKER DROPDOWN
    // ----------------------------------------------------
    const langBtn = document.querySelector('.lang-dropdown-btn');
    const langDropdown = document.querySelector('.lang-dropdown');

    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            langDropdown.classList.remove('open');
        });

        // Remember explicit language choice so redirect pages respect it
        document.querySelectorAll('.lang-select-item').forEach(item => {
            item.addEventListener('click', () => {
                try {
                    localStorage.setItem('preferred-lang', item.dataset.lang);
                } catch (e) { /* storage unavailable */ }
            });
        });
    }

    // ----------------------------------------------------
    // 3. FAQ ACCORDION COLLAPSIBLES
    // ----------------------------------------------------
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const toggleBtn = item.querySelector('.faq-toggle-btn');
        const answerPanel = item.querySelector('.faq-answer-panel');
        const plusIcon = item.querySelector('.faq-plus-icon');
        const qText = item.querySelector('.faq-q-text');

        if (toggleBtn && answerPanel) {
            toggleBtn.addEventListener('click', () => {
                const isOpen = item.classList.contains('faq-open');
                
                // Close all other FAQ panels first
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('faq-open');
                        const otherPanel = otherItem.querySelector('.faq-answer-panel');
                        const otherIcon = otherItem.querySelector('.faq-plus-icon');
                        const otherText = otherItem.querySelector('.faq-q-text');
                        if (otherPanel) {
                            otherPanel.style.maxHeight = '0px';
                            otherPanel.style.opacity = '0';
                            otherPanel.style.padding = '0 28px';
                        }
                        if (otherIcon) {
                            otherIcon.style.transform = 'rotate(0deg)';
                            otherIcon.style.color = 'var(--accent-green)';
                        }
                        if (otherText) {
                            otherText.style.color = 'var(--accent-green)';
                        }
                    }
                });

                if (!isOpen) {
                    item.classList.add('faq-open');
                    answerPanel.style.maxHeight = answerPanel.scrollHeight + 'px';
                    answerPanel.style.opacity = '1';
                    answerPanel.style.padding = '0 28px 25px 28px';
                    if (plusIcon) {
                        plusIcon.style.transform = 'rotate(45deg)';
                        plusIcon.style.color = 'var(--accent-red)';
                    }
                    if (qText) {
                        qText.style.color = 'var(--accent-red)';
                    }
                } else {
                    item.classList.remove('faq-open');
                    answerPanel.style.maxHeight = '0px';
                    answerPanel.style.opacity = '0';
                    answerPanel.style.padding = '0 28px';
                    if (plusIcon) {
                        plusIcon.style.transform = 'rotate(0deg)';
                        plusIcon.style.color = 'var(--accent-green)';
                    }
                    if (qText) {
                        qText.style.color = 'var(--accent-green)';
                    }
                }
            });
        }
    });

    // ----------------------------------------------------
    // 4. REVIEWS CAROUSEL SLIDER
    // ----------------------------------------------------
    const allReviewCards = Array.from(document.querySelectorAll('.review-card'));
    if (allReviewCards.length > 5) {
        // Shuffle and keep only 5 reviews
        const shuffled = allReviewCards.sort(() => 0.5 - Math.random());
        const discard = shuffled.slice(5);
        discard.forEach(card => card.remove());
    }

    const reviewCards = document.querySelectorAll('.review-card');
    const prevBtn = document.getElementById('reviews-prev-btn');
    const nextBtn = document.getElementById('reviews-next-btn');
    const prevBtnMobile = document.getElementById('reviews-prev-btn-mobile');
    const nextBtnMobile = document.getElementById('reviews-next-btn-mobile');
    const desktopDotsContainer = document.querySelector('.reviews-desktop-dots');
    const mobileDotsContainer = document.querySelector('.reviews-mobile-controls .pagination-dots');

    if (reviewCards.length > 0) {
        let currentIndex = 0;
        const totalCards = reviewCards.length;

        function updateReviews(index) {
            currentIndex = index;

            // Reset all cards display
            reviewCards.forEach(card => {
                card.style.display = 'none';
                card.classList.remove('carousel-card-offset-0', 'carousel-card-offset-1', 'carousel-card-offset-2');
            });

            // Set current visible window of 3 cards
            const offsetIndices = [
                currentIndex,
                (currentIndex + 1) % totalCards,
                (currentIndex + 2) % totalCards
            ];

            offsetIndices.forEach((cardIdx, offset) => {
                const card = reviewCards[cardIdx];
                if (card) {
                    card.style.display = 'flex';
                    card.classList.add(`carousel-card-offset-${offset}`);
                }
            });

            // Update active state of dots
            const allDots = document.querySelectorAll('.reviews-dot');
            allDots.forEach(dot => {
                const dotIdx = parseInt(dot.getAttribute('data-index'), 10);
                if (dotIdx === currentIndex) {
                    dot.classList.add('active');
                    dot.style.backgroundColor = 'var(--accent-red)';
                } else {
                    dot.classList.remove('active');
                    dot.style.backgroundColor = '#ccc';
                }
            });
        }

        function nextReview() {
            const nextIdx = (currentIndex + 1) % totalCards;
            updateReviews(nextIdx);
        }

        function prevReview() {
            const prevIdx = (currentIndex - 1 + totalCards) % totalCards;
            updateReviews(prevIdx);
        }

        // Setup dots buttons
        function createDots() {
            if (desktopDotsContainer) desktopDotsContainer.innerHTML = '';
            if (mobileDotsContainer) mobileDotsContainer.innerHTML = '';

            for (let i = 0; i < totalCards; i++) {
                // Desktop dots
                if (desktopDotsContainer) {
                    const dot = document.createElement('button');
                    dot.className = 'reviews-dot';
                    dot.setAttribute('data-index', i);
                    dot.setAttribute('aria-label', `Go to review ${i + 1}`);
                    dot.style.cssText = 'width: 10px; height: 10px; border-radius: 50%; border: none; cursor: pointer; padding: 0;';
                    dot.addEventListener('click', () => updateReviews(i));
                    desktopDotsContainer.appendChild(dot);
                }

                // Mobile dots
                if (mobileDotsContainer) {
                    const dot = document.createElement('button');
                    dot.className = 'reviews-dot';
                    dot.setAttribute('data-index', i);
                    dot.setAttribute('aria-label', `Go to review ${i + 1}`);
                    dot.style.cssText = 'width: 10px; height: 10px; border-radius: 50%; border: none; cursor: pointer; padding: 0;';
                    dot.addEventListener('click', () => updateReviews(i));
                    mobileDotsContainer.appendChild(dot);
                }
            }
        }

        // Attach event handlers
        if (prevBtn) prevBtn.addEventListener('click', prevReview);
        if (nextBtn) nextBtn.addEventListener('click', nextReview);
        if (prevBtnMobile) prevBtnMobile.addEventListener('click', prevReview);
        if (nextBtnMobile) nextBtnMobile.addEventListener('click', nextReview);

        // Initialize Carousel
        createDots();
        updateReviews(0);
    }

    // ----------------------------------------------------
    // 5. COOKIE CONSENT MANAGEMENT
    // ----------------------------------------------------
    const cookieConsentBanner = document.getElementById('cookie-consent-banner');
    const cookieAcceptBtn = document.getElementById('cookie-accept-btn');
    const cookieDeclineBtn = document.getElementById('cookie-decline-btn');
    const manageCookiesLink = document.getElementById('manage-cookies-link');

    if (cookieConsentBanner) {
        const choice = localStorage.getItem('cookie-consent-choice');

        // Show banner if choice is not saved
        if (!choice) {
            setTimeout(() => {
                cookieConsentBanner.style.display = 'block';
            }, 600);
        }

        function updateConsentState(decision) {
            localStorage.setItem('cookie-consent-choice', decision);
            const trackingState = decision === 'accepted' ? 'granted' : 'denied';

            if (window.gtag) {
                window.gtag('consent', 'update', {
                    'ad_storage': trackingState,
                    'ad_user_data': trackingState,
                    'ad_personalization': trackingState,
                    'analytics_storage': trackingState
                });
            }

            // Slide out animation
            cookieConsentBanner.classList.remove('animate-slide-up');
            cookieConsentBanner.classList.add('cookie-consent-exit');
            setTimeout(() => {
                cookieConsentBanner.style.display = 'none';
                cookieConsentBanner.classList.remove('cookie-consent-exit');
            }, 400);
        }

        if (cookieAcceptBtn) {
            cookieAcceptBtn.addEventListener('click', () => updateConsentState('accepted'));
        }

        if (cookieDeclineBtn) {
            cookieDeclineBtn.addEventListener('click', () => updateConsentState('declined'));
        }

        // Event listener to show banner again (Manage Cookies link)
        window.addEventListener('show-cookie-consent', () => {
            cookieConsentBanner.classList.add('animate-slide-up');
            cookieConsentBanner.style.display = 'block';
        });

        if (manageCookiesLink) {
            manageCookiesLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.dispatchEvent(new Event('show-cookie-consent'));
            });
        }
    }

    // Update copyright year in footer
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // ----------------------------------------------------
    // 6. MENU ACCORDION PANELS
    // ----------------------------------------------------
    const menuCategories = document.querySelectorAll('.menu-category');

    function toggleCategory(catSection) {
        const header = catSection.querySelector('.category-header');
        const contentPanel = catSection.querySelector('.category-content');
        const toggleIcon = catSection.querySelector('.category-toggle-icon');

        if (!contentPanel) return;

        const isExpanded = catSection.classList.contains('expanded');

        if (!isExpanded) {
            catSection.classList.add('expanded');
            header.classList.add('expanded');
            contentPanel.style.display = 'block';
            if (toggleIcon) toggleIcon.textContent = '▲';
        } else {
            catSection.classList.remove('expanded');
            header.classList.remove('expanded');
            contentPanel.style.display = 'none';
            if (toggleIcon) toggleIcon.textContent = '▼';
        }
    }

    menuCategories.forEach(category => {
        const header = category.querySelector('.category-header');
        if (header) {
            header.addEventListener('click', () => {
                toggleCategory(category);
            });
        }
    });

    // Check location hash to auto-expand category on menu page
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection && targetSection.classList.contains('menu-category')) {
            toggleCategory(targetSection);
            setTimeout(() => {
                const yOffset = -100; // Offset for sticky header
                const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }, 200);
        }
    }
});

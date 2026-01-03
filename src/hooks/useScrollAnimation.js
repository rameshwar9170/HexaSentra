import { useEffect } from 'react';

const useScrollAnimation = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        // Observe all elements with scroll-reveal classes
        const revealElements = document.querySelectorAll(
            '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
        );

        revealElements.forEach(el => observer.observe(el));

        // Mouse parallax effect
        const handleMouseMove = (e) => {
            const parallaxElements = document.querySelectorAll('.parallax-element');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            parallaxElements.forEach((el, index) => {
                const speed = el.dataset.speed || 20;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;
                el.style.transform = `translate(${x}px, ${y}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Scroll progress bar
        const updateScrollProgress = () => {
            const scrollProgress = document.querySelector('.scroll-progress');
            if (scrollProgress) {
                const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (window.scrollY / windowHeight) * 100;
                scrollProgress.style.width = `${scrolled}%`;
            }
        };

        window.addEventListener('scroll', updateScrollProgress);

        return () => {
            revealElements.forEach(el => observer.unobserve(el));
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);
};

export default useScrollAnimation;

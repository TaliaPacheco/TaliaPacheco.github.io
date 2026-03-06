import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // --- Smooth scroll with Lenis ---
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // --- Hero load animation ---
    const heroTl = gsap.timeline({
      defaults: { ease: 'power4.out' },
      onComplete: () => {
        // After load animation, setup scroll-out (no conflict)
        setupScrollAnimations();
      },
    });

    heroTl
      .fromTo('.navbar',
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .fromTo('.hero-text-reveal',
        { y: 120, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.12 },
        '-=0.6'
      )
      .fromTo('.hero-subtitle-reveal',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        '-=0.7'
      )
      .fromTo('.hero-buttons-reveal',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        '-=0.5'
      )
      .fromTo('.hero-portrait',
        { scale: 0.7, opacity: 0, y: 60 },
        { scale: 1, opacity: 1, y: 0, duration: 1.4, ease: 'power4.out' },
        '-=1.4'
      )
      .fromTo('.hero-orb',
        { scale: 0, opacity: 0, rotation: -90 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1.6, ease: 'power3.out' },
        '-=1.3'
      );

    function setupScrollAnimations() {
      // --- Hero scroll-out parallax ---
      gsap.to('.hero', {
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        },
        opacity: 0,
        scale: 1.08,
        filter: 'blur(15px)',
        y: -80,
      });

      gsap.to('.navbar', {
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: '30% top',
          scrub: 0.5,
        },
        y: -50,
        opacity: 0,
      });

      // --- Parallax for portrait + orb ---
      gsap.to('.hero-portrait-img', {
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: -80,
      });

      gsap.to('.hero-orb', {
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: -40,
        scale: 1.15,
        opacity: 0.3,
      });
    }

    // --- Section headings: reveal on scroll ---
    gsap.utils.toArray<HTMLElement>('.section-heading-reveal').forEach((heading) => {
      gsap.fromTo(heading,
        { y: 60, opacity: 0, filter: 'blur(6px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // --- Section subtitles ---
    gsap.utils.toArray<HTMLElement>('.section-subtitle-reveal').forEach((el) => {
      gsap.fromTo(el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // --- Filter buttons stagger ---
    const filterBtns = document.querySelector('.filter-buttons');
    if (filterBtns) {
      gsap.fromTo(filterBtns.children,
        { y: 25, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: filterBtns,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // --- Skill cards: staggered reveal ---
    const skillsGrid = document.querySelector('.skills-grid');
    if (skillsGrid) {
      gsap.fromTo(skillsGrid.children,
        { y: 50, opacity: 0, scale: 0.92 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: { each: 0.05, from: 'start' },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: skillsGrid,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // --- Project cards: staggered reveal ---
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
      gsap.fromTo(projectsGrid.children,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsGrid,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // --- Contact section: reveal ---
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      const contactLeft = contactSection.querySelector('.modal-left');
      const contactRight = contactSection.querySelector('.modal-right');

      if (contactLeft) {
        gsap.fromTo(contactLeft,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contactSection,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (contactRight) {
        gsap.fromTo(contactRight,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contactSection,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }

    // --- Footer: subtle fade ---
    const footer = document.querySelector('footer');
    if (footer) {
      gsap.fromTo(footer,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // --- Magnetic hover on CTA buttons ---
    const magneticCleanups: (() => void)[] = [];
    const magneticBtns = document.querySelectorAll('.btn-primary');
    magneticBtns.forEach((btn) => {
      const el = btn as HTMLElement;

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(el, { x: x * 0.25, y: y * 0.25, duration: 0.3, ease: 'power2.out' });
      };

      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
      };

      el.addEventListener('mousemove', onMove as EventListener);
      el.addEventListener('mouseleave', onLeave);
      magneticCleanups.push(() => {
        el.removeEventListener('mousemove', onMove as EventListener);
        el.removeEventListener('mouseleave', onLeave);
      });
    });

    // Cleanup
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      magneticCleanups.forEach((fn) => fn());
    };
  }, []);

  return { lenisRef };
}

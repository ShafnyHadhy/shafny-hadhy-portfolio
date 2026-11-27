import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => {
  const { hash } = useLocation();

  // Arriving from /projects with /#section: scroll once the section exists.
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
};

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  return <Projects isFullPage />;
};

const ROUTE_META = {
  home: {
    title: 'Shafny Hadhy | Associate Software Engineer & Full-Stack Developer',
    description:
      'Shafny Hadhy is an Associate Software Engineer in Colombo, Sri Lanka, building full-stack web apps with React, Next.js, Laravel, Node.js, and MySQL.',
  },
  projects: {
    title: 'Projects | Shafny Hadhy — Associate Software Engineer & Full-Stack Developer',
    description:
      'Projects built by Shafny Hadhy across React, Next.js, Laravel, Node.js, PostgreSQL, MySQL, and mobile development.',
  },
};

const setMetaContent = (selector, value) => {
  document.querySelector(selector)?.setAttribute('content', value);
};

// Keep document title and route descriptions aligned during client-side navigation.
const useRouteMeta = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = pathname.startsWith('/projects') ? ROUTE_META.projects : ROUTE_META.home;
    document.title = meta.title;
    setMetaContent('meta[name="title"]', meta.title);
    setMetaContent('meta[name="description"]', meta.description);
    setMetaContent('meta[property="og:title"]', meta.title);
    setMetaContent('meta[property="og:description"]', meta.description);
    setMetaContent('meta[name="twitter:title"]', meta.title);
    setMetaContent('meta[name="twitter:description"]', meta.description);
  }, [pathname]);
};

// Smooth-scroll only for clicked in-page links; keyboard focus moves stay instant.
const useSmoothHashLinks = () => {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]');
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const el = document.getElementById(a.getAttribute('href').slice(1));
      if (!el) return;
      e.preventDefault();
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
      if (el.tabIndex === -1) el.focus({ preventScroll: true });
      history.pushState(null, '', a.getAttribute('href'));
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
};

function App() {
  useRouteMeta();
  useSmoothHashLinks();
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-grow outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

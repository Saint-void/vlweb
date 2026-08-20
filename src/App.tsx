/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Founder from './pages/Founder';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import PageWrapper from './components/PageWrapper';
import { PageSkeleton } from './components/SkeletonLoader';
import SocialSidebar from './components/SocialSidebar';

export default function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // Brief initial site load skeleton transition
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return <PageSkeleton />;
  }

  return (
    <Router>
      <SocialSidebar />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageWrapper>
    </Router>
  );
}



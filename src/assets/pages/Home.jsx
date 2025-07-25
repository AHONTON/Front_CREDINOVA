import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Section from '../components/Section';
import Section2 from '../components/section2';
import Section3 from '../components/Section3';
import Question from '../components/Question';
import Blog from "../components/Blog";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 bg-gray-400">
      <Header />
      <Banner />
      <Section />
      <Section2 />
      <Section3 />
      <Question />
      <Blog />
      <Footer />
    </main>
  );
}

'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Icon from '@/components/Icon';

export default function DesignExportPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const slides = [
    // Slide 1: Cover
    {
      title: 'Cover',
      content: (
        <div className="w-full h-full bg-deep-navy flex flex-col items-center justify-center text-white">
          <Image
            src="/logos/wordmark_light.svg"
            alt="North Pro Services"
            width={400}
            height={120}
            className="mb-8"
          />
          <p className="text-2xl text-primary-steel">Sicherheit & Sauberkeit für höchste Ansprüche</p>
          <div className="mt-16 text-fog-grey space-y-2">
            <p>North Pro Services GmbH</p>
            <p>Himmelweiler 7/1</p>
            <p>89081 Ulm</p>
            <p className="mt-4">kontakt@northproservices.de</p>
          </div>
        </div>
      ),
    },

    // Slide 2: Full Primary Steel
    {
      title: 'Primary Steel',
      content: (
        <div className="w-full h-full bg-primary-steel"></div>
      ),
    },

    // Slide 3: Full Deep Navy
    {
      title: 'Deep Navy',
      content: (
        <div className="w-full h-full bg-deep-navy"></div>
      ),
    },

    // Slide 4: Full Ice White
    {
      title: 'Ice White',
      content: (
        <div className="w-full h-full bg-ice-white"></div>
      ),
    },

    // Slide 5: Hero Image
    {
      title: 'Hero Section',
      content: (
        <div className="w-full h-full relative bg-deep-navy">
          <div className="absolute inset-0 bg-[url('/images/northpatrol.png')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-16">
            <h1 className="text-7xl font-bold mb-8 text-center">
              Sicherheit & Sauberkeit für höchste Ansprüche
            </h1>
            <p className="text-3xl text-primary-steel text-center max-w-4xl">
              North Pro Services – Ihr Partner für professionelle Reinigungs- und Sicherheitslösungen
            </p>
          </div>
        </div>
      ),
    },

    // Slide 6: Services Full Frame
    {
      title: 'Leistungen Full',
      content: (
        <div className="w-full h-full bg-primary-steel p-20">
          <h2 className="text-7xl font-bold mb-16 text-center text-white">Unsere Leistungen</h2>
          <div className="grid grid-cols-2 gap-12 h-[800px]">
            {[
              { iconName: 'apartment', title: 'Gebäudereinigung', desc: 'Professionelle Reinigung für Büros, Praxen und Objekte' },
              { iconName: 'shield', title: 'Sicherheitsdienste', desc: 'Objektschutz, Doorman und Streifendienst' },
              { iconName: 'handyman', title: 'Hausmeisterservice', desc: 'Wartung, Pflege und Kontrolle aus einer Hand' },
              { iconName: 'auto_awesome', title: 'Sonderreinigung', desc: 'Baureinigung, Glasreinigung und Desinfektion' },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur p-12 flex flex-col items-center justify-center text-center text-white"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 3rem), calc(100% - 3rem) 100%, 0 100%)' }}
              >
                <Icon name={service.iconName} className="text-9xl mb-6" />
                <h3 className="text-4xl font-bold mb-4">{service.title}</h3>
                <p className="text-2xl text-gray-200">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    // Slide 7: Single Service - Gebäudereinigung
    {
      title: 'Gebäudereinigung',
      content: (
        <div className="w-full h-full bg-gradient-to-br from-primary-steel to-deep-navy flex items-center justify-center text-white">
          <div className="text-center px-20">
            <Icon name="apartment" className="text-[200px] mb-12" />
            <h1 className="text-8xl font-bold mb-8">Gebäudereinigung</h1>
            <p className="text-3xl text-gray-200">Professionelle Reinigung für Büros, Praxen und Objekte – individuell planbar</p>
          </div>
        </div>
      ),
    },

    // Slide 8: Single Service - Sicherheit
    {
      title: 'Sicherheitsdienste',
      content: (
        <div className="w-full h-full bg-gradient-to-br from-deep-navy to-primary-steel flex items-center justify-center text-white">
          <div className="text-center px-20">
            <Icon name="shield" className="text-[200px] mb-12" />
            <h1 className="text-8xl font-bold mb-8">Sicherheitsdienste</h1>
            <p className="text-3xl text-gray-200">Objektschutz, Doorman, Streifendienst – geschult & zuverlässig</p>
          </div>
        </div>
      ),
    },

    // Slide 9: Footer Design - Logo on Deep Navy
    {
      title: 'Footer',
      content: (
        <div className="w-full h-full bg-deep-navy flex items-center justify-center">
          <Image src="/logos/logo_light.svg" alt="North Pro Services" width={400} height={400} />
        </div>
      ),
    },

    // Slide 10: Contact Full
    {
      title: 'Kontakt',
      content: (
        <div className="w-full h-full bg-gradient-to-br from-primary-steel to-cool-slate text-white p-20">
          <div className="h-full flex flex-col items-center justify-center">
            <h2 className="text-8xl font-bold mb-16">Kontaktieren Sie uns</h2>
            <div
              className="bg-white/10 backdrop-blur p-16 max-w-4xl w-full"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 4rem), calc(100% - 4rem) 100%, 0 100%)' }}
            >
              <div className="space-y-10 text-3xl">
                <div className="flex items-center gap-8">
                  <Icon name="location_on" className="text-8xl" />
                  <div>
                    <p className="font-semibold text-4xl">North Pro Services GmbH</p>
                    <p className="mt-2">Himmelweiler 7/1</p>
                    <p>89081 Ulm</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 pt-6">
                  <Icon name="email" className="text-8xl" />
                  <p>kontakt@northproservices.de</p>
                </div>
                <div className="flex items-center gap-8">
                  <Icon name="smartphone" className="text-8xl" />
                  <p>+49 (0) 69 XXX XXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 11: Philosophy Cards
    {
      title: 'Philosophie',
      content: (
        <div className="w-full h-full bg-white p-20">
          <h2 className="text-7xl font-bold mb-16 text-center text-deep-navy">Unsere Philosophie</h2>
          <div className="grid grid-cols-3 gap-12">
            {[
              { iconName: 'handshake', title: 'Teamgeist', desc: 'Gemeinsam erreichen wir nachhaltige Ergebnisse' },
              { iconName: 'verified', title: 'Qualität', desc: 'Höchste Standards in allen Bereichen' },
              { iconName: 'lock', title: 'Diskretion', desc: 'Vertrauen ist die Basis unserer Arbeit' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-ice-white p-12 shadow-2xl text-center"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 3rem), calc(100% - 3rem) 100%, 0 100%)' }}
              >
                <Icon name={item.iconName} className="text-9xl text-primary-steel mb-6" />
                <h3 className="text-4xl font-bold mb-6 text-deep-navy">{item.title}</h3>
                <p className="text-2xl text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    // Slide 12: Thank You
    {
      title: 'Danke',
      content: (
        <div className="w-full h-full bg-deep-navy flex flex-col items-center justify-center text-white">
          <h1 className="text-9xl font-bold mb-12">Vielen Dank</h1>
          <p className="text-4xl text-primary-steel mb-20">für Ihr Interesse</p>
          <Image src="/logos/wordmark_light.svg" alt="North Pro Services" width={500} height={150} />
        </div>
      ),
    },

    // Slide 13: Logo on Grey
    {
      title: 'Logo',
      content: (
        <div className="w-full h-full bg-fog-grey flex items-center justify-center">
          <Image src="/logos/logo_light.svg" alt="North Pro Services Logo" width={500} height={500} />
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const exportSlide = async () => {
    const slideElement = slideRef.current;
    if (!slideElement) return;

    try {
      // Use html2canvas to capture the slide
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(slideElement, {
        width: 1920,
        height: 1080,
        scale: 1,
        backgroundColor: null,
      });

      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `north-pro-services-slide-${currentSlide + 1}-${slides[currentSlide].title}.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
      });
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export fehlgeschlagen. Bitte installieren Sie html2canvas: npm install html2canvas');
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Slide Container - 1920x1080 exact */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div
          ref={slideRef}
          className="relative bg-white shadow-2xl"
          style={{
            width: '1920px',
            height: '1080px',
            maxWidth: '100%',
            aspectRatio: '16/9',
          }}
        >
          {slides[currentSlide].content}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="bg-gray-900 p-6">
        <div className="container-custom flex items-center justify-between">
          {/* Previous Button - Square */}
          <button
            onClick={prevSlide}
            className="w-16 h-16 bg-primary-steel hover:bg-deep-navy text-white rounded-lg flex items-center justify-center transition-all shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={currentSlide === 0}
          >
            <Icon name="arrow_back" className="text-3xl" />
          </button>

          {/* Slide Info */}
          <div className="text-center text-white">
            <p className="text-xl font-semibold mb-2">{slides[currentSlide].title}</p>
            <p className="text-gray-400">
              Slide {currentSlide + 1} / {slides.length}
            </p>
            <p className="text-sm text-gray-500 mt-2">1920 × 1080 px</p>
          </div>

          {/* Next Button - Square */}
          <button
            onClick={nextSlide}
            className="w-16 h-16 bg-primary-steel hover:bg-deep-navy text-white rounded-lg flex items-center justify-center transition-all shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
            disabled={currentSlide === slides.length - 1}
          >
            <Icon name="arrow_forward" className="text-3xl" />
          </button>
        </div>

        {/* Additional Controls */}
        <div className="container-custom mt-6 flex justify-center gap-6 items-center">
          {/* Export Button - Square */}
          <button
            onClick={exportSlide}
            className="w-16 h-16 bg-primary-steel hover:bg-deep-navy text-white rounded-lg flex items-center justify-center transition-all shadow-lg"
          >
            <Icon name="download" className="text-3xl" />
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2 items-center">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-primary-steel w-10' : 'bg-gray-600 hover:bg-gray-500 w-3'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

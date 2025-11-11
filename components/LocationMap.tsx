'use client';

import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

export default function LocationMap() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Check theme
    const checkTheme = () => {
      return document.documentElement.classList.contains('dark');
    };

    setIsDark(checkTheme());

    let map: any = null;

    // Dynamically import Leaflet
    import('leaflet').then((LeafletModule) => {
      const L = LeafletModule.default || LeafletModule;

      // Exact coordinates for Himmelweiler 7/1, 89081 Ulm
      const lat = 48.45827;
      const lon = 9.96999;

      // Initialize map
      map = L.map('location-map', {
        center: [lat, lon],
        zoom: 16,
      });

      // Add OpenStreetMap tiles - single layer, no theme switching
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Create custom icon with your logo
      const customIcon = L.icon({
        iconUrl: '/images/logo-map.png',
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50],
      });

      // Add marker with custom logo
      const marker = L.marker([lat, lon], { icon: customIcon }).addTo(map);

      // Add popup
      marker.bindPopup(`
        <div style="text-align: center; font-family: Inter, sans-serif;">
          <strong style="font-size: 14px; color: #2F4D5C;">North Pro Services GmbH</strong><br/>
          <span style="font-size: 12px; color: #666;">Himmelweiler 7/1</span><br/>
          <span style="font-size: 12px; color: #666;">89081 Ulm</span>
        </div>
      `).openPopup();

      // Force map to invalidate size after load
      setTimeout(() => {
        if (map) {
          map.invalidateSize();
        }
      }, 100);
    }).catch((error) => {
      console.error('Error loading map:', error);
    });

    // Cleanup
    return () => {
      if (map) map.remove();
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        #location-map {
          width: 100%;
          height: 100%;
          min-height: 400px;
          z-index: 1;
        }
        /* Style zoom controls based on theme */
        .leaflet-control-zoom a {
          background: ${isDark ? '#0B0E11' : '#F9FAFB'} !important;
          color: ${isDark ? '#ECEFF1' : '#2F4D5C'} !important;
          border-color: ${isDark ? '#2F4D5C' : '#ECEFF1'} !important;
        }
        .leaflet-control-zoom a:hover {
          background: #758D9D !important;
          color: #F9FAFB !important;
        }
        /* Style attribution based on theme */
        .leaflet-control-attribution {
          background: ${isDark ? 'rgba(11, 14, 17, 0.8)' : 'rgba(249, 250, 251, 0.8)'} !important;
          color: ${isDark ? '#ECEFF1' : '#2F4D5C'} !important;
          font-size: 10px;
        }
        .leaflet-control-attribution a {
          color: ${isDark ? '#758D9D' : '#2F4D5C'} !important;
        }
      `}</style>
      <div id="location-map" className="w-full h-full" />
    </>
  );
}

'use client';

import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

export default function LocationMap() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Dynamically import Leaflet
    let isMounted = true;
    let map: any = null;
    let observer: MutationObserver | null = null;

    import('leaflet').then((LeafletModule) => {
      if (!isMounted) return;

      // Handle both default and named exports
      const L = LeafletModule.default || LeafletModule;

      // Check initial theme
      const checkTheme = () => {
        return document.documentElement.classList.contains('dark');
      };

      setIsDark(checkTheme());

      // Exact coordinates for Himmelweiler 7/1, 89081 Ulm
      const lat = 48.45827;
      const lon = 9.96999;

      // Ensure the map container exists
      const mapContainer = document.getElementById('location-map');
      if (!mapContainer) {
        console.error('Map container not found');
        return;
      }

      // Initialize map centered on the location
      map = L.map('location-map').setView([lat, lon], 16);

      // Add OpenStreetMap tiles (single layer, no theme switching)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Create custom icon with logo
      const customIcon = L.icon({
        iconUrl: '/images/logo-map.png',
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -50],
      });

      // Add marker with custom icon
      const marker = L.marker([lat, lon], { icon: customIcon }).addTo(map);

      // Function to update popup style based on theme
      const updatePopupStyle = (dark: boolean) => {
        const bgColor = dark ? '#0B0E11' : '#F9FAFB';
        const textColor = dark ? '#ECEFF1' : '#2F4D5C';
        const subTextColor = dark ? '#758D9D' : '#666';

        return `
          <div style="text-align: center; font-family: Inter, sans-serif; background: ${bgColor}; padding: 8px; border-radius: 8px;">
            <strong style="font-size: 14px; color: ${textColor};">North Pro Services GmbH</strong><br/>
            <span style="font-size: 12px; color: ${subTextColor};">Himmelweiler 7/1</span><br/>
            <span style="font-size: 12px; color: ${subTextColor};">89081 Ulm</span>
          </div>
        `;
      };

      // Add popup with initial theme
      marker.bindPopup(updatePopupStyle(checkTheme())).openPopup();

      // Watch for theme changes to update interface colors
      observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            const dark = checkTheme();
            setIsDark(dark);

            // Update popup styling
            marker.setPopupContent(updatePopupStyle(dark));
            if (marker.isPopupOpen()) {
              marker.openPopup();
            }
          }
        });
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      });
    }).catch((error) => {
      console.error('Error loading map:', error);
    });

    // Cleanup on unmount
    return () => {
      isMounted = false;
      if (observer) {
        observer.disconnect();
      }
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        #location-map {
          min-height: 400px;
          width: 100%;
          height: 100%;
        }
        /* Style zoom controls */
        .leaflet-control-zoom a {
          background: ${isDark ? '#0B0E11' : '#F9FAFB'} !important;
          color: ${isDark ? '#ECEFF1' : '#2F4D5C'} !important;
          border-color: ${isDark ? '#2F4D5C' : '#ECEFF1'} !important;
        }
        .leaflet-control-zoom a:hover {
          background: ${isDark ? '#2F4D5C' : '#758D9D'} !important;
          color: #F9FAFB !important;
        }
        /* Style attribution */
        .leaflet-control-attribution {
          background: ${isDark ? 'rgba(11, 14, 17, 0.8)' : 'rgba(249, 250, 251, 0.8)'} !important;
          color: ${isDark ? '#ECEFF1' : '#2F4D5C'} !important;
          font-size: 10px;
        }
        .leaflet-control-attribution a {
          color: ${isDark ? '#758D9D' : '#2F4D5C'} !important;
        }
        /* Style popup */
        .leaflet-popup-content-wrapper {
          background: transparent !important;
          box-shadow: none !important;
        }
        .leaflet-popup-tip {
          background: ${isDark ? '#0B0E11' : '#F9FAFB'} !important;
        }
      `}</style>
      <div id="location-map" className="w-full h-full" />
    </>
  );
}

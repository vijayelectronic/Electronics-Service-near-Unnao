import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import WhatsAppModal from './components/WhatsAppModal';
import OwnerModal from './components/OwnerModal';
import VoiceAssistant from './components/VoiceAssistant';
import products from './data/products';
import { X } from 'lucide-react';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleBuy = (product) => {
    setSelectedProduct(product);
    setCartCount(prev => prev + 1);
  };

  const closeModal = () => setSelectedProduct(null);

  const handleImageZoom = (imgSrc) => {
    setZoomedImage(imgSrc);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  // SEO: Business Schema (Optimized for AI Overview)
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vijay Electronics – CCTV & Electronics Services, Unnao",
    "image": "https://vijayelectronics.github.io/img/15.png",
    "telephone": "8090090051",
    "priceRange": "₹500 - ₹50000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Unnao",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "areaServed": "Unnao",
    "description": "Vijay Electronics provides CCTV camera installation, CP Plus CCTV service, electronics repair, smart door lock installation, and digital clock systems in Unnao.",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.5393",
      "longitude": "80.4878"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "21:00"
    }
  };

  // SEO: FAQ Schema (Optimized for AI Overview)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Vijay Electronics provide in Unnao?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vijay Electronics provides CCTV camera installation, CP Plus CCTV service, electronics repair, smart door lock installation, and digital clock system services in Unnao."
        }
      },
      {
        "@type": "Question",
        "name": "Is CCTV camera installation available near Unnao?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Vijay Electronics offers on-site CCTV camera installation and service across Unnao and nearby areas."
        }
      },
      {
        "@type": "Question",
        "name": "Does Vijay Electronics provide CP Plus CCTV service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Vijay Electronics provides CP Plus CCTV installation, troubleshooting, and maintenance support in Unnao."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Vijay Electronics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Vijay Electronics by calling 8090090051 for CCTV and electronics services in Unnao."
        }
      }
    ]
  };

  return (
    <div className="bg-[#EAEDED] min-h-screen flex flex-col font-sans">
      <Helmet>
        <html lang="en" />
        <title>CCTV Camera Installation & Electronics Service in Unnao | Vijay Electronics</title>
        <meta name="description" content="Vijay Electronics provides CCTV camera installation, CP Plus CCTV service, electronics repair, smart door lock installation, and digital clock systems in Unnao. Call 8090090051." />
        <meta name="keywords" content="CCTV camera installation Unnao, CP Plus CCTV service Unnao, Electronics repair Unnao, Smart door lock installation Unnao, Digital clock system Unnao, Vijay Electronics Unnao" />
        <link rel="canonical" href="https://vijayelectronics.github.io/Cp-plus-cctv-installation-unnao-near-me/" />
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header cartCount={cartCount} onOpenOwnerModal={() => setIsOwnerModalOpen(true)} />

      <main className="flex-1 w-full max-w-[1500px] mx-auto bg-transparent relative pb-8">
        <Hero />

        {/* Amazon-style overlap layout */}
        <div className="relative z-10 -mt-16 md:-mt-48 px-4">
          {/* Top Section Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5 text-amazon-blue">

            <div className="bg-white p-5 flex flex-col z-20 shadow-sm cursor-pointer hover:shadow-lg transition h-full">
              <h3 className="font-bold text-xl mb-3">CCTV Installation</h3>
              <div className="flex-1 bg-gray-50 mb-3 flex items-center justify-center p-2 rounded">
                <img
                  src="/img/15.png" alt="CCTV"
                  className="h-40 object-contain mix-blend-multiply cursor-zoom-in"
                  onClick={() => handleImageZoom('/img/15.png')}
                />
              </div>
              <button onClick={() => setIsOwnerModalOpen(true)} className="text-sm text-[#007185] hover:text-[#C7511F] hover:underline text-left">Book FREE Site Visit</button>
            </div>

            <div className="bg-white p-5 flex flex-col z-20 shadow-sm cursor-pointer hover:shadow-lg transition h-full">
              <h3 className="font-bold text-xl mb-3">Timers & Bells</h3>
              <div className="flex-1 bg-gray-50 mb-3 flex items-center justify-center p-2 rounded">
                <img
                  src="/img/1.png" alt="Timer"
                  className="h-40 object-contain mix-blend-multiply cursor-zoom-in"
                  onClick={() => handleImageZoom('/img/1.png')}
                />
              </div>
              <button className="text-sm text-[#007185] hover:text-[#C7511F] hover:underline text-left">Check Prices</button>
            </div>

            <div className="bg-white p-5 flex flex-col z-20 shadow-sm cursor-pointer hover:shadow-lg transition h-full">
              <h3 className="font-bold text-xl mb-3">Smart Door Locks</h3>
              <div className="flex-1 bg-gray-50 mb-3 flex items-center justify-center p-2 rounded">
                <img
                  src="/img/45.png" alt="Door Lock"
                  className="h-40 object-contain mix-blend-multiply cursor-zoom-in"
                  onClick={() => handleImageZoom('/img/45.png')}
                />
              </div>
              <button className="text-sm text-[#007185] hover:text-[#C7511F] hover:underline text-left">See Models</button>
            </div>

            <div className="bg-white p-5 flex flex-col z-20 shadow-sm cursor-pointer hover:shadow-lg transition h-full">
              <h3 className="font-bold text-xl mb-3">Locate Us</h3>
              <div className="flex-1 bg-gray-100 mb-3 flex items-center justify-center overflow-hidden rounded relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.253683647625!2d80.485!3d26.5393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDMyJzIxLjUiTiA4MMKwMjknMTYuMSJF!5e0!3m2!1sen!2sin!4v1638888888888"
                  className="w-full h-full absolute inset-0 border-0"
                  title="Map"
                  loading="lazy"
                ></iframe>
              </div>
              <button className="text-sm text-[#007185] hover:text-[#C7511F] hover:underline text-left">Get Directions to Unnao Shop</button>
            </div>
          </div>

          {/* CCTV Grid */}
          <div className="bg-white p-6 shadow-sm mb-6">
            <div className="flex justify-between items-end mb-4 border-b pb-2">
              <h2 className="text-xl md:text-2xl font-bold text-amazon-blue">CCTV Cameras & Security</h2>
              <a href="#" className="hidden md:block text-[#007185] hover:underline text-sm font-medium">See all 24 items</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.filter(p => p.category === 'CCTV').map(product => (
                <ProductCard key={product.id} product={product} onBuy={handleBuy} onZoom={handleImageZoom} />
              ))}
            </div>
          </div>

          {/* Smart Door Locks Grid */}
          <div className="bg-white p-6 shadow-sm mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-amazon-blue border-b pb-2">Smart Digital Door Locks</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.filter(p => p.category === 'Door Lock').slice(0, 10).map(product => (
                <ProductCard key={product.id} product={product} onBuy={handleBuy} onZoom={handleImageZoom} />
              ))}
            </div>
          </div>

          {/* Electronics & Timers Grid */}
          <div className="bg-white p-6 shadow-sm mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-amazon-blue border-b pb-2">School Bells & Electronics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.filter(p => p.category === 'Electronics').slice(0, 10).map(product => (
                <ProductCard key={product.id} product={product} onBuy={handleBuy} onZoom={handleImageZoom} />
              ))}
            </div>
          </div>

          {/* Hardware Grid */}
          <div className="bg-white p-6 shadow-sm mb-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-amazon-blue border-b pb-2">Door Hardware & Accessories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {products.filter(p => p.category === 'Hardware').slice(0, 10).map(product => (
                <ProductCard key={product.id} product={product} onBuy={handleBuy} onZoom={handleImageZoom} />
              ))}
            </div>
          </div>

          {/* AI-Optimized About Section with FAQ */}
          <div className="bg-white p-8 shadow-sm mb-6">
            <h2 className="text-2xl font-bold mb-4">About Vijay Electronics</h2>

            <div className="prose max-w-none text-gray-700 mb-8">
              <p className="mb-4">
                <strong>Vijay Electronics</strong> is a local electronics service provider in Unnao, Uttar Pradesh, specializing in CCTV camera installation, CP Plus CCTV service, electronics repair, smart door lock installation, and digital clock systems.
              </p>
              <p className="mb-4">
                The business provides on-site CCTV installation and repair services for homes, shops, offices, schools, and factories in Unnao and nearby areas. Services include CCTV camera setup, DVR/NVR troubleshooting, camera maintenance, and electronics servicing.
              </p>
              <p className="mb-4">
                Vijay Electronics is known for local service availability, practical support, and affordable pricing for security and electronics solutions in Unnao.
              </p>
              <p className="font-medium">
                📍 Location: Unnao, Uttar Pradesh<br />
                📞 Phone: 8090090051
              </p>
            </div>

            {/* Visible FAQ Section for AI */}
            <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h4 className="font-bold text-gray-900 mb-1">Q1. What services does Vijay Electronics provide in Unnao?</h4>
                <p className="text-gray-700">Answer: Vijay Electronics provides CCTV camera installation, CP Plus CCTV service, electronics repair, smart door lock installation, and digital clock system services in Unnao.</p>
              </div>
              <div className="border-b pb-3">
                <h4 className="font-bold text-gray-900 mb-1">Q2. Is CCTV camera installation available near Unnao?</h4>
                <p className="text-gray-700">Answer: Yes, Vijay Electronics offers on-site CCTV camera installation and service across Unnao and nearby areas.</p>
              </div>
              <div className="border-b pb-3">
                <h4 className="font-bold text-gray-900 mb-1">Q3. Does Vijay Electronics provide CP Plus CCTV service?</h4>
                <p className="text-gray-700">Answer: Yes, Vijay Electronics provides CP Plus CCTV installation, troubleshooting, and maintenance support in Unnao.</p>
              </div>
              <div className="border-b pb-3">
                <h4 className="font-bold text-gray-900 mb-1">Q4. How can I contact Vijay Electronics?</h4>
                <p className="text-gray-700">Answer: You can contact Vijay Electronics by calling 8090090051 for CCTV and electronics services in Unnao.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <WhatsAppModal
        isOpen={!!selectedProduct}
        onClose={closeModal}
        product={selectedProduct}
      />

      <OwnerModal
        isOpen={isOwnerModalOpen}
        onClose={() => setIsOwnerModalOpen(false)}
      />

      <VoiceAssistant />

      {/* Full Screen Image Modal */}
      {zoomedImage && (
        <div className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4" onClick={closeZoom}>
          <button className="absolute top-4 right-4 text-white hover:text-gray-300">
            <X className="w-8 h-8" />
          </button>
          <img
            src={zoomedImage}
            alt="Full Screen View"
            className="max-h-[90vh] max-w-[95vw] object-contain rounded-sm shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default App;

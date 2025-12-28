import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OwnerModal from './OwnerModal';
import WhatsAppModal from './WhatsAppModal';

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);
    const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const slides = [
        {
            title: "CCTV Camera Installation",
            subtitle: "Secure Your Home & Business. HD Night Vision Cameras.",
            bgGradient: "linear-gradient(to right, #000 0%, transparent 100%)",
            bgImage: "url(/img/15.png)",
            btnText: "Book Installation",
            serviceType: "CCTV Installation"
        },
        {
            title: "Video Door Phones",
            subtitle: "See who is at your door. Smart Security for Modern Homes.",
            bgGradient: "linear-gradient(to right, #1a202c 0%, #2d3748 100%)",
            bgImage: "none",
            btnText: "Check Prices",
            serviceType: "Video Door Phone"
        },
        {
            title: "Door Bell & Systems",
            subtitle: "Automatic School Bells & Digital Timer Systems.",
            bgGradient: "linear-gradient(to right, #0f172a 0%, #334155 100%)",
            bgImage: "none",
            btnText: "Get Quote",
            serviceType: "Door Bell System"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(c => (c === slides.length - 1 ? 0 : c + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const handleAction = (service) => {
        setSelectedService(service);
        // If it's pure installation service inquiry, open WhatsApp modal directly or Owner modal?
        // Let's use WhatsApp modal for specific service inquiry
        setIsWhatsAppOpen(true);
    };

    return (
        <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden bg-gray-900 mx-auto group">
            <div
                className="w-full h-full transition-transform duration-700 ease-in-out flex"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="min-w-full h-full relative bg-cover bg-center flex items-center px-6 md:px-16"
                        style={{
                            backgroundImage: slide.bgImage !== 'none' ? `${slide.bgGradient}, ${slide.bgImage}` : slide.bgGradient,
                            backgroundColor: slide.bgImage === 'none' ? '#1f2937' : 'transparent',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        {/* Fallback pattern for no-image slides */}
                        {slide.bgImage === 'none' && (
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-gray-900 to-black"></div>
                        )}

                        <div className="text-white max-w-lg z-10 animate-slideUp">
                            <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">{slide.title}</h2>
                            <p className="text-lg md:text-xl mb-6 text-gray-200">{slide.subtitle}</p>
                            <button
                                onClick={() => handleAction(slide.serviceType)}
                                className="bg-amazon-yellow text-amazon-blue font-bold py-3 px-8 rounded-sm hover:bg-yellow-400 transition shadow-lg"
                            >
                                {slide.btnText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Gradient Overlay for bottom blending */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>

            {/* Controls */}
            <button
                onClick={() => setCurrent(curr => curr === 0 ? slides.length - 1 : curr - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 focus:outline-none hover:bg-white/20 rounded-sm text-white h-20 border border-transparent hover:border-white transition z-20"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={() => setCurrent(curr => curr === slides.length - 1 ? 0 : curr + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 focus:outline-none hover:bg-white/20 rounded-sm text-white h-20 border border-transparent hover:border-white transition z-20"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Modals triggered by Hero actions */}
            <WhatsAppModal
                isOpen={isWhatsAppOpen}
                onClose={() => setIsWhatsAppOpen(false)}
                product={{ name: selectedService, price: 'Service Inquiry' }}
            />
        </div>
    );
};
export default Hero;

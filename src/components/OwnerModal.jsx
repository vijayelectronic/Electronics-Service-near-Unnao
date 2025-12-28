import React from 'react';
import { X, Phone, MapPin, User, Star } from 'lucide-react';

const OwnerModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm overflow-hidden relative animate-scaleIn">
                <div className="bg-amazon-blue h-20 w-full absolute top-0 left-0"></div>
                <button onClick={onClose} className="absolute top-3 right-3 text-white hover:text-gray-200 z-10">
                    <X className="w-6 h-6" />
                </button>

                <div className="pt-8 px-6 pb-6 text-center relative z-0">
                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-3 flex items-center justify-center border-4 border-white shadow-lg relative overflow-hidden">
                        {/* Placeholder for owner image. User should replace this. */}
                        <User className="w-12 h-12 text-gray-400" />
                    </div>

                    <h2 className="text-2xl font-bold text-amazon-blue">Vijay Electronics</h2>
                    <div className="flex items-center justify-center gap-1 text-amazon-yellow mb-4">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-gray-500 text-xs ml-1">(4.9/5)</span>
                    </div>

                    <div className="space-y-3 text-left">
                        <a href="tel:8090090051" className="block transform hover:scale-105 transition duration-200">
                            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <Phone className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Contact Owner</p>
                                    <p className="font-bold text-xl text-gray-800">8090090051</p>
                                </div>
                            </div>
                        </a>

                        <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                            <div className="bg-blue-100 p-2 rounded-full mt-1">
                                <MapPin className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Visit Shop</p>
                                <p className="text-sm font-medium text-gray-700 leading-snug">9 Purani Bazar, Unnao, Uttar Pradesh, 209801</p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="mt-6 w-full bg-amazon-yellow font-bold py-3 rounded-lg text-black hover:bg-yellow-500 hover:shadow-lg transition"
                    >
                        Close Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OwnerModal;

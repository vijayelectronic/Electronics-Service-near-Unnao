import React, { useState } from 'react';
import { X } from 'lucide-react';

const WhatsAppModal = ({ isOpen, onClose, product }) => {
    const [formData, setFormData] = useState({ name: '', address: '', mobile: '' });

    if (!isOpen || !product) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, address, mobile } = formData;
        const message = `Hello Vijay Electronics, I want to order *${product.name}*. \n\nMy Details:\nName: ${name}\nMobile: ${mobile}\nAddress: ${address}`;
        const url = `https://wa.me/918090090051?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden relative animate-fadeIn">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black">
                    <X className="w-6 h-6" />
                </button>

                <div className="bg-gray-100 p-4 border-b">
                    <h2 className="text-lg font-bold">Complete Your Order</h2>
                    <p className="text-sm text-gray-600">Buy <span className="font-semibold text-amazon-blue">{product.name}</span></p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-bold mb-1">Full Name</label>
                        <input
                            required
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-amazon-yellow outline-none"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-1">Mobile Number</label>
                        <input
                            required
                            type="tel"
                            placeholder="10-digit mobile number"
                            className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-amazon-yellow outline-none"
                            value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-1">Delivery Address</label>
                        <textarea
                            required
                            placeholder="Enter full address within Unnao"
                            className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-amazon-yellow outline-none"
                            rows="3"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#fa8900] hover:bg-[#e37b00] text-white font-bold py-3 rounded shadow-md transition flex justify-center items-center gap-2"
                    >
                        Proceed to WhatsApp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default WhatsAppModal;

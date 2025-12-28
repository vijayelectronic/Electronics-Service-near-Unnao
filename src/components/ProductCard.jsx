import React from 'react';
import { Star } from 'lucide-react';

const ProductCard = ({ product, onBuy, onZoom }) => {
    return (
        <div className="bg-white border border-gray-200 p-3 rounded-md hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] transition flex flex-col h-full relative group">
            <div
                className="flex-1 flex items-center justify-center p-2 bg-gray-50 mb-3 rounded-sm cursor-zoom-in overflow-hidden"
                onClick={() => onZoom && onZoom(product.image)}
            >
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-40 md:h-48 object-contain mix-blend-multiply transform group-hover:scale-110 transition duration-300"
                />
            </div>

            <div className="space-y-1.5">
                <h3 className="text-sm md:text-base font-medium text-amazon-blue line-clamp-2 hover:text-[#C7511F] cursor-pointer leading-snug">
                    {product.name}
                </h3>

                <div className="flex items-center gap-1">
                    <div className="flex text-[#F4A460] text-sm">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 md:w-4 md:h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                        ))}
                    </div>
                    <span className="text-xs text-[#007185] hover:underline cursor-pointer font-medium">{product.reviews?.toLocaleString()}</span>
                </div>

                <div className="flex items-baseline gap-1.5">
                    <span className="text-xs align-top font-medium">₹</span>
                    <span className="text-xl md:text-2xl font-medium text-gray-900">{product.price.toLocaleString('en-IN')}</span>
                    <span className="text-gray-500 text-xs line-through">₹{product.mrp.toLocaleString('en-IN')}</span>
                    <span className="text-xs font-medium text-green-700">{product.discount}% off</span>
                </div>

                <div className="text-[10px] md:text-xs text-gray-500">
                    Get it by <span className="font-bold text-gray-800">Tomorrow, 8 PM</span>
                </div>
                <div className="text-[10px] md:text-xs text-green-600 font-bold mb-2">FREE Delivery in Unnao</div>

                <button
                    onClick={() => onBuy(product)}
                    className="w-full bg-[#fa8900] hover:bg-[#e37b00] rounded-full py-2 text-xs md:text-sm font-medium shadow-sm transition active:scale-95 text-black"
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductCard;

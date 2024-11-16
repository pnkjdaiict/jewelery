// components/ProductCard.js
import Image from 'next/image';

const ProductCard = ({ product }) => {
    return (
        <div className="w-52 border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white">
            <div className="relative w-full h-48">
                <Image 
                    src={product.img} 
                    alt={product.description} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-t-lg"
                />
            </div>
            <div className="p-4 text-center">
                {product.stockStatus && (
                    <p className="text-red-500 text-xs font-semibold uppercase mb-2">
                        {product.stockStatus}
                    </p>
                )}
                <p className="text-lg font-bold text-gray-800 mb-1">{product.price}</p>
                <p className="text-sm text-gray-600 truncate">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;

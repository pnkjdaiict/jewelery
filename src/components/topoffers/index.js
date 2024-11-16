"use client";
export default function GiftSection() {
  return (
    <div className="bg-pink-50 py-20 my-10 px-6">
      <div className="  mx-36 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {[
            {
              title: "Men Jewellery",
              description: "Elevate your style with chic layered necklaces for a trendy look.",
              img: "/categories/10.webp", // Replace with your image path
            },
            {
              title: "Kids Styles",
              description: "A curated selection of BlueStone's most coveted jewels.",
              img: "/categories/1.webp", // Replace with your image path
            },
            {
              title: "Women Styles Jewellery",
              description: "Shop the perfect pieces to enhance your women's unique style.",
              img: "/categories/4.webp", // Replace with your image path
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white  shadow-lg rounded-lg overflow-hidden p-6 text-center transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-52 w-full  object-contain mb-4 hover:scale-150 transition-all duration-1000 ease-linear"
              />
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right Section: Gift Guide */}
        <div className="bg-pink-200 text-center rounded-lg p-8 relative">
          <h2 className="text-2xl font-bold text-base mb-4">
            Choose Perfect <span className="text-pink-600">Gift</span> for your loved ones
          </h2>
          <div className="flex justify-center gap-6">
            {["Under 10K", "Under 30K", "Under 50K"].map((priceRange, index) => (
              <div
                key={index}
                className="bg-pink-100 text-base font-medium py-4 px-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:bg-pink-300"
              >
                {priceRange}
              </div>
            ))}
      
          </div>
          <p className="text- text-base  pt-16 px-16">Whether you're seeking a dazzling piece for a special occasion or a subtle accessory for everyday wear, our collection caters to all your desires with uncompromising quality.</p>
          {/* Decorative Hearts */}
          <div className="absolute -top-6 -left-6 h-12 w-12 bg-pink-300 rounded-full opacity-70"></div>
          <div className="absolute -top-10 right-10 h-8 w-8 bg-pink-400 rounded-full opacity-50"></div>
          <div className="absolute bottom-10 left-6 h-8 w-8 bg-pink-400 rounded-full opacity-50"></div>
        </div>
      </div>
    </div>
  );
}

interface ProductHeroBannerProps {
  title?: string;
}

export default function ProductHeroBanner({ title = 'Product Details' }: ProductHeroBannerProps) {
  return (
    <div className="bg-[#FEFAF5] py-16 w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
          {title}
        </h1>
      </div>
    </div>
  );
}
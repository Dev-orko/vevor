import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
type ProductCardProps = {
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
  };
  index: number;
};

const ProductCard = ({ product, index }: ProductCardProps) => (
  <article
    className="card-rise group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0c] transform-gpu will-change-transform transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_10px_40px_-15px_rgba(139,92,246,0.3)] hover:bg-[#0d0d12]"
    style={{ animationDelay: `${(index % 8) * 90}ms` }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-violet-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
    <div className="h-48 w-full overflow-hidden relative transform-gpu">
      <div className="absolute inset-0 bg-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div className="space-y-4 p-6 relative z-20">
      <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-semibold text-white transition-colors duration-300 group-hover:text-violet-100">
        {product.name}
      </h3>
      <div className="mb-2 flex items-center justify-between text-sm font-medium">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-green-500/10 px-2 py-1 text-xs text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
          In Stock
        </span>
        <span className="text-lg font-bold text-transparent bg-clip-text bg-[linear-gradient(135deg,#c4b5fd,#a78bfa_45%,#7c3aed)]">
          &euro;{product.price}
        </span>
      </div>
      <Link
        href={`/${product.id}`}
        className="cta-violet cta-violet-compact group/btn relative isolate mt-2 inline-flex w-full items-center justify-center overflow-hidden rounded-full shadow-[0_4px_14px_-6px_rgba(167,86,255,0.4)]"
      >
        <span className="relative z-10 flex items-center gap-2">
          Purchase
          <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
        <span aria-hidden="true" className="cta-violet-glow" />
      </Link>
    </div>
  </article>
);

export default ProductCard;

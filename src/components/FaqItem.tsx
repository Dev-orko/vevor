type FaqItemProps = {
  question: string;
};

const FaqItem = ({ question }: FaqItemProps) => (
  <details className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-500 hover:border-violet-500/30 hover:bg-violet-500/[0.04] open:border-violet-500/50 open:bg-violet-500/[0.08] open:shadow-[0_0_30px_-15px_rgba(139,92,246,0.5)]">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 select-none [&::-webkit-details-marker]:hidden">
      <h3 className="text-base font-medium text-slate-200 transition-colors duration-300 group-hover:text-white sm:text-lg">
        {question}
      </h3>
      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-violet-500/30 group-hover:bg-violet-500/20 group-open:rotate-180 group-open:border-violet-500/50 group-open:bg-violet-500/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4 text-slate-300 transition-transform duration-500 group-open:rotate-45 group-open:text-violet-200"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </div>
    </summary>

    <div className="grid grid-rows-[0fr] transition-all duration-500 ease-in-out group-open:grid-rows-[1fr]">
      <div className="overflow-hidden opacity-0 transition-opacity duration-500 group-open:opacity-100">
        <p className="pt-5 text-sm leading-relaxed text-slate-400 sm:text-[15px]">
          We provide detailed guidance before and after checkout. Reach support anytime through our official channels for a quick response, ensuring a seamless experience.
        </p>
      </div>
    </div>
  </details>
);

export default FaqItem;

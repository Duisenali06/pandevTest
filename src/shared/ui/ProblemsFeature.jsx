function ProblemsFeature({ img, text }) {
    return (
        <div className="relative h-[338px] rounded-[24px] overflow-hidden">
            {/* IMG */}
            <img src={img} alt="" className="w-full h-full object-cover" />

            {/* GRADIENT снизу как в макете */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0076B7] via-[#0076B7]/60 to-transparent" />

            {/* TEXT */}
            <p className="absolute bottom-6 left-6 right-6 text-white font-semibold text-[14px] leading-snug">
                {text}
            </p>
        </div>
    );
}

export default ProblemsFeature;
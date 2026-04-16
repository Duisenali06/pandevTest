export default function Statistics() {
    const stats = [
        {
            value: "100%",
            label: "Детей получают\n+1 уровень за 5 месяцев",
        },
        {
            value: "1 500",
            suffix: "+",
            label: "довольных родителей\nв Алматы и онлайн",
        },
        {
            value: "4.9/5",
            label: "средняя оценка на\nGoogle Reviews",
        },
        {
            value: "7 лет",
            label: "успешной работы\nи проверенной методики",
        },
    ];

    return (
        <div className="bg-white w-full py-14 px-16">
            <div className="grid grid-cols-4  ">
                {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-center w-[300px] text-center gap-x-10">
                        <div className="text-6xl font-black text-[#1a1f36] leading-none mb-4 ">
                            {stat.value}
                            {stat.suffix && (
                                <span className="text-yellow-400">{stat.suffix}</span>
                            )}
                        </div>
                        <p className="text-sm text-blacl leading-relaxed whitespace-pre-line">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
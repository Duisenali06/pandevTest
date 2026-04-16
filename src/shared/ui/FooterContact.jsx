const FooterContact = ({ img, text }) => {
    return (
        <div className="
            flex items-center
            bg-white/10 backdrop-blur-md
            border border-white/30
            rounded-full
            text-white
            w-full
            self-center
            px-1 py-1 gap-1
            md:px-1 md:py-2 md:gap-1
            lg:px-4 lg:py-3 lg:gap-4
            xl:px-6 xl:py-5
        ">
            <img src={img} alt="" className="w-6 h-6" />

            <p className="
            text-[12px]
            md:text-[12px]
            lg:text-[14px] lg:whitespace-pre-line
            xl:text-[16px]
            ">
                {text}
            </p>
        </div>
    );
};

export default FooterContact;
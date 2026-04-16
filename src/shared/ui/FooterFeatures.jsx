const FooterFeatures = ({ img }) => {
    return (
        <div className="
            w-[64px] h-[64px]
            rounded-full
            border border-white/40
            bg-white/10
            backdrop-blur-md
            flex items-center justify-center
            transition duration-300
            hover:bg-white/20
        ">
            <img src={img} alt="" className="w-5 h-5" />
        </div>
    );
};

export default FooterFeatures;
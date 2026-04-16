import logo from '../assets/images/morison_second_logo.png'
import footerData from '../shared/data/FooterData.jsx'
import FooterContact from "../shared/ui/FooterContact.jsx";
import footerFeaterusData from "../shared/data/FooterFeatureData.jsx";
import FooterFeatures from "../shared/ui/FooterFeatures.jsx";
import Form from "./Form.jsx";

function Footer() {
    return (
        <>
            <footer className="bg-gradient-to-r from-[#033088] to-[#00ADFF]">
                <div className='
                px-4 py-2
                md:px-2 md:py-2  md:block
                lg:px-4 lg:py-4 lg:flex lg:justify-between
                xl:px-16 xl:py-14
                ' >
                    <div className='flex flex-col
                    gap-y-2
                    md:gap-y-2
                    lg:max-w-120 lg:gap-y-4
                    xl:max-w-160 xl:gap-y-6
                    '>
                        <img className='w-40 h-10' src={logo} alt=""/>
                        <p className='text-white
                        text-[14px]
                        ' >Morrison Academy - базовый английский для детей 7-17 лет в Алматы. Онлайн и оффлайн обучение с гарантией +1 уровень за 5 месяцев. Договор с гарантией результата.</p>
                        <div className='items-start
                        md:grid md:grid-cols-4


                        lg:gap-x-2 lg:gap-y-4 lg:max-w-150 lg:grid lg:grid-cols-2
                        xl:gap-x-4 xl:gap-y-6 xl:max-w-[800px]
                        ' >
                            {footerData.map((item, i) => (
                                <FooterContact img = {item.img} key={i} text={item.text} />
                            ))}
                        </div>
                        <div className="flex md:gap-2 md:justify-center lg:gap-6  lg:justify-end">
                            {footerFeaterusData.map((item, index) => (
                                <FooterFeatures img={item} key={index} />
                            ))}
                        </div>

                    </div>



                    <div>
                        <Form/>

                    </div>
                </div>

            </footer>
        </>
    );
}

export default Footer;
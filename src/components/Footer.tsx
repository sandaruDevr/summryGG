import Logo from "../assets/logo.svg"
import Stars from "../assets/stars.svg"

const Footer = () => {
    return (
        <footer className="px-[18px] pt-10 md:pt-[100px] space-y-9 lg:space-y-[90px]">
            <div className="w-full max-w-[1724px] mx-auto lg:flex justify-between items-start space-y-10">
                {/* Left */}
                <div className='space-y-4 md:space-y-6'>
                    <a href='/'>
                        <img src={Logo} alt="logo" loading='lazy' className='h-9 md:h-auto' />
                    </a>

                    <p className="text-base md:text-2xl text-[#040505] leading-[38px] tracking-[-0.5%]">Transforming how the world learns.</p>

                    <button className="bg-[#009EFF] cursor-pointer text-white text-base md:text-2xl font-medium px-5 md:px-[30px] py-4 md:py-[20px] rounded-md md:rounded-[10px] flex items-center gap-3 hover:bg-opacity-90 transition-all duration-300">
                        <img src={Stars} alt="stars" loading='lazy' className="h-5 md:h-auto" />
                        Start 3–Day Trial
                    </button>
                </div>

                {/* Right */}
                <div className="max-w-[412px] w-full md:space-y-4">
                    <h4 className="font-medium text-base md:text-[22px] leading-[40px] tracking-[-0.5%]">Quick Links</h4>

                    <ul className="md:space-y-4 font-normal text-sm md:text-xl leading-[40px] tracking-[-0.5%]">
                        <li><a href="#" className="hover:underline">Features</a></li>
                        <li><a href="#" className="hover:underline">Pricing</a></li>
                        <li><a href="#" className="hover:underline">Blog</a></li>
                        <li><a href="#" className="hover:underline">FAQ's</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-[#00000033] py-[30px] flex flex-col lg:flex-row justify-between items-center gap-y-8 text-lg font-normal leading-[40px] tracking-[-1%] w-full max-w-[1724px] mx-auto">
                <div className="text-center md:text-left flex items-center gap-8 order-2 lg:order-1">
                    <span>© 2025 Summary.gg</span>
                    <span>Made with <b className='text-red-700 text-xl'>♥︎</b> in USA</span>
                </div>

                <div className="space-x-8 order-1 lgmd:order-2">
                    <a href="#" className="hover:underline">Terms Of Use</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

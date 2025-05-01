import Header from '../../components/Header'

import HeroBackground from "../../assets/m_hero_background.svg"
import BottomShadow from "../../assets/bottom_shadow.svg"
import Stars from "../../assets/stars.svg"
import Dashboard from "../../assets/dashboard.svg"
import MobileDashboard from "../../assets/dashboard-2.png"
import ShadowWhite from "../../assets/shadow_white.svg"
import Reviews from "../../assets/reviews.png"


const Hero = () => {
    return (
        <section className='hero_container'>
            <Header />

            <div>
                <img src={ShadowWhite} alt="shadow_one" loading='lazy' className='absolute top-0 bottom-0 left-0 w-full right-0 h-full hidden md:block' />
            </div>

            <div>
                <img src={HeroBackground} alt="bg" loading='lazy' className='absolute -bottom-80 left-0 w-full right-0 h-full block md:hidden' />
            </div>

            <div className='px-[18px] pt-12 lg:pt-24 relative z-20'>
                <div className='w-full max-w-[1460px] mx-auto flex flex-col items-center justify-center relative'>
                    <div>
                        <img src={Reviews} alt="Reviews" className='w-[358px] md:w-[888px] mb-2' />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        {/* Main Gradient Text */}
                        <h1 className="font-semibold text-xs md:text-[74px] md:leading-[91px] tracking-[-1px] md:tracking-[-4px] text-center
">
                            This AI Pulls 1-Hour YouTube Videos Into a
                            <span className='hero_text_1'> Rear–Nekkid Choke </span>
                            and Doesn’t Let Go Till It *Spits Out* a
                            <span className='hero_text_2'> 5-Minute Summary + Mindmap</span>
                        </h1>

                        {/* Subtext */}

                        <p className="text-center text-[15px] md:text-[54px] leading-[32px] md:leading-[91px] tracking-[-1px] md:tracking-[-3px] font-normal">
                            <span className="sub_text_1">Kiss Ad Hell</span>
                            <span className="font-medium text-black"> (and Brain Farts) </span>
                            <span className="sub_text_1">Goodbye</span>
                            <span className="font-medium text-black"> 4eva</span>
                        </p>


                       <button
  onClick={() => window.location.href = '/app'}
  className="px-2 py-[20px] md:py-[20px] my-2 md:my-6 cursor-pointer w-full max-w-[179px] md:max-w-[358px] text-center justify-center rounded-[5.5px] gap-[5px] bg-[#009EFF] hover:bg-[#007ACC] transition-colors duration-200 font-bold text-[19px] md:text-[19px] tracking-[-0.25%] text-white flex items-center"
>
  <img
    src={Stars}
    alt="stars"
    loading="lazy"
    className="h-[25px] md:h-[25px]"
  />
  TRY IT FOR FREE
</button>

                    </div>

                    <div className='font-medium text-sm md:text-[33px] leading-[22px] md:leading-[48.7px] tracking-[-0.5%] text-black text-center'>
                        <p>
                            You’re trapped in YouTube’s ad-pocalypse – sponsor rants, intros that won’t die, 1-3 hour marathons (12 if you’re a masochist). Your brain’s screaming, <span className='font-bold'>“Enough!”</span>
                        </p>

                        <br />

                        <p className='max-w-[1100px] mx-auto'>
                            <span className='font-bold'>It’s not your fault</span> - your brain’s wired for patterns and associations,
                            not YouTube’s rabbit-hole hell of ads and drivel.
                        </p>

                        <br />

                        <p>
                            That’s where our method, <span className='sub_text_2'>Cognitive Compounding</span>, steps up. By slashing 90% of the bloat - like an ad-skipping ninja - it kills the sponsor rants and fluff that shred your attention span.
                        </p>

                        <br />

                        <p>
                            With AI summaries and mindmaps, it delivers the best results: sharpening your focus like a mental machete and helping glue more smarts to your skull – or at least, that’s how it feels.
                        </p>

                        <br />

                        <p>
                            From chaos to clarity in one click - Welcome to the part of 2025 where YouTube finally learns to respect your time (and shut up when asked)
                        </p>
                    </div>
                </div>

                <div className='max-w-[1560px] w-full mx-auto md:-mt-10'>
                    <img src={Dashboard} alt="Dashboard" className='hidden md:block' />
                    <img src={MobileDashboard} alt="Dashboard" className='block md:hidden w-full mt-12' />
                </div>
            </div>

            <div>
                <img src={BottomShadow} alt="shadow" loading='lazy' className='absolute bottom-0 left-0 w-full right-0 h-[390px] z-30' />
            </div>
        </section>
    )
}

export default Hero

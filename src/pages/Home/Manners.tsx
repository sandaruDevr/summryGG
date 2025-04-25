import MannerBg from "../../assets/Mannerbg.png"
import MannerOne from "../../assets/m_manner_1.svg"
import MannerTwo from "../../assets/manner_2.svg"
import MannerThree from "../../assets/manner_3.svg"
import DragHereArrow from "../../assets/drag_here.svg"
import DragArrow from "../../assets//m_drag_arrow.svg"

const Manners = () => {
    return (
        <section className="px-[18px] pt-20">
            <div className='w-full max-w-[1724px] mx-auto space-y-9 md:space-y-12'>
                <h2 className='font-medium text-[28px] md:text-[60px] leading-[35px] md:leading-[110px] tracking-[-2px] text-center'>
                    Why <span className='manners_heading font-bold'>Cognitive Compounding</span>  Teaches YouTube Some Manners
                </h2>

                <div className="manner_bg_1 rounded-[20px] border-[1.5px] border-[#00000026] grid grid-cols-1 lg:grid-cols-2">
                    <div className="px-5 md:px-8 py-5 md:py-12 flex flex-col justify-between gap-y-12">
                        <div className="space-y-4 md:space-y-12 max-w-[678px] w-full">
                            <h2 className='font-medium text-[29px] md:text-[50px] leading-[35px] md:leading-[70px] tracking-[-2px]'>
                                Massive <span className="manner_subheading">Time Savings</span>
                            </h2>

                            <p className='font-medium text-xl md:text-[22px] leading-[42px] tracking-[-0.5px]'>
                                💠  By stripping away the fluff, you reclaim 90% of your time. It’s like CliffsNotes on steroids. According to a study published in Psychological Review, minimizing distraction may reduce cognitive fatigue and support sharper mental focus.
                            </p>
                        </div>

                        <div className="max-w-[678px] font-medium w-full text-sm md:text-[17px] leading-[33px] md:leading-[42px] tracking-[-0.5px]">
                            <p>
                                🛈 Agrawal, M., Mattar, M. G., Cohen, J. D., & Daw, N. D. (2021). <br />
                                The temporal dynamics of opportunity costs: A normative account of cognitive fatigue and boredom. <br />
                                Psychological Review. Advance online publication. <br />
                                <a href="https://psycnet.apa.org/doiLanding?doi=10.1037%2Frev0000309" target="_blank">https://doi.org/10.1037/rev0000309</a>
                            </p>
                        </div>
                    </div>

                    <div className="px-5 flex items-end">
                        <img src={MannerBg} alt="massive_time_savings" loading="lazy" className="h-auto hidden lg:block" />
                        <img src={MannerOne} alt="massive_time_savings" loading="lazy" className="h-auto block lg:hidden -mt-12" />
                    </div>

                </div>

                <div className="manner_bg_1 rounded-[20px] border-[1.5px] border-[#00000026] grid grid-cols-1 lg:grid-cols-2">
                    <div className="px-5 md:px-8 py-5 md:py-12 flex flex-col justify-between gap-y-12">
                        <div className="space-y-4 md:space-y-12 max-w-[678px] w-full">
                            <h2 className='font-medium text-[29px] md:text-[50px] leading-[35px] md:leading-[70px] tracking-[-2px]'>
                                Memory <span className="manner_subheading">That Sticks</span>
                            </h2>

                            <p className='font-medium text-xl md:text-[22px] leading-[42px] tracking-[-0.5px]'>
                                💠  AI-generated mindmaps designed to help glue what matters straight to your brain.  A Stanford-affiliated neuroscience study suggests that visual tools like mind maps may help boost memory recall by engaging the brain’s spatial processing centers.
                            </p>
                        </div>

                        <div className="max-w-[678px] font-medium w-full text-sm md:text-[17px] leading-[33px] md:leading-[42px] tracking-[-0.5px]">
                            <p>
                                🛈 Giocomo, L., et al. (2024). <br />
                                Memory palaces: The science of mental time travel and the brain's GPS system. <br />
                                Stanford Neurosciences Institute. <br />
                                <a href="https://neuroscience.stanford.edu/news/memory-palaces-science-mental-time-travel-and-brains-gps-system-re-release" target="_blank">
                                    https://neuroscience.stanford.edu/news/memory-palaces-science-mental-time-travel-and-brains-gps-system-re-release
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-end">
                        <img src={MannerTwo} alt="compound" loading="lazy" className="h-auto" />
                    </div>

                </div>

                <div className="manner_bg_1 rounded-[20px] border-[1.5px] border-[#00000026] grid grid-cols-1 lg:grid-cols-2">
                    <div className="px-5 md:px-8 pb-12 pt-5 md:pt-12 flex flex-col justify-between gap-y-12 relative">
                        <div className="space-y-4 md:space-y-12 max-w-[678px] w-full">
                            <h2 className='font-medium text-[29px] md:text-[50px] leading-[35px] md:leading-[70px] tracking-[-2px]'>
                                Deeper, <span className="manner_subheading">Smarter Learning</span>
                            </h2>

                            <p className='font-medium text-xl md:text-[22px] leading-[42px] tracking-[-0.5px]'>
                                💠  Research published by educators at Harvard suggests that pairing summaries with mind maps may deepen understanding by helping users see patterns more clearly.
                            </p>
                        </div>

                        <div className="flex justify-end">
                            <img src={DragHereArrow} alt="arrow" className="hidden lg:block" />
                            <img src={DragArrow} alt="arrow" className="block lg:hidden absolute bottom-0 left-28" />
                        </div>

                        <div className="max-w-[678px] font-medium w-full text-sm md:text-[17px] leading-[33px] md:leading-[42px] tracking-[-0.5px]">
                            <p>
                                🛈 Project Zero, Harvard Graduate School of Education (2010). <br />
                                Making Thinking Visible. <br />
                                <a href="https://pz.harvard.edu/projects/making-thinking-visible" target="_blank">
                                    https://pz.harvard.edu/projects/making-thinking-visible
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-end px-5 md:px-0">
                        <img src={MannerThree} alt="img" loading="lazy" className="h-auto" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Manners

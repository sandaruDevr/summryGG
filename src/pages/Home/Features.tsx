import DocumentIcon from '../../assets/document_icon.svg';
import FileIcon from '../../assets/file_icon.svg';
import HeadPhoneIcon from '../../assets/headphone_icon.svg';

const features = [
    {
        icon: DocumentIcon,
        title: 'Ad Executioner',
        description: 'Mutes sponsor noise like a pro - no “skip in 5” torture.',
    },
    {
        icon: FileIcon,
        title: 'History Vault',
        description:
            'Every summary stacked like a personal genius Rolodex - your secret weapon.',
    },
    {
        icon: HeadPhoneIcon,
        title: 'Priority Support',
        description:
            'Enjoy a seamless experience with fast, dedicated support, ensuring you get the help you need without any delays.',
    },
];

const Features = () => {
    return (
        <section className="px-[18px] pt-10 md:pt-[75px] pb-14 md:pb-[100px]">
            <div className="w-full max-w-[1724px] mx-auto">
                <div className="text-center mb-9 md:mb-14 space-y-3 md:space-y-0">
                    <h2 className="font-semibold text-[35px] md:text-[60px] leading-[45px] md:leading-[110px] tracking-[-2px] text-center">
                        Smart Summaries, <span className="features_heading">Smarter You</span>
                    </h2>
                    <p className="font-medium text-sm md:text-2xl leading-[20px] md:leading-[42px] tracking-[-0.5px]">
                        Sayonara, Sponsor Crap - Here’s How to Body Slam Videos Like a Total Rebel
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="border border-[#00000026] rounded-[20px] py-[50px] px-5 md:px-7 space-y-5 md:space-y-[30px]"
                        >
                            <div className="w-12 md:w-[70px] h-12 md:h-[70px] bg-[#009EFF] rounded-[10px] flex items-center justify-center">
                                <img
                                    src={feature.icon}
                                    alt={`${feature.title.toLowerCase().replace(/\s/g, '_')}_icon`}
                                    loading="lazy"
                                    className="h-5 md:h-auto"
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-medium text-lg md:text-[26px] leading-[26px] md:leading-[37px] tracking-[-1.5%]">
                                    {feature.title}
                                </h3>
                                <p className="text-sm md:text-[22px] leading-[26px] md:leading-[37px] tracking-[-0.5%] text-black/80">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

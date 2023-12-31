const WhyUs = () =>{
    return (
        <div className="container flex flex-col mx-auto items-center p-9">
            <h2 className="text-4xl font-bold text-slate-800 sm:text-5xl md:text-6xl mb-12"> 
            Why Us? 
            </h2>
        <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-0 mb-4">
        {/* icon1 */}
        <div className="col-span-12 sm:col-span-12  md:col-span-6 lg:col-span-4 xl:col-span-4 rounded-[52px] shadow-md mr-5 hover:-translate-y-4 duration-500 ease-in-out hover:bg-slate-100">
            <div className="rounded-bl-md rounded-tl-md w-full relative rounded-[52px]">
                <div className="flex-auto text-center p-8 md:p-14">
                    <img 
                    src="/images/icon-WhyUs/icon1.png"
                    alt="Reliable Information"
                    className="object-cover rounded-[52px] m-auto w-[50px] h-[50px]"
                    />
                    <h2 className="font-bold text-2xl capitalize tracking-wide text-center my-4 text-sky-900">
                        Reliable Information
                    </h2>
                    <div className="border-b border-dashed my-4"></div>
                    <div className="text-base font-medium">
                        <p className="text-slate-800 text-lg font-normal">
                        Provide trustworthy health information to guide better personal lifestyle decisions.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* icon2 */}
        <div className="col-span-12 sm:col-span-12  md:col-span-6 lg:col-span-4 xl:col-span-4 rounded-[52px] shadow-md mr-5 hover:-translate-y-4 duration-500 ease-in-out hover:bg-slate-100">
            <div className="rounded-bl-md rounded-tl-md w-full relative rounded-[52px]">
                <div className="flex-auto text-center p-8 md:p-14">
                    <img 
                    src="/images/icon-WhyUs/icon2.png"
                    alt="Accurate Calculation Tools"
                    className="object-cover rounded-[52px] justify-items-center m-auto w-[50px] h-[50px]"
                    />
                    <h2 className="font-bold text-2xl capitalize tracking-wide text-center my-4 text-sky-900">
                        Accurate Calculation Tools
                    </h2>
                    <div className="border-b border-dashed my-4"></div>
                    <div className="text-base font-medium">
                        <p className="text-slate-800 text-lg font-normal">
                        Offers precise calculation tools to help you achieve ideal health.
                        </p>
                    </div>
                </div>
            </div>
        </div>
            
        {/* icon3 */}
        <div className="col-span-12 sm:col-span-12  md:col-span-6 lg:col-span-4 xl:col-span-4 rounded-[52px] shadow-md mr-5 hover:-translate-y-4 duration-500 ease-in-out hover:bg-slate-100">
            <div className="rounded-bl-md rounded-tl-md w-full relative rounded-[52px]">
                <div className="flex-auto text-center p-8 md:p-14">
                    <img 
                    src="/images/icon-WhyUs/icon3.png"
                    alt="Personal Support"
                    className="object-cover rounded-[52px] justify-items-center m-auto w-[50px] h-[50px]"
                    />
                    <h2 className="font-bold text-2xl capitalize tracking-wide text-center my-4 text-sky-900">
                        Personal Support
                    </h2>
                    <div className="border-b border-dashed my-4"></div>
                    <div className="text-base font-medium">
                        <p className="text-slate-800 text-lg font-normal">
                        Provide personal guidance and support without the need for a formal community, helping individuals achieve their health goals on a personal level.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default WhyUs;
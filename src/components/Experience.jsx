function Experience () {
    return (
        <section className="relative w-full overflow-visible">
            {/* SAP Labs Section */}
            <div className="relative overflow-visible">
                {/* Vertical line for SAP Labs only */}
                <div className="absolute top-2 bottom-0 w-[1px] outline-1 outline-dashed"></div>

                {/* Developer */}
                <div className="grid grid-cols-[1fr_3fr] gap-0">
                    <div className="relative flex flex-col text-left ml-4">
                        <p> May '24 - Apr '25 </p>
                        <p className="mt-2 text-sm"> SAP Labs </p>
                    </div>
                    <div className="flex flex-col items-start text-left">
                        <h3 className="font-bold"> Software Developer | SAP Labs </h3>
                        <p className="text-sm"> 
                            I did this and that and this and that and this and that. 
                            I did this and that and this and that and this and that. 
                            I did this and that and this and that and this and that.
                        </p>
                        <br />
                        <div className="flex">
                            <p className="pl-2 pr-2 border text-sm border-amber-500 rounded-full h-6"> JavaScript </p>
                            <p className="ml-1.5 mr-1.5 pl-2 pr-2 border text-sm border-amber-500 rounded-full h-6"> Java </p>
                            <p className="mr-1.5 pl-2 pr-2 border text-sm border-amber-500 rounded-full h-6"> React </p>
                            <p className="mr-1.5 pl-2 pr-2 border text-sm border-amber-500 rounded-full h-6"> Spring Boot </p>
                        </div>
                    </div>
                </div>
                {/* Associate Developer */}
                <div className="mt-5 grid grid-cols-[1fr_3fr] gap-0">
                    <div className="relative flex text-left ml-2">
                        <p className="ml-2"> May '24 - Apr '25 </p>
                    </div>
                    <div className="flex flex-col items-start text-left">
                        <h3 className="font-bold"> Software Developer </h3>
                        <p className="text-sm"> 
                            I did this and that and this and that and this and that. 
                            I did this and that and this and that and this and that. 
                            I did this and that and this and that and this and that.
                        </p>
                        <br />
                        <div className="flex">
                            <p className="pl-2 pr-2 border text-sm border-amber-500 rounded-full h-6"> JavaScript </p>
                            <p className="ml-1.5 mr-1.5 pl-2 pr-2 border text-sm border-amber-500 rounded-full h-6"> Java </p>
                            <p className="mr-1.5 pl-2 pr-2 border text-sm border-amber-500 rounded-full h-6"> React </p>
                            <p className="mr-1.5 pl-2 pr-2 border text-sm border-amber-500 rounded-full h-6"> Spring Boot </p>
                        </div>
                    </div>
                </div>
                {/* Scholar */}
                <div className="mt-5 grid grid-cols-[1fr_3fr] gap-0">
                    <div className="relative flex text-left ml-2">
                        <p className="ml-2"> May '24 - Apr '25 </p>
                    </div>
                    <div className="flex flex-col items-start text-left">
                        <h3 className="font-bold"> Software Developer </h3>
                        <p className="text-sm"> 
                            I did this and that and this and that and this and that. 
                            I did this and that and this and that and this and that. 
                            I did this and that and this and that and this and that.
                        </p>
                        <br />
                        <div className="flex">
                            <p className="pl-2 pr-2 border text-sm border-amber-500 rounded-full h-6"> JavaScript </p>
                            <p className="ml-1.5 mr-1.5 pl-2 pr-2 border text-sm border-amber-500 rounded-full h-6"> Java </p>
                            <p className="mr-1.5 pl-2 pr-2 border text-sm border-amber-500 rounded-full h-6"> React </p>
                            <p className="mr-1.5 pl-2 pr-2 border text-sm border-amber-500 rounded-full h-6"> Spring Boot </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Minion Labs Section - No vertical line here */}
            <div className="mt-5">
                <div className="grid grid-cols-[1fr_3fr] gap-0">
                    <div className="relative flex text-left ml-2 mt-7">
                        <p className="ml-2"> May '24 - Apr '25 </p>
                    </div>
                    <div className="flex flex-col items-start text-left mt-7">
                        <h3 className="font-bold"> Software Developer </h3>
                        <p className="text-sm"> 
                            I did this and that and this and that and this and that. 
                            I did this and that and this and that and this and that. 
                            I did this and that and this and that and this and that.
                        </p>
                        <br />
                        <div className="flex">
                            <p className="pl-2 pr-2 border text-sm border-amber-500 rounded-full h-6"> JavaScript </p>
                            <p className="ml-1.5 mr-1.5 pl-2 pr-2 border text-sm border-amber-500 rounded-full h-6"> Java </p>
                            <p className="mr-1.5 pl-2 pr-2 border text-sm border-amber-500 rounded-full h-6"> React </p>
                            <p className="mr-1.5 pl-2 pr-2 border text-sm border-amber-500 rounded-full h-6"> Spring Boot </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;
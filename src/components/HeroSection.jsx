

export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-wxl mx-auto text-center z-10">
                <div className="spcae-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Mikey</span>
                        <span className="opacity-0 animate-fade-in-delay-2"> Brescher.</span>
                    </h1>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className=" opacity-0 text-primary-foreground animate-fade-in-delay-3"> I make games.</span>
                    </h1>

                    <p>

                    </p>

                </div>

            </div>
        </section>
    )
}
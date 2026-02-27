

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Up-and-Coming Game Developer with an 
                            <a 
                                href="https://josiahmatriarch.itch.io/" 
                                className="text-primary-foreground/80 hover:text-primary transition-colors duration-300"
                            >ITCH </a>
                            to learn
                        </h3>

                        <p className="text-muted-foreground">
                            Experienced in both Unity and Unreal game engines, I've been obsessed with art, stories, and programming for most 
                            of my life. NPC AI, Systems programming, and Environmental design have become my bread and butter over the last 5 years,
                            channeling my creative passions to create fun, atmospheric, and optimized experiences.
                        </p>

                        <p className="text-muted-foreground">
                            Experienced in both Unity and Unreal game engines, I've been obsessed with art, stories, and programming for most 
                            of my life. NPC AI, Systems programming, and Environmental design have become my bread and butter over the last 5 years,
                            channeling my creative passions to create fun, atmospheric, and optimized experiences.
                        </p>

                    </div>
                    {/* Right Column */}
                    <div>

                    </div>
                </div>

            </div>
        </section>
    )
}
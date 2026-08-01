export function Desktop() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#080b18]">
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(76,29,149,0.38),transparent_38%),linear-gradient(145deg,#030515_0%,#09052a_48%,#02030d_100%)]"
            />

            <div className="relative z-10 flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <p className="mb-2 text-sm tracking-[0.35em] text-slate-400 uppercase">
                        Portfolio Operating System
                    </p>

                    <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
                        OlmosOS
                    </h1>

                    <p className="mt-2 text-xl text-slate-300 md:text-2xl">
                        Enterprise 8
                    </p>

                    <p className="mt-6 text-sm text-slate-400 md:text-base">
                        Senior Software Engineer
                    </p>
                </div>
            </div>
        </section>
    );
}
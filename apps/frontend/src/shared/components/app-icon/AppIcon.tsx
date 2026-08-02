import type { LucideIcon } from "lucide-react";

import type { AppIconVariant } from "@/core/applications/application.types";

const VARIANT_CLASSES: Record<AppIconVariant, string> = {
    violet:
        "from-violet-400 via-violet-600 to-purple-950 shadow-violet-500/25",
    blue:
        "from-sky-300 via-blue-500 to-blue-950 shadow-blue-500/25",
    amber:
        "from-amber-300 via-amber-600 to-stone-950 shadow-amber-500/25",
    orange:
        "from-orange-300 via-orange-600 to-red-950 shadow-orange-500/25",
    cyan:
        "from-cyan-300 via-cyan-600 to-slate-950 shadow-cyan-500/25",
    indigo:
        "from-indigo-300 via-indigo-600 to-slate-950 shadow-indigo-500/25",
    neutral:
        "from-zinc-500 via-zinc-800 to-black shadow-black/40",
    red:
        "from-red-300 via-red-600 to-red-950 shadow-red-500/25",
    sky:
        "from-sky-200 via-sky-500 to-indigo-950 shadow-sky-500/25",
    emerald:
        "from-emerald-300 via-emerald-600 to-emerald-950 shadow-emerald-500/25",
    slate:
        "from-slate-300 via-slate-600 to-slate-950 shadow-slate-500/25",
};

interface AppIconProps {
    icon: LucideIcon;
    variant: AppIconVariant;
    label: string;
    size?: "dock" | "desktop";
    active?: boolean;
}

export function AppIcon({
    icon: Icon,
    variant,
    label,
    size = "dock",
    active = false,
}: AppIconProps) {
    const isDockSize = size === "dock";

    return (
        <span
            aria-hidden="true"
            className={`
        relative flex shrink-0 items-center justify-center
        overflow-hidden border border-white/20
        bg-gradient-to-br ${VARIANT_CLASSES[variant]}
        shadow-xl
        transition-transform duration-200
        group-hover:-translate-y-0.5 group-hover:scale-105
        ${isDockSize ? "h-11 w-11 rounded-xl" : "h-16 w-16 rounded-2xl"}
        ${active ? "ring-1 ring-violet-300/70" : ""}
      `}
        >
            <span className="absolute inset-x-1 top-1 h-1/3 rounded-full bg-white/20 blur-md" />

            <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

            <Icon
                aria-label={label}
                className="relative z-10 text-white drop-shadow-md"
                size={isDockSize ? 25 : 34}
                strokeWidth={1.9}
            />
        </span>
    );
}

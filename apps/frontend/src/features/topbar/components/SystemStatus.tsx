"use client";

import {
    BatteryFull,
    ChevronDown,
    Network,
    Volume2,
} from "lucide-react";

export function SystemStatus() {
    function handleClick() {
        console.log("System status menu will open here.");
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className="
        flex h-8 items-center gap-3 rounded-md px-2
        text-slate-100
        transition-colors duration-150
        hover:bg-white/10
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-violet-400
      "
            aria-label="Open system status menu"
        >
            <Network aria-hidden="true" size={17} strokeWidth={2} />

            <Volume2 aria-hidden="true" size={17} strokeWidth={2} />

            <div className="flex items-center gap-1">
                <BatteryFull aria-hidden="true" size={18} strokeWidth={2} />

                <span className="hidden text-xs font-medium sm:inline">
                    100%
                </span>
            </div>

            <ChevronDown aria-hidden="true" size={14} />
        </button>
    );
}

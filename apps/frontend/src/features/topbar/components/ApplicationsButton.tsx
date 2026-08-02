"use client";

import { ChevronDown, Shapes } from "lucide-react";

export function ApplicationsButton() {
    function handleClick() {
        console.log("Applications menu will open here.");
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            className="
        flex h-8 items-center gap-2 rounded-md px-2
        text-sm font-medium text-slate-100
        transition-colors duration-150
        hover:bg-white/10
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-violet-400
      "
            aria-label="Open applications menu"
        >
            <Shapes aria-hidden="true" size={17} />

            <span>Applications</span>

            <ChevronDown aria-hidden="true" size={15} />
        </button>
    );
}
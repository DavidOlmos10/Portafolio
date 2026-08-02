"use client";

import type { PortfolioApplication } from "@/core/applications/application.types";
import { AppIcon } from "@/shared/components/app-icon/AppIcon";

interface DockItemProps {
    application: PortfolioApplication;
    active?: boolean;
    onClick: (applicationId: PortfolioApplication["id"]) => void;
}

export function DockItem({
    application,
    active = false,
    onClick,
}: DockItemProps) {
    return (
        <button
            type="button"
            onClick={() => onClick(application.id)}
            aria-label={`Open ${application.name}`}
            className="
        group relative flex h-14 w-14 items-center justify-center
        rounded-xl transition-colors duration-200
        hover:bg-white/[0.06]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-violet-400
      "
        >
            <AppIcon
                icon={application.icon}
                variant={application.iconVariant}
                label={application.name}
                active={active}
            />

            {active && (
                <span
                    aria-hidden="true"
                    className="
            absolute -left-[11px] h-7 w-1
            rounded-r-full bg-violet-400
            shadow-[0_0_12px_rgba(167,139,250,0.9)]
          "
                />
            )}

            <span
                role="tooltip"
                className="
          pointer-events-none absolute left-[66px] z-[100]
          translate-x-0 whitespace-nowrap
          rounded-lg border border-white/10
          bg-[#11121a]/95 px-3 py-2
          text-xs font-medium text-white
          opacity-0 shadow-xl backdrop-blur-md
          transition-all duration-150
          group-hover:translate-x-1 group-hover:opacity-100
        "
            >
                {application.name}
            </span>
        </button>
    );
}

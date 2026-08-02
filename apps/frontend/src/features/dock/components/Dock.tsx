"use client";

import { DOCK_APPLICATIONS } from "@/core/applications/application-registry";
import type { ApplicationId } from "@/core/applications/application.types";

import { DockItem } from "./DockItem";

export function Dock() {
    function handleOpenApplication(applicationId: ApplicationId) {
        console.log(`Opening application: ${applicationId}`);
    }

    const standardApplications = DOCK_APPLICATIONS.filter(
        ({ id }) => id !== "applications",
    );

    const applicationsMenu = DOCK_APPLICATIONS.find(
        ({ id }) => id === "applications",
    );

    return (
        <aside
            aria-label="Application dock"
            className="
        absolute left-3 top-1/2 z-40
        flex max-h-[calc(100dvh-72px)]
        -translate-y-1/2 flex-col items-center gap-1
        rounded-2xl border border-white/10
        bg-black/50 p-2
        shadow-[0_20px_60px_rgba(0,0,0,0.5)]
        backdrop-blur-xl
      "
        >
            {standardApplications.map((application) => (
                <DockItem
                    key={application.id}
                    application={application}
                    active={application.id === "about"}
                    onClick={handleOpenApplication}
                />
            ))}

            <div className="my-1 h-px w-10 bg-white/10" />

            {applicationsMenu && (
                <DockItem
                    application={applicationsMenu}
                    onClick={handleOpenApplication}
                />
            )}
        </aside>
    );
}

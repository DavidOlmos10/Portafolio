import { ApplicationsButton } from "./ApplicationsButton";
import { Clock } from "./Clock";
import { SystemStatus } from "./SystemStatus";

export function TopBar() {
    return (
        <header
            className="
        absolute inset-x-0 top-0 z-50
        grid h-10 grid-cols-3 items-center
        border-b border-white/10
        bg-black/90 px-2
        text-white
        shadow-[0_1px_10px_rgba(0,0,0,0.3)]
        backdrop-blur-md
      "
        >
            <div className="flex justify-start">
                <ApplicationsButton />
            </div>

            <div className="flex justify-center">
                <Clock />
            </div>

            <div className="flex justify-end">
                <SystemStatus />
            </div>
        </header>
    );
}
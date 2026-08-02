"use client";

import { useEffect, useState } from "react";

import { formatDesktopDate } from "../utils/format-date";

export function Clock() {
    const [currentDate, setCurrentDate] = useState<Date | null>(null);

    useEffect(() => {
        setCurrentDate(new Date());

        const intervalId = window.setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            window.clearInterval(intervalId);
        };
    }, []);

    return (
        <time
            className="select-none text-sm font-medium text-slate-100"
            dateTime={currentDate?.toISOString()}
            aria-label="Current date and time"
        >
            {currentDate ? formatDesktopDate(currentDate) : "Loading time..."}
        </time>
    );
}
import React from "react";
import Sidebar from "./_components/sidebar";

function DashbaordLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-full bg-zinc-50 dark:bg-black">
            <Sidebar />
            <main className="flex-1 p-6 flex flex-col">
                {children}
            </main>
        </div>
    );
}


export default DashbaordLayout;
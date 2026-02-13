import React from "react";
import Sidebar from "./_components/sidebar";

function DashbaordLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex bg-zinc-50 dark:bg-black">
            <Sidebar />
            <main className="flex-1 p-10 min-h-screen mt-10">
                {children}
            </main>
        </div>
    );
}

export default DashbaordLayout;
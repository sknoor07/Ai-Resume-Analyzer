import React from "react";

function DashbaordLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div >{children}</div>
        </div>
    );
}

export default DashbaordLayout;
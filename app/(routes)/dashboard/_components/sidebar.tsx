"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import {
    LayoutDashboard,
    Brain,
    History,
    CreditCard,
    User,
    PanelLeftClose,
    PanelLeftOpen,
} from "lucide-react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const menuItems = [
    { name: "Workspace", icon: LayoutDashboard, href: "/dashboard" },
    { name: "AI Tools", icon: Brain, href: "/dashboard/ai-tools" },
    { name: "My History", icon: History, href: "/dashboard/history" },
    { name: "Billing", icon: CreditCard, href: "/dashboard/billing" },
    { name: "Profile", icon: User, href: "/dashboard/profile" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    // Persist state
    useEffect(() => {
        const saved = localStorage.getItem("sidebar-collapsed");
        if (saved) setCollapsed(saved === "true");
    }, []);

    useEffect(() => {
        localStorage.setItem("sidebar-collapsed", String(collapsed));
    }, [collapsed]);

    return (
        <TooltipProvider delayDuration={100}>
            <motion.aside
                animate={{ width: collapsed ? 80 : 260 }}
                transition={{ duration: 0.25 }}
                className="h-screen sticky top-0 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border-r flex flex-col"
            >
                {/* Logo Section */}
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-6">
                        <div className="w-8 h-8 bg-[#6c47ff] rounded-lg flex items-center justify-center text-white font-bold">
                            AI
                        </div>
                        {!collapsed && (
                            <span className="font-semibold text-lg tracking-tight">
                                ResumeAI
                            </span>
                        )}
                    </div>

                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                    >
                        {collapsed ? (
                            <PanelLeftOpen size={18} />
                        ) : (
                            <PanelLeftClose size={18} />
                        )}
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3 mt-6 space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        const content = (
                            <Link href={item.href}>
                                <div
                                    className={clsx(
                                        "flex items-center gap-6 px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer",
                                        isActive
                                            ? "bg-linear-to-r from-[#6c47ff]/10 to-purple-500/10 text-[#6c47ff]"
                                            : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                    )}
                                >
                                    <Icon size={24} />
                                    {!collapsed && (
                                        <span className="text-lg font-medium">
                                            {item.name}
                                        </span>
                                    )}
                                </div>
                            </Link>
                        );

                        return collapsed ? (
                            <Tooltip key={item.name}>
                                <TooltipTrigger asChild>{content}</TooltipTrigger>
                                <TooltipContent side="right">
                                    {item.name}
                                </TooltipContent>
                            </Tooltip>
                        ) : (
                            <div key={item.name}>{content}</div>
                        );
                    })}
                </nav>

                {/* Bottom subtle branding */}
                {!collapsed && (
                    <div className="p-4 text-xs text-zinc-400">
                        © 2026 ResumeAI
                    </div>
                )}
            </motion.aside>
        </TooltipProvider>
    );
}

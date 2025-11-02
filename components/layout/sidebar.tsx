"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  DollarSign,
  Settings,
  User,
  Menu,
  X,
} from "lucide-react";
import { useLanguage } from "@/app/providers/language-provider";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface SidebarItem {
  icon: React.ElementType;
  label: string;
  href: string;
  key: string;
}

interface SidebarContentProps {
  menuItems: SidebarItem[];
  pathname: string;
  onClose: () => void;
}

function SidebarContent({ menuItems, pathname, onClose }: SidebarContentProps) {
  const { t } = useLanguage();
  
  return (
    <>
      <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6">
        <h1 className="text-xl font-bold text-gray-900">
          {t("common", "appName")}
        </h1>
        <button
          onClick={onClose}
          className="lg:hidden"
          aria-label="Close sidebar"
        >
          <X className="h-6 w-6 text-gray-700" />
        </button>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.key}
              href={item.href}
              onClick={onClose}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems: SidebarItem[] = [
    {
      icon: LayoutDashboard,
      label: t("sidebar", "dashboard"),
      href: "/dashboard",
      key: "dashboard",
    },
    {
      icon: Package,
      label: t("sidebar", "products"),
      href: "/dashboard/products",
      key: "products",
    },
    {
      icon: ShoppingCart,
      label: t("sidebar", "orders"),
      href: "/dashboard/orders",
      key: "orders",
    },
    {
      icon: Users,
      label: t("sidebar", "customers"),
      href: "/dashboard/customers",
      key: "customers",
    },
    {
      icon: BarChart3,
      label: t("sidebar", "analytics"),
      href: "/dashboard/analytics",
      key: "analytics",
    },
    {
      icon: DollarSign,
      label: t("sidebar", "revenue"),
      href: "/dashboard/revenue",
      key: "revenue",
    },
    {
      icon: Settings,
      label: t("sidebar", "settings"),
      href: "/dashboard/settings",
      key: "settings",
    },
    {
      icon: User,
      label: t("sidebar", "profile"),
      href: "/dashboard/profile",
      key: "profile",
    },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="fixed left-3 top-3 z-50 lg:hidden bg-white rounded-lg shadow-md p-2 border border-gray-200 hover:bg-gray-50 transition-colors"
        aria-label="Open sidebar"
      >
        <Menu className="h-5 w-5 text-gray-700" />
      </button>

      {/* Desktop sidebar */}
      <aside className="hidden h-screen w-64 flex-col border-r border-gray-200 bg-white lg:flex lg:fixed">
        <SidebarContent 
          menuItems={menuItems}
          pathname={pathname}
          onClose={() => setIsMobileOpen(false)}
        />
      </aside>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 z-50 h-screen w-64 flex-col border-r border-gray-200 bg-white lg:hidden"
            >
              <SidebarContent 
                menuItems={menuItems}
                pathname={pathname}
                onClose={() => setIsMobileOpen(false)}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


"use client";

import { Search, Bell, User as UserIcon, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { useLanguage } from "@/app/providers/language-provider";
import { useAuth } from "@/app/providers/auth-provider";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Navbar() {
  const { t } = useLanguage();
  const { logout, user } = useAuth();
  const router = useRouter();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node)
      ) {
        setNotificationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    { id: "1", message: "New order #ORD-123 received", time: "2 minutes ago" },
    { id: "2", message: "Product stock low: Wireless Mouse", time: "1 hour ago" },
    { id: "3", message: "Customer John Doe left a review", time: "Yesterday" },
  ];

  return (
    <nav className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex flex-1 items-center gap-2 sm:gap-4 px-3 sm:px-4 lg:px-6 w-full">
        {/* Mobile: Logo/Title */}
        <div className="flex items-center sm:hidden min-w-0 flex-1">
          <Link href="/dashboard" className="block">
            <h1 className="text-base font-bold text-gray-900 ml-11 truncate hover:text-blue-600 transition-colors cursor-pointer">
              {t("common", "appName")}
            </h1>
          </Link>
        </div>

        {/* Search - Shown on tablet and up */}
        <div className="hidden sm:block relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder={t("common", "searchPlaceholder")}
            className="pl-10 h-9 sm:h-10"
          />
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-1 sm:gap-2 ml-auto">
          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative h-9 w-9 sm:h-10 sm:w-10"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
              <Badge
                variant="destructive"
                className="absolute -right-0.5 -top-0.5 h-4 w-4 sm:h-5 sm:w-5 p-0 text-[10px] sm:text-xs flex items-center justify-center"
              >
                3
              </Badge>
            </Button>
            <AnimatePresence>
              {notificationsOpen && (
                <>
                  {/* Mobile overlay */}
                  <div
                    className="fixed inset-0 z-40 bg-black/20 sm:hidden"
                    onClick={() => setNotificationsOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 sm:right-0 top-12 sm:top-12 z-50 w-[calc(100vw-2rem)] sm:w-80 max-w-sm rounded-lg border border-gray-200 bg-white shadow-xl"
                  >
                    <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                      <h3 className="font-semibold text-sm sm:text-base">{t("common", "notifications")}</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {}}
                        className="text-xs h-7 px-2"
                      >
                        {t("common", "markAllAsRead")}
                      </Button>
                    </div>
                    <div className="max-h-[60vh] sm:max-h-96 overflow-y-auto">
                      {notifications.map((notif) => (
                        <Link
                          key={notif.id}
                          href="/dashboard/orders"
                          className="block border-b border-gray-200 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                          onClick={() => setNotificationsOpen(false)}
                        >
                          <p className="text-sm text-gray-900 leading-snug">
                            {notif.message}
                          </p>
                          <p className="mt-1 text-xs text-gray-500">
                            {notif.time}
                          </p>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 px-4 py-3">
                      <Link href="/dashboard/orders" className="block">
                        <Button 
                          variant="ghost" 
                          className="w-full text-sm h-9"
                          onClick={() => setNotificationsOpen(false)}
                        >
                          {t("common", "viewAll")}
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* User Menu */}
          <div className="relative" ref={userMenuRef}>
            <Button
              variant="ghost"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-1 sm:gap-2 h-9 sm:h-10 px-2 sm:px-3"
            >
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <UserIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
              </div>
              <span className="hidden md:block text-gray-900 text-sm font-medium">{user?.username || "Admin User"}</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform text-gray-700 flex-shrink-0",
                  userMenuOpen && "rotate-180"
                )}
              />
            </Button>
            <AnimatePresence>
              {userMenuOpen && (
                <>
                  {/* Mobile overlay */}
                  <div
                    className="fixed inset-0 z-40 bg-black/20 sm:hidden"
                    onClick={() => setUserMenuOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 sm:right-0 top-12 sm:top-12 z-50 w-48 sm:w-48 rounded-lg border border-gray-200 bg-white shadow-xl"
                  >
                    <div className="p-2">
                      <div className="px-2 py-1.5 text-sm">
                        <p className="font-medium text-gray-900">{user?.username || "Admin User"}</p>
                        <p className="text-xs text-gray-500">admin@example.com</p>
                      </div>
                      <div className="my-1 h-px bg-gray-200" />
                      <Link href="/dashboard/profile" className="block">
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-sm h-9"
                          onClick={() => {
                            setUserMenuOpen(false);
                          }}
                        >
                          {t("common", "profile")}
                        </Button>
                      </Link>
                      <Link href="/dashboard/settings" className="block">
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-sm h-9"
                          onClick={() => {
                            setUserMenuOpen(false);
                          }}
                        >
                          {t("common", "settings")}
                        </Button>
                      </Link>
                      <div className="my-1 h-px bg-gray-200" />
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm text-red-600 hover:text-red-700 h-9"
                        onClick={() => {
                          logout();
                        }}
                      >
                        {t("common", "logout")}
                      </Button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}


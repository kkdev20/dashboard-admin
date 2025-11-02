"use client";

import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import { motion } from "framer-motion";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      <Sidebar />
      <div className="flex-1 lg:ml-64 relative">
        <Navbar />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-4 lg:p-6 relative"
        >
          {children}
        </motion.main>
        
        {/* Watermark */}
        <div className="fixed bottom-6 right-6 text-sm font-semibold text-gray-400 opacity-30 pointer-events-none z-10">
          wistack.site
        </div>
      </div>
    </div>
  );
}


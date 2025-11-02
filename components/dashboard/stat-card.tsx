"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  delay?: number;
}

export function StatCard({ title, value, change, icon, delay = 0 }: StatCardProps) {
  const [count, setCount] = useState(0);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    const interval = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [numericValue]);

  const displayValue = value.includes("$")
    ? `$${count.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    : value.includes("+")
    ? `+${Math.floor(count).toLocaleString()}`
    : Math.floor(count).toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Card className="cursor-pointer transition-shadow duration-200 hover:shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-600">
                {title}
              </p>
              <p className="mt-2 text-2xl font-bold text-gray-900">
                {displayValue}
              </p>
              <p className="mt-1 text-xs text-green-600">
                {change}
              </p>
            </div>
            <div className="rounded-full bg-blue-50 p-3">
              {icon}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}


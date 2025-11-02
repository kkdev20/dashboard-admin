"use client";

import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { revenueData } from "@/lib/data/mockData";

export default function RevenuePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Revenue
        </h1>
      </div>
      <RevenueChart
        data={revenueData}
        title="Revenue Overview"
        subtitle="Monthly revenue analysis"
        legend="Revenue"
      />
    </div>
  );
}


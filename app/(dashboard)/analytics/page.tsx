"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { SalesChart } from "@/components/dashboard/sales-chart";
import { revenueData, salesByCategory } from "@/lib/data/mockData";
import { Button } from "@/components/ui/button";

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("30");

  const timeRanges = [
    { value: "1", label: "Today" },
    { value: "7", label: "7 Days" },
    { value: "30", label: "30 Days" },
    { value: "90", label: "90 Days" },
    { value: "custom", label: "Custom" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Analytics & Reports
          </h1>
        </div>
        <div className="flex items-center gap-2">
          {timeRanges.map((range) => (
            <Button
              key={range.value}
              variant={timeRange === range.value ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeRange(range.value)}
            >
              {range.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <RevenueChart
          data={revenueData}
          title="Revenue Trend"
          subtitle="Revenue over time"
          legend="Revenue"
        />
        <SalesChart data={salesByCategory} title="Sales by Category" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Additional Analytics</CardTitle>
          <CardDescription>
            More detailed analytics and insights will be available here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-4">
              <div className="text-sm text-gray-500">
                Conversion Rate
              </div>
              <div className="mt-2 text-2xl font-bold">3.2%</div>
              <div className="mt-1 text-xs text-green-600">
                +0.5% from last period
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <div className="text-sm text-gray-500">
                Average Order Value
              </div>
              <div className="mt-2 text-2xl font-bold">$124.50</div>
              <div className="mt-1 text-xs text-green-600">
                +$12.30 from last period
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 p-4">
              <div className="text-sm text-gray-500">
                Customer Lifetime Value
              </div>
              <div className="mt-2 text-2xl font-bold">$1,245</div>
              <div className="mt-1 text-xs text-green-600">
                +$98 from last period
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


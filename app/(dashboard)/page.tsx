"use client";

import { StatCard } from "@/components/dashboard/stat-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { SalesChart } from "@/components/dashboard/sales-chart";
import { RecentOrders } from "@/components/dashboard/recent-orders";
import { TopProducts } from "@/components/dashboard/top-products";
import { useLanguage } from "@/app/providers/language-provider";
import { DollarSign, ShoppingCart, Users, Package } from "lucide-react";
import {
  revenueData,
  salesByCategory,
  mockOrders,
  topProducts,
} from "@/lib/data/mockData";

export default function DashboardPage() {
  const { t } = useLanguage();

  const recentOrdersData = mockOrders.slice(0, 5).map((order) => ({
    orderId: order.orderId,
    customerName: order.customerName,
    products: order.products.map((p) => p.name).join(", "),
    amount: order.totalAmount,
    status: order.orderStatus,
    date: order.date,
  }));

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title={t("dashboard", "stats.revenue")}
          value="$45,231.89"
          change={`+20.1% ${t("dashboard", "changeFromLastMonth")}`}
          icon={<DollarSign className="h-6 w-6 text-blue-600" />}
          delay={0}
        />
        <StatCard
          title={t("dashboard", "stats.orders")}
          value="+2350"
          change={`+180.1% ${t("dashboard", "changeFromLastMonth")}`}
          icon={<ShoppingCart className="h-6 w-6 text-blue-600" />}
          delay={0.1}
        />
        <StatCard
          title={t("dashboard", "stats.customers")}
          value="+12,234"
          change={`+19% ${t("dashboard", "changeFromLastMonth")}`}
          icon={<Users className="h-6 w-6 text-blue-600" />}
          delay={0.2}
        />
        <StatCard
          title={t("dashboard", "stats.products")}
          value="573"
          change={`+201 ${t("dashboard", "changeSinceLastHour")}`}
          icon={<Package className="h-6 w-6 text-blue-600" />}
          delay={0.3}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        <RevenueChart
          data={revenueData}
          title={t("dashboard", "charts.revenue")}
          subtitle={t("dashboard", "charts.revenueSubtitle")}
          legend={t("dashboard", "charts.revenueLegend")}
        />
        <SalesChart
          data={salesByCategory}
          title={t("dashboard", "charts.sales")}
        />
      </div>

      {/* Tables Grid */}
      <div className="grid gap-4 lg:grid-cols-2">
        <RecentOrders
          orders={recentOrdersData}
          title={t("dashboard", "recentOrders")}
          viewAllLabel={t("common", "viewAll")}
        />
        <TopProducts
          products={topProducts}
          title={t("dashboard", "topProducts")}
          salesLabel={t("dashboard", "salesCount")}
          viewDetailsLabel={t("dashboard", "viewDetails")}
        />
      </div>
    </div>
  );
}


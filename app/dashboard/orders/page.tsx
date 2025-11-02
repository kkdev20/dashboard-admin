"use client";

import { useState } from "react";
import { useLanguage } from "@/app/providers/language-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockOrders } from "@/lib/data/mockData";
import { formatCurrency, formatDate } from "@/lib/utils";
import { Eye, FileText } from "lucide-react";

export default function OrdersPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");
  const [orders] = useState(mockOrders);

  const filteredOrders =
    activeTab === "all"
      ? orders
      : orders.filter((order) => order.orderStatus === activeTab);

  const getOrderStatusBadge = (status: string) => {
    const variants: Record<string, "success" | "warning" | "info" | "destructive"> = {
      completed: "success",
      processing: "warning",
      shipped: "info",
      pending: "warning",
      cancelled: "destructive",
    };
    return (
      <Badge variant={variants[status] || "default"}>
        {t("common", status)}
      </Badge>
    );
  };

  const getPaymentStatusBadge = (status: string) => {
    const variants: Record<string, "success" | "destructive" | "warning"> = {
      paid: "success",
      unpaid: "warning",
      refunded: "destructive",
    };
    return (
      <Badge variant={variants[status] || "default"}>
        {t("orders", `statuses.${status}`)}
      </Badge>
    );
  };

  const tabs = [
    { id: "all", label: t("orders", "tabs.all") },
    { id: "pending", label: t("orders", "tabs.pending") },
    { id: "processing", label: t("orders", "tabs.processing") },
    { id: "completed", label: t("orders", "tabs.completed") },
    { id: "cancelled", label: t("orders", "tabs.cancelled") },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          {t("orders", "title")}
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Orders</CardTitle>
          <CardDescription>
            {filteredOrders.length} {t("common", "total").toLowerCase()} orders
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("orders", "table.orderId")}</TableHead>
                <TableHead>{t("orders", "table.customer")}</TableHead>
                <TableHead>{t("orders", "table.products")}</TableHead>
                <TableHead>{t("orders", "table.totalAmount")}</TableHead>
                <TableHead>{t("orders", "table.paymentStatus")}</TableHead>
                <TableHead>{t("orders", "table.orderStatus")}</TableHead>
                <TableHead>{t("orders", "table.date")}</TableHead>
                <TableHead>{t("orders", "table.actions")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.orderId}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{order.customerName}</div>
                      <div className="text-sm text-gray-500">
                        {order.customerEmail}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {order.products.length} {t("common", "quantity")}
                  </TableCell>
                  <TableCell>{formatCurrency(order.totalAmount)}</TableCell>
                  <TableCell>{getPaymentStatusBadge(order.paymentStatus)}</TableCell>
                  <TableCell>{getOrderStatusBadge(order.orderStatus)}</TableCell>
                  <TableCell>{formatDate(order.date)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}


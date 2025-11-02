"use client";

import {
  Card,
  CardContent,
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
import { formatCurrency } from "@/lib/utils";

interface Order {
  orderId: string;
  customerName: string;
  products: string;
  amount: number;
  status: "completed" | "processing" | "shipped" | "cancelled" | "pending";
  date: string;
}

interface RecentOrdersProps {
  orders: Order[];
  title: string;
  viewAllLabel: string;
}

export function RecentOrders({ orders, title, viewAllLabel }: RecentOrdersProps) {
  const getStatusBadge = (status: string) => {
    const variants: Record<string, "success" | "warning" | "info" | "destructive"> = {
      completed: "success",
      processing: "warning",
      shipped: "info",
      cancelled: "destructive",
      pending: "warning",
    };
    return variants[status] || "default";
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      completed: "Completed",
      processing: "Processing",
      shipped: "Shipped",
      cancelled: "Cancelled",
      pending: "Pending",
    };
    return labels[status] || status;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
        </div>
        <Button variant="outline" size="sm">
          {viewAllLabel}
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow
                key={order.orderId}
              >
                <TableCell className="font-medium">{order.orderId}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>{order.products}</TableCell>
                <TableCell>{formatCurrency(order.amount)}</TableCell>
                <TableCell>
                  <Badge variant={getStatusBadge(order.status)}>
                    {getStatusLabel(order.status)}
                  </Badge>
                </TableCell>
                <TableCell>{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}


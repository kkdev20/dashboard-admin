"use client";

import { useState } from "react";
import { useLanguage } from "@/app/providers/language-provider";
import { StatCard } from "@/components/dashboard/stat-card";
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
import { Button } from "@/components/ui/button";
import { mockCustomers } from "@/lib/data/mockData";
import { formatCurrency, formatDate } from "@/lib/utils";
import { Users, Mail, Ban, Eye } from "lucide-react";

export default function CustomersPage() {
  const { t } = useLanguage();
  const [customers] = useState(mockCustomers);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          {t("customers", "title")}
        </h1>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title={t("customers", "stats.total")}
          value={customers.length.toString()}
          change="+12% from last month"
          icon={<Users className="h-6 w-6 text-blue-600" />}
        />
        <StatCard
          title={t("customers", "stats.activeThisMonth")}
          value="342"
          change="+8% from last month"
          icon={<Users className="h-6 w-6 text-blue-600" />}
        />
        <StatCard
          title={t("customers", "stats.newSignups")}
          value="+89"
          change="+15% from last month"
          icon={<Users className="h-6 w-6 text-blue-600" />}
        />
        <StatCard
          title={t("customers", "stats.retentionRate")}
          value="87%"
          change="+2% from last month"
          icon={<Users className="h-6 w-6 text-blue-600" />}
        />
      </div>

      {/* Customers Table */}
      <Card>
        <CardHeader>
          <CardTitle>Customers</CardTitle>
          <CardDescription>
            {customers.length} {t("customers", "stats.total").toLowerCase()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("customers", "table.avatar")}</TableHead>
                <TableHead>{t("customers", "table.name")}</TableHead>
                <TableHead>{t("customers", "table.email")}</TableHead>
                <TableHead>{t("customers", "table.phone")}</TableHead>
                <TableHead>{t("customers", "table.totalOrders")}</TableHead>
                <TableHead>{t("customers", "table.totalSpent")}</TableHead>
                <TableHead>{t("customers", "table.joinDate")}</TableHead>
                <TableHead>{t("customers", "table.actions")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                      {customer.name.charAt(0)}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.totalOrders}</TableCell>
                  <TableCell>{formatCurrency(customer.totalSpent)}</TableCell>
                  <TableCell>{formatDate(customer.joinDate)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Ban className="h-4 w-4 text-red-600" />
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


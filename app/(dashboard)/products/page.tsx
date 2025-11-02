"use client";

import { useState } from "react";
import { useLanguage } from "@/app/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Plus, Search, Edit, Trash2, Copy } from "lucide-react";
import { mockProducts } from "@/lib/data/mockData";
import { formatCurrency } from "@/lib/utils";

export default function ProductsPage() {
  const { t } = useLanguage();
  const [products] = useState(mockProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;
    const matchesStatus =
      statusFilter === "all" || product.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="success">{t("common", "active")}</Badge>;
      case "outOfStock":
        return <Badge variant="destructive">{t("products", "outOfStock")}</Badge>;
      case "draft":
        return <Badge variant="secondary">{t("common", "draft")}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {t("products", "title")}
          </h1>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          {t("products", "addNew")}
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>{t("common", "filter")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder={t("products", "searchPlaceholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="h-10 rounded-md border border-gray-300 bg-white px-3 text-sm"
            >
              <option value="all">{t("products", "categories.all")}</option>
              <option value="Electronics">{t("products", "categories.electronics")}</option>
              <option value="Fashion">{t("products", "categories.fashion")}</option>
              <option value="Home & Garden">{t("products", "categories.home")}</option>
              <option value="Sports">{t("products", "categories.sports")}</option>
              <option value="Books">{t("products", "categories.books")}</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-10 rounded-md border border-gray-300 bg-white px-3 text-sm"
            >
              <option value="all">{t("products", "statuses.all")}</option>
              <option value="active">{t("products", "statuses.active")}</option>
              <option value="outOfStock">{t("products", "statuses.outOfStock")}</option>
              <option value="draft">{t("products", "statuses.draft")}</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            {filteredProducts.length} {t("common", "total").toLowerCase()} products
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("products", "table.image")}</TableHead>
                <TableHead>{t("products", "table.productName")}</TableHead>
                <TableHead>{t("products", "table.sku")}</TableHead>
                <TableHead>{t("products", "table.category")}</TableHead>
                <TableHead>{t("products", "table.price")}</TableHead>
                <TableHead>{t("products", "table.stock")}</TableHead>
                <TableHead>{t("products", "table.status")}</TableHead>
                <TableHead>{t("products", "table.actions")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="h-12 w-12 rounded-lg bg-gray-100" />
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.sku}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{getStatusBadge(product.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-red-600" />
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


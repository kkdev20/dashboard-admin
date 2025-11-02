"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  category: string;
  sales: number;
  revenue: number;
  image: string;
  percentage: number;
}

interface TopProductsProps {
  products: Product[];
  title: string;
  salesLabel: string;
  viewDetailsLabel: string;
}

export function TopProducts({
  products,
  title,
  salesLabel,
  viewDetailsLabel,
}: TopProductsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md"
          >
            <div className="h-16 w-16 flex-shrink-0 rounded-lg bg-gray-100" />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">
                {product.name}
              </h4>
              <p className="text-sm text-gray-500">
                {product.category}
              </p>
              <div className="mt-2">
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    {salesLabel}: {product.sales.toLocaleString()}
                  </span>
                  <span className="font-medium text-gray-900">
                    {formatCurrency(product.revenue)}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${product.percentage}%` }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm">
              {viewDetailsLabel}
            </Button>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}


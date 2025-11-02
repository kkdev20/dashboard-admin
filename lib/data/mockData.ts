export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  status: "active" | "outOfStock" | "draft";
  image: string;
  description: string;
  createdAt: string;
}

export interface Order {
  id: string;
  orderId: string;
  customerName: string;
  customerEmail: string;
  products: { name: string; quantity: number }[];
  totalAmount: number;
  paymentStatus: "paid" | "unpaid" | "refunded";
  orderStatus: "pending" | "processing" | "shipped" | "completed" | "cancelled";
  date: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  totalOrders: number;
  totalSpent: number;
  joinDate: string;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    sku: "WH-001",
    category: "Electronics",
    price: 129.99,
    stock: 45,
    status: "active",
    image: "/api/placeholder/64/64",
    description: "High-quality wireless headphones",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Running Shoes",
    sku: "RS-002",
    category: "Sports",
    price: 89.50,
    stock: 120,
    status: "active",
    image: "/api/placeholder/64/64",
    description: "Comfortable running shoes",
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    name: "Coffee Maker",
    sku: "CM-003",
    category: "Home & Garden",
    price: 149.00,
    stock: 0,
    status: "outOfStock",
    image: "/api/placeholder/64/64",
    description: "Premium coffee maker",
    createdAt: "2024-01-05",
  },
  {
    id: "4",
    name: "Smart Watch",
    sku: "SW-004",
    category: "Electronics",
    price: 299.99,
    stock: 30,
    status: "active",
    image: "/api/placeholder/64/64",
    description: "Feature-rich smart watch",
    createdAt: "2024-01-12",
  },
  {
    id: "5",
    name: "Leather Jacket",
    sku: "LJ-005",
    category: "Fashion",
    price: 199.99,
    stock: 15,
    status: "active",
    image: "/api/placeholder/64/64",
    description: "Classic leather jacket",
    createdAt: "2024-01-08",
  },
  {
    id: "6",
    name: "Yoga Mat",
    sku: "YM-006",
    category: "Sports",
    price: 29.99,
    stock: 200,
    status: "active",
    image: "/api/placeholder/64/64",
    description: "Eco-friendly yoga mat",
    createdAt: "2024-01-14",
  },
  {
    id: "7",
    name: "Cookbook Collection",
    sku: "CB-007",
    category: "Books",
    price: 49.99,
    stock: 50,
    status: "active",
    image: "/api/placeholder/64/64",
    description: "Complete cookbook set",
    createdAt: "2024-01-11",
  },
  {
    id: "8",
    name: "Garden Tools Set",
    sku: "GT-008",
    category: "Home & Garden",
    price: 79.99,
    stock: 25,
    status: "active",
    image: "/api/placeholder/64/64",
    description: "Professional garden tools",
    createdAt: "2024-01-09",
  },
];

export const mockOrders: Order[] = [
  {
    id: "1",
    orderId: "ORD-001",
    customerName: "John Doe",
    customerEmail: "john@example.com",
    products: [{ name: "Wireless Headphones", quantity: 1 }],
    totalAmount: 129.99,
    paymentStatus: "paid",
    orderStatus: "completed",
    date: "2024-01-15",
  },
  {
    id: "2",
    orderId: "ORD-002",
    customerName: "Jane Smith",
    customerEmail: "jane@example.com",
    products: [{ name: "Running Shoes", quantity: 1 }],
    totalAmount: 89.50,
    paymentStatus: "paid",
    orderStatus: "processing",
    date: "2024-01-15",
  },
  {
    id: "3",
    orderId: "ORD-003",
    customerName: "Mike Johnson",
    customerEmail: "mike@example.com",
    products: [{ name: "Coffee Maker", quantity: 1 }],
    totalAmount: 149.00,
    paymentStatus: "paid",
    orderStatus: "shipped",
    date: "2024-01-14",
  },
  {
    id: "4",
    orderId: "ORD-004",
    customerName: "Sarah Williams",
    customerEmail: "sarah@example.com",
    products: [{ name: "Smart Watch", quantity: 1 }, { name: "Wireless Headphones", quantity: 1 }],
    totalAmount: 429.98,
    paymentStatus: "paid",
    orderStatus: "completed",
    date: "2024-01-13",
  },
  {
    id: "5",
    orderId: "ORD-005",
    customerName: "David Brown",
    customerEmail: "david@example.com",
    products: [{ name: "Leather Jacket", quantity: 1 }],
    totalAmount: 199.99,
    paymentStatus: "unpaid",
    orderStatus: "pending",
    date: "2024-01-12",
  },
  {
    id: "6",
    orderId: "ORD-006",
    customerName: "Emily Davis",
    customerEmail: "emily@example.com",
    products: [{ name: "Yoga Mat", quantity: 2 }],
    totalAmount: 59.98,
    paymentStatus: "paid",
    orderStatus: "completed",
    date: "2024-01-11",
  },
  {
    id: "7",
    orderId: "ORD-007",
    customerName: "Chris Wilson",
    customerEmail: "chris@example.com",
    products: [{ name: "Cookbook Collection", quantity: 1 }],
    totalAmount: 49.99,
    paymentStatus: "paid",
    orderStatus: "cancelled",
    date: "2024-01-10",
  },
];

export const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234-567-8900",
    avatar: "/api/placeholder/40/40",
    totalOrders: 12,
    totalSpent: 1250.50,
    joinDate: "2023-06-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 234-567-8901",
    avatar: "/api/placeholder/40/40",
    totalOrders: 8,
    totalSpent: 890.25,
    joinDate: "2023-08-20",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 234-567-8902",
    avatar: "/api/placeholder/40/40",
    totalOrders: 15,
    totalSpent: 2100.75,
    joinDate: "2023-05-10",
  },
  {
    id: "4",
    name: "Sarah Williams",
    email: "sarah@example.com",
    phone: "+1 234-567-8903",
    avatar: "/api/placeholder/40/40",
    totalOrders: 5,
    totalSpent: 550.00,
    joinDate: "2023-09-05",
  },
  {
    id: "5",
    name: "David Brown",
    email: "david@example.com",
    phone: "+1 234-567-8904",
    avatar: "/api/placeholder/40/40",
    totalOrders: 20,
    totalSpent: 3200.50,
    joinDate: "2023-04-12",
  },
];

export const revenueData = [
  { month: "Jan", revenue: 32000 },
  { month: "Feb", revenue: 35000 },
  { month: "Mar", revenue: 38000 },
  { month: "Apr", revenue: 42000 },
  { month: "May", revenue: 45000 },
  { month: "Jun", revenue: 48000 },
  { month: "Jul", revenue: 52000 },
  { month: "Aug", revenue: 49000 },
  { month: "Sep", revenue: 55000 },
  { month: "Oct", revenue: 58000 },
  { month: "Nov", revenue: 62000 },
  { month: "Dec", revenue: 65000 },
];

export const salesByCategory = [
  { name: "Electronics", value: 35, color: "#3b82f6" },
  { name: "Fashion", value: 25, color: "#8b5cf6" },
  { name: "Home & Garden", value: 20, color: "#10b981" },
  { name: "Sports", value: 15, color: "#f59e0b" },
  { name: "Books", value: 5, color: "#ef4444" },
];

export const topProducts = [
  {
    id: "1",
    name: "Wireless Headphones",
    category: "Electronics",
    sales: 1250,
    revenue: 162487.5,
    image: "/api/placeholder/64/64",
    percentage: 100,
  },
  {
    id: "2",
    name: "Smart Watch",
    category: "Electronics",
    sales: 980,
    revenue: 293902,
    image: "/api/placeholder/64/64",
    percentage: 78,
  },
  {
    id: "3",
    name: "Running Shoes",
    category: "Sports",
    sales: 850,
    revenue: 76075,
    image: "/api/placeholder/64/64",
    percentage: 68,
  },
  {
    id: "4",
    name: "Coffee Maker",
    category: "Home & Garden",
    sales: 720,
    revenue: 107280,
    image: "/api/placeholder/64/64",
    percentage: 58,
  },
  {
    id: "5",
    name: "Leather Jacket",
    category: "Fashion",
    sales: 650,
    revenue: 129993.5,
    image: "/api/placeholder/64/64",
    percentage: 52,
  },
];


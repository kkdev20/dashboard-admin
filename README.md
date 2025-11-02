# AdminHub - Professional Admin Dashboard

A modern, professional admin dashboard built with Next.js 14, TypeScript, Tailwind CSS, and featuring dark/light mode, multi-language support (English & Indonesian), and comprehensive data visualization.

## Features

✨ **Key Features:**
- 📊 **Modern Dashboard** with real-time statistics and charts
- 🌙 **Dark/Light Mode** with smooth transitions
- 🌐 **Multi-language Support** (English & Indonesian)
- 📈 **Data Visualization** with Recharts
- 🎨 **Beautiful UI** with Tailwind CSS and Framer Motion animations
- 📱 **Fully Responsive** design
- 🔍 **Advanced Filtering & Search** capabilities
- 📦 **Product Management** with filtering and sorting
- 🛒 **Order Management** with status tracking
- 👥 **Customer Management** with analytics
- 📊 **Analytics & Reports** page
- ⚙️ **Settings** page with preferences
- 👤 **User Profile** management

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom components inspired by shadcn/ui
- **Animations:** Framer Motion
- **Charts:** Recharts
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dashboardv1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will automatically redirect to `/dashboard`.

## Project Structure

```
dashboardv1/
├── app/
│   ├── (dashboard)/          # Dashboard routes
│   │   ├── layout.tsx        # Dashboard layout wrapper
│   │   ├── page.tsx          # Dashboard home
│   │   ├── products/         # Products page
│   │   ├── orders/           # Orders page
│   │   ├── customers/        # Customers page
│   │   ├── analytics/        # Analytics page
│   │   ├── revenue/          # Revenue page
│   │   ├── settings/         # Settings page
│   │   └── profile/          # Profile page
│   ├── providers/            # Context providers
│   │   ├── theme-provider.tsx
│   │   └── language-provider.tsx
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home (redirects to dashboard)
│   └── globals.css           # Global styles
├── components/
│   ├── dashboard/            # Dashboard components
│   │   ├── stat-card.tsx
│   │   ├── revenue-chart.tsx
│   │   ├── sales-chart.tsx
│   │   ├── recent-orders.tsx
│   │   └── top-products.tsx
│   ├── layout/               # Layout components
│   │   ├── sidebar.tsx
│   │   ├── navbar.tsx
│   │   └── dashboard-layout.tsx
│   ├── shared/               # Shared components
│   │   ├── theme-toggle.tsx
│   │   └── language-switcher.tsx
│   └── ui/                   # UI primitives
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       ├── table.tsx
│       └── label.tsx
├── lib/
│   ├── i18n/                 # Internationalization
│   │   ├── config.ts
│   │   ├── index.ts
│   │   └── locales/
│   │       ├── en/           # English translations
│   │       └── id/           # Indonesian translations
│   ├── data/
│   │   └── mockData.ts       # Mock data
│   └── utils.ts              # Utility functions
└── package.json
```

## Features Breakdown

### Dashboard Page
- **Stats Cards:** Total Revenue, Orders, Customers, Active Products with animated counters
- **Charts:** Revenue overview (Line chart) and Sales by Category (Pie chart)
- **Recent Orders Table:** Latest orders with status badges
- **Top Products:** Best-selling products with progress bars

### Products Page
- Product listing with search and filters
- Category and status filtering
- Product management actions (Edit, Delete, Duplicate)

### Orders Page
- Tab-based filtering (All, Pending, Processing, Completed, Cancelled)
- Order details with payment and order status
- Export functionality ready

### Customers Page
- Customer statistics cards
- Customer listing with order history
- Customer management actions

### Analytics Page
- Multiple chart visualizations
- Time range selector
- Key metrics display

### Settings Page
- General settings (Store info, preferences)
- Language and theme preferences
- Organized in tabs

### Profile Page
- User profile management
- Password change functionality

## Dark/Light Mode

The dashboard supports three theme modes:
- **Light Mode**
- **Dark Mode**
- **System** (follows OS preference)

Theme preference is saved in localStorage and persists across sessions.

## Multi-Language Support

The dashboard supports:
- **English (en)** - Default
- **Indonesian (id)**

Language preference is saved in localStorage. All UI elements, labels, buttons, tables, and notifications are translated.

## Customization

### Adding New Languages

1. Create a new folder in `lib/i18n/locales/` (e.g., `fr/`)
2. Copy the JSON files from `en/` and translate them
3. Update `lib/i18n/config.ts` to include the new language
4. Update the language switcher component

### Styling

The project uses Tailwind CSS. Customize colors, spacing, and other design tokens in `tailwind.config.ts` and component files.

### Mock Data

Mock data is located in `lib/data/mockData.ts`. Replace with your actual API endpoints when ready.

## Building for Production

```bash
npm run build
npm start
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js 14

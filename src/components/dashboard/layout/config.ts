import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Tổng quan', href: paths.dashboard.overview, icon: 'chart-pie' },
  {
    key: 'products-categories',
    title: 'Sản phẩm-Danh mục',
    href: paths.dashboard.products.list,
    items: [
      { key: 'products', title: 'Sản phẩm', href: paths.dashboard.products.list, icon: 'box' },
      { key: 'categories', title: 'Danh mục', href: paths.dashboard.categories.list, icon: 'package' },
      { key: 'brands', title: 'Thương hiệu', href: paths.dashboard.brands.list, icon: 'brand' },
    ],
  },
  { key: 'customers', title: 'Khách hàng', href: paths.dashboard.customers, icon: 'users' },
  { key: 'orders', title: 'Đơn hàng', href: paths.dashboard.orders, icon: 'shopping-cart' },
  { key: 'payments', title: 'Thanh toán', href: paths.dashboard.payments, icon: 'credit-card' },
  { key: 'discounts', title: 'Khuyến mại', href: paths.dashboard.discounts, icon: 'tag' },
  { key: 'reports', title: 'Báo cáo', href: paths.dashboard.reports, icon: 'file-text' },
  { key: 'settings', title: 'Cài đặt', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
] satisfies NavItemConfig[];

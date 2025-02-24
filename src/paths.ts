export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    orders: '/dashboard/orders',
    products: { list: '/dashboard/products' },
    categories: { list: '/dashboard/categories'},
    brands: { list: '/dashboard/brands'},
    payments: '/dashboard/payments',
    discounts: '/dashboard/discounts',
    reports: '/dashboard/reports',
    customers: '/dashboard/customers',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
  },
  errors: { notFound: '/errors/not-found' },
} as const;

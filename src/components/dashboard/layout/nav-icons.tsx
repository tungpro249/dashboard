import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { ChartPie as ChartPieIcon } from '@phosphor-icons/react/dist/ssr/ChartPie';
import { GearSix as GearSixIcon } from '@phosphor-icons/react/dist/ssr/GearSix';
import { PlugsConnected as PlugsConnectedIcon } from '@phosphor-icons/react/dist/ssr/PlugsConnected';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { XSquare as XSquareIcon } from '@phosphor-icons/react/dist/ssr/XSquare';
import { House as HouseIcon } from '@phosphor-icons/react/dist/ssr/House';
import { ShoppingCart as ShoppingCartIcon } from '@phosphor-icons/react/dist/ssr/ShoppingCart';
import { Package as PackageIcon } from '@phosphor-icons/react/dist/ssr/Package';
import { CreditCard as CreditCardIcon } from '@phosphor-icons/react/dist/ssr/CreditCard';
import { FileText as FileTextIcon } from '@phosphor-icons/react/dist/ssr/FileText';
import { Bell as BellIcon } from '@phosphor-icons/react/dist/ssr/Bell';
import { Lock as LockIcon } from '@phosphor-icons/react/dist/ssr/Lock';
import { SignOut as SignOutIcon } from '@phosphor-icons/react/dist/ssr/SignOut';
import { Cube as CubeIcon } from '@phosphor-icons/react/dist/ssr/Cube';
import { X as CloseIcon } from '@phosphor-icons/react/dist/ssr/X';
import { MatrixLogo } from '@phosphor-icons/react/dist/ssr/MatrixLogo';

export const navIcons = {
  'chart-pie': ChartPieIcon,
  'gear-six': GearSixIcon,
  'plugs-connected': PlugsConnectedIcon,
  'x-square': XSquareIcon,
  user: UserIcon,
  users: UsersIcon,
  house: HouseIcon, // Trang chủ
  box: CubeIcon,
  'shopping-cart': ShoppingCartIcon, // Giỏ hàng
  package: PackageIcon, // Sản phẩm
  'credit-card': CreditCardIcon, // Thanh toán
  'file-text': FileTextIcon, // Đơn hàng
  bell: BellIcon, // Thông báo
  lock: LockIcon, // Cài đặt bảo mật
  'sign-out': SignOutIcon, // Đăng xuất
  brand: MatrixLogo ,
  close: CloseIcon
} as Record<string, Icon>;

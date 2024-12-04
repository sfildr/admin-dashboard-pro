import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  Bell,
  Settings,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Users", icon: Users, path: "/users" },
  { title: "Products", icon: Package, path: "/products" },
  { title: "Orders", icon: ShoppingCart, path: "/orders" },
  { title: "Notifications", icon: Bell, path: "/notifications" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

export function DashboardSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                        location.pathname === item.path
                          ? "bg-[#9B87F5] text-white"
                          : "hover:bg-[#9B87F5] hover:text-white"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
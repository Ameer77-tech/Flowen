"use client";
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Bell,
  BookMarked,
  HeartPulse,
  Home,
  NotepadText,
  Settings2,
} from "lucide-react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import profile from "@/public/pro.png";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import useUserStore from "@/app/Store/user.store";

const AppSideBar = () => {
  const userData = useUserStore((state) => state);
  
  const path = usePathname();

  const tabs = [
    { name: "Dashboard", icon: Home, link: "/" },
    { name: "Tasks", icon: NotepadText, link: "/tasks" },
    { name: "Projects", icon: BookMarked, link: "/projects" },
    { name: "Analytics", icon: HeartPulse, link: "/analytics" },
    { name: "Notifications", icon: Bell, link: "/notifications" },
    { name: "Settings", icon: Settings2, link: "/settings" },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex justify-start px-3 gap-3 py-2 items-center lg:h-17 h-15 lg:mt-5">
            <div className="h-full justify-center items-center flex relative">
              <Image
                src={logo}
                width={501}
                height={498}
                alt="logo"
                className="w-12 h-12"
              />
            </div>
            <p className="text-4xl">xTask</p>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {tabs.map((item) => {
                  const isActive =
                    item.link === "/"
                      ? path === "/"
                      : path.startsWith(item.link);

                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        className={clsx(
                          "flex items-center gap-2 transition-colors",
                          isActive
                            ? "text-accent underline font-semibold"
                            : "text-secondary-foreground"
                        )}
                      >
                        <Link href={item.link}>
                          <item.icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <div className="flex justify-start px-3 py-2 gap-2 items-start lg:h-17 h-15 lg:mt-5">
            <div className="h-full justify-center items-center flex relative">
              <img
                src={userData?.avatar || "/pro.png"}
                alt="profile"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col leading-7">
              <h3 className="font-semibold">{userData?.displayName}</h3>
              <p className="text-muted-foreground text-xs">
                {userData?.email}
              </p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarTrigger />
    </SidebarProvider>
  );
};

export default AppSideBar;

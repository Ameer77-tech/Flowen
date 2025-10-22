import React from "react";
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
import profile from "@/public/pro.png";
import Image from "next/image";

const AppSideBar = () => {
  const tabs = [
    {
      name: "Dashboard",
      icon: Home,
    },
    {
      name: "Tasks",
      icon: NotepadText,
    },
    {
      name: "Projects",
      icon: BookMarked,
    },
    {
      name: "Analytics",
      icon: HeartPulse,
    },
    {
      name: "Notifications",
      icon: Bell,
    },
    {
      name: "Settings",
      icon: Settings2,
    },
  ];
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex justify-start px-3 py-2 gap-2 items-center lg:h-17 h-15 lg:mt-5">
            <div className="h-full justify-center items-center flex relative">
              <Image
                src={profile}
                width={500}
                height={500}
                alt="profile"
                className="w-full h-full"
              ></Image>
            </div>
            <div className="flex flex-col justify-center items-center leading-7">
              <h3 className="font-semibold">Ameer</h3>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {tabs.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton variant="outline" size asChild>
                      <a href={item.name}>
                        <item.icon />
                        <span>{item.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex justify-start px-3 py-2 gap-2 items-start lg:h-17 h-15 lg:mt-5">
            <div className="h-full justify-center items-center flex relative">
              <Image
                src={profile}
                width={500}
                height={500}
                alt="profile"
                className="w-full h-full"
              ></Image>
            </div>
            <div className="flex flex-col leading-7">
              <h3 className="font-semibold">Ameer</h3>
              <p className="text-muted text-xs">ameershaik.cs@gmail.com</p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};

export default AppSideBar;

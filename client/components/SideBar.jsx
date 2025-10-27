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

const AppSideBar = () => {
  const tabs = [
    {
      name: "Dashboard",
      icon: Home,
      link: "/",
    },
    {
      name: "Tasks",
      icon: NotepadText,
      link: "tasks",
    },
    {
      name: "Projects",
      icon: BookMarked,
      link: "/projects",
    },
    {
      name: "Analytics",
      icon: HeartPulse,
      link: "/analytics",
    },
    {
      name: "Notifications",
      icon: Bell,
      link: "/notifications",
    },
    {
      name: "Settings",
      icon: Settings2,
      link: "/settings",
    },
  ];
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex justify-start px-3 py-2 items-center lg:h-17 h-15 lg:mt-5">
            <div className="h-full justify-center items-center flex relative">
              <Image
                src={logo}
                width={800}
                height={598}
                alt="profile"
                className="w-12 h-10"
              ></Image>
            </div>
            <p className="text-4xl">xTask</p>
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
                      <Link href={item.link}>
                        <item.icon />
                        <span>{item.name}</span>
                      </Link>
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
      <SidebarTrigger />
    </SidebarProvider>
  );
};

export default AppSideBar;

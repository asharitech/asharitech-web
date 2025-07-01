"use client";

import type * as React from "react";
import {
  AudioLines,
  BookOpen,
  Bot,
  Command,
  Frame,
  LayoutDashboard,
  Map,
  BarChart3,
  Settings2,
  SquareTerminal,
  Users,
  FileText,
  Image,
  Globe,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Ashari Tech",
    email: "admin@ashari.tech",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Ashari Tech CMS",
      logo: LayoutDashboard,
      plan: "Enterprise",
    },
    {
      name: "BrainyBuddy",
      logo: Bot,
      plan: "Startup",
    },
    {
      name: "GenAPI",
      logo: AudioLines,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/cms",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/cms",
        },
        {
          title: "Analytics",
          url: "/cms/analytics",
        },
        {
          title: "Reports",
          url: "/cms/reports",
        },
      ],
    },
    {
      title: "Content",
      url: "/cms/content",
      icon: FileText,
      items: [
        {
          title: "Posts",
          url: "/cms/content/posts",
        },
        {
          title: "Pages",
          url: "/cms/content/pages",
        },
        {
          title: "Categories",
          url: "/cms/content/categories",
        },
        {
          title: "Tags",
          url: "/cms/content/tags",
        },
      ],
    },
    {
      title: "Media",
      url: "/cms/media",
      icon: Image,
      items: [
        {
          title: "Library",
          url: "/cms/media/library",
        },
        {
          title: "Upload",
          url: "/cms/media/upload",
        },
      ],
    },
    {
      title: "Users",
      url: "/cms/users",
      icon: Users,
      items: [
        {
          title: "All Users",
          url: "/cms/users",
        },
        {
          title: "Roles",
          url: "/cms/users/roles",
        },
        {
          title: "Permissions",
          url: "/cms/users/permissions",
        },
      ],
    },
    {
      title: "Settings",
      url: "/cms/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/cms/settings/general",
        },
        {
          title: "SEO",
          url: "/cms/settings/seo",
        },
        {
          title: "Appearance",
          url: "/cms/settings/appearance",
        },
        {
          title: "Integrations",
          url: "/cms/settings/integrations",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Website",
      url: "/",
      icon: Globe,
    },
    {
      name: "Documentation",
      url: "/docs",
      icon: BookOpen,
    },
    {
      name: "BrainyBuddy",
      url: "https://t.me/brainybuddybot",
      icon: Bot,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

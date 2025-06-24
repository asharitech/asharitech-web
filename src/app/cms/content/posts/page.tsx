"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable, selectColumn, actionsColumn } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Plus, FileText } from "lucide-react";

// Sample data type
type Post = {
  id: string;
  title: string;
  status: "published" | "draft" | "scheduled";
  author: string;
  category: string;
  publishedAt: string;
  views: number;
};

// Sample data
const data: Post[] = [
  {
    id: "1",
    title: "AI Revolution in Indonesia: A Comprehensive Guide",
    status: "published",
    author: "Admin",
    category: "Technology",
    publishedAt: "2025-06-23",
    views: 2340,
  },
  {
    id: "2",
    title: "BrainyBuddy: Your AI Learning Companion",
    status: "published",
    author: "Content Team",
    category: "Product",
    publishedAt: "2025-06-22",
    views: 1876,
  },
  {
    id: "3",
    title: "Future of SMEs in Digital Indonesia",
    status: "draft",
    author: "Research Team",
    category: "Business",
    publishedAt: "2025-06-24",
    views: 0,
  },
  {
    id: "4",
    title: "Machine Learning Trends 2025",
    status: "scheduled",
    author: "Tech Writer",
    category: "Technology",
    publishedAt: "2025-06-25",
    views: 0,
  },
  {
    id: "5",
    title: "Digital Transformation Case Studies",
    status: "published",
    author: "Analyst",
    category: "Case Study",
    publishedAt: "2025-06-21",
    views: 3241,
  },
];

export default function PostsPage() {
  const columns: ColumnDef<Post>[] = [
    selectColumn,
    {
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Title
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="max-w-[400px]">
          <div className="font-medium">{row.getValue("title")}</div>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <Badge
            variant={
              status === "published"
                ? "default"
                : status === "draft"
                ? "secondary"
                : "outline"
            }
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        );
      },
    },
    {
      accessorKey: "author",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Author
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => (
        <Badge variant="outline">{row.getValue("category")}</Badge>
      ),
    },
    {
      accessorKey: "publishedAt",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Published At
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const date = new Date(row.getValue("publishedAt"));
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      },
    },
    {
      accessorKey: "views",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="justify-end"
          >
            Views
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const views = row.getValue("views") as number;
        return (
          <div className="text-right font-medium">
            {views.toLocaleString()}
          </div>
        );
      },
    },
    actionsColumn,
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Posts</h2>
          <p className="text-muted-foreground">
            Manage your blog posts and articles.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Import Posts
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Post
          </Button>
        </div>
      </div>

      {/* Data Table */}
      <DataTable
        columns={columns}
        data={data}
        searchKey="title"
        searchPlaceholder="Search posts..."
      />
    </div>
  );
}
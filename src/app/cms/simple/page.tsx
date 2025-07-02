import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  Users,
  FileText,
  Eye,
  TrendingUp,
  Activity,
  Globe,
  MessageSquare,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Home,
} from "lucide-react";

export default function SimpleCMSDashboard() {
  return (
    <div className="min-h-screen bg-java-sand">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full px-4 sm:px-6 py-4 bg-white border-b border-soft-gray">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-rust rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-zinc-800">
                  Ashari Tech CMS
                </span>
                <span className="text-xs text-zinc-600 font-medium">
                  Content Management System
                </span>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-6">
              <a
                href="/cms/simple"
                className="text-sm font-medium text-rust border-b-2 border-rust pb-1"
              >
                Dashboard
              </a>
              <a
                href="/cms/content/posts"
                className="text-sm font-medium text-zinc-700 hover:text-rust"
              >
                Posts
              </a>
              <a
                href="#media"
                className="text-sm font-medium text-zinc-700 hover:text-rust"
              >
                Media
              </a>
              <a
                href="#users"
                className="text-sm font-medium text-zinc-700 hover:text-rust"
              >
                Users
              </a>
              <a
                href="#settings"
                className="text-sm font-medium text-zinc-700 hover:text-rust"
              >
                Settings
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Home className="h-4 w-4 mr-2" />
              Visit Site
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-zinc-800">Dashboard</h1>
            <p className="text-zinc-600">
              Welcome back! Here's what's happening with your content.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              Create Content
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Content
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,543</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +12.5%
                </span>
                from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Page Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45,231</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +8.2%
                </span>
                from last week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Users
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-600 flex items-center">
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  -2.1%
                </span>
                from yesterday
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Conversion Rate
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.3%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600 flex items-center">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +3.2%
                </span>
                from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-white">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              {/* Recent Content */}
              <Card className="col-span-4 bg-white">
                <CardHeader>
                  <CardTitle>Recent Content</CardTitle>
                  <CardDescription>
                    Your latest published content and their performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "AI Revolution in Indonesia",
                        type: "Blog Post",
                        status: "Published",
                        views: "2.3k",
                        date: "2 hours ago",
                      },
                      {
                        title: "BrainyBuddy Feature Update",
                        type: "Product Update",
                        status: "Published",
                        views: "1.8k",
                        date: "1 day ago",
                      },
                      {
                        title: "Technology Trends 2025",
                        type: "Article",
                        status: "Draft",
                        views: "0",
                        date: "3 days ago",
                      },
                      {
                        title: "SME Digital Transformation",
                        type: "Case Study",
                        status: "Published",
                        views: "3.2k",
                        date: "1 week ago",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg border"
                      >
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {item.title}
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {item.type}
                            </Badge>
                            <Badge
                              variant={
                                item.status === "Published"
                                  ? "default"
                                  : "outline"
                              }
                              className="text-xs"
                            >
                              {item.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">
                            {item.views} views
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="col-span-3 bg-white">
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                  <CardDescription>
                    Key metrics for your content performance.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">Website Traffic</span>
                      </div>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Engagement Rate</span>
                      </div>
                      <span className="text-sm font-medium">72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Activity className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">Content Quality</span>
                      </div>
                      <span className="text-sm font-medium">91%</span>
                    </div>
                    <Progress value={91} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">SEO Performance</span>
                      </div>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>
                  Manage your blog posts, pages, and other content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Advanced Content Management
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Data tables with filtering, sorting, and editing
                    capabilities.
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button>
                      <FileText className="h-4 w-4 mr-2" />
                      Create New Post
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/cms/content/posts">View All Posts</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Analytics & Insights</CardTitle>
                <CardDescription>
                  Detailed analytics and performance insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Advanced Analytics
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Charts, graphs, and detailed analytics dashboard.
                  </p>
                  <Button>
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Full Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Track all recent activities and changes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: "Published new blog post",
                      item: "AI Revolution in Indonesia",
                      user: "Admin",
                      time: "2 hours ago",
                    },
                    {
                      action: "Updated product page",
                      item: "BrainyBuddy Features",
                      user: "Editor",
                      time: "4 hours ago",
                    },
                    {
                      action: "Created new category",
                      item: "Technology Trends",
                      user: "Admin",
                      time: "1 day ago",
                    },
                    {
                      action: "Uploaded media files",
                      item: "Product Screenshots",
                      user: "Content Creator",
                      time: "2 days ago",
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border"
                    >
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {activity.action}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {activity.item} by {activity.user}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

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
} from "lucide-react";

export default function CMSDashboard() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-text-primary">
            Dashboard Overview
          </h2>
          <p className="text-text-muted">
            Welcome back! Here's what's happening with your content.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="glass">
            <BarChart3 className="h-4 w-4 mr-2 text-electric-purple" />
            Export Report
          </Button>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Create Content
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="glass-card border-0 hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-text-secondary">
              Total Content
            </CardTitle>
            <div className="w-10 h-10 bg-electric-purple/10 rounded-lg flex items-center justify-center">
              <FileText className="h-5 w-5 text-electric-purple" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-text-primary">2,543</div>
            <p className="text-sm text-text-muted mt-1">
              <span className="text-green-600 inline-flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-0.5" />
                +12.5%
              </span>
              <span className="text-text-muted"> from last month</span>
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-0 hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-text-secondary">
              Page Views
            </CardTitle>
            <div className="w-10 h-10 bg-electric-blue/10 rounded-lg flex items-center justify-center">
              <Eye className="h-5 w-5 text-electric-blue" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-text-primary">45,231</div>
            <p className="text-sm text-text-muted mt-1">
              <span className="text-green-600 inline-flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-0.5" />
                +8.2%
              </span>
              <span className="text-text-muted"> from last week</span>
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-0 hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-text-secondary">
              Active Users
            </CardTitle>
            <div className="w-10 h-10 bg-vibrant-pink/10 rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-vibrant-pink" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-text-primary">1,234</div>
            <p className="text-sm text-text-muted mt-1">
              <span className="text-red-600 inline-flex items-center">
                <ArrowDownRight className="h-4 w-4 mr-0.5" />
                -2.1%
              </span>
              <span className="text-text-muted"> from yesterday</span>
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-0 hover:shadow-lg transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-text-secondary">
              Conversion Rate
            </CardTitle>
            <div className="w-10 h-10 bg-warm-yellow/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-warm-yellow" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-text-primary">12.3%</div>
            <p className="text-sm text-text-muted mt-1">
              <span className="text-green-600 inline-flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-0.5" />
                +3.2%
              </span>
              <span className="text-text-muted"> from last month</span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-card border-0">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Recent Content */}
            <Card className="col-span-4 glass-card border-0">
              <CardHeader>
                <CardTitle className="text-xl text-text-primary">
                  Recent Content
                </CardTitle>
                <CardDescription className="text-text-muted">
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
                      className="flex items-center justify-between p-4 rounded-xl glass-card border-0 hover:shadow-md transition-all"
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
            <Card className="col-span-3 glass-card border-0">
              <CardHeader>
                <CardTitle className="text-xl text-text-primary">
                  Quick Stats
                </CardTitle>
                <CardDescription className="text-text-muted">
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
                  <Progress value={85} className="h-2 bg-electric-blue/20" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Engagement Rate</span>
                    </div>
                    <span className="text-sm font-medium">72%</span>
                  </div>
                  <Progress value={72} className="h-2 bg-green-500/20" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">Content Quality</span>
                    </div>
                    <span className="text-sm font-medium">91%</span>
                  </div>
                  <Progress value={91} className="h-2 bg-orange-500/20" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">SEO Performance</span>
                    </div>
                    <span className="text-sm font-medium">68%</span>
                  </div>
                  <Progress value={68} className="h-2 bg-purple-500/20" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <Card>
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
                  Data tables with filtering, sorting, and editing capabilities
                  will be implemented here.
                </p>
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  Create New Content
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
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
                  Charts, graphs, and detailed analytics will be implemented
                  here.
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
          <Card>
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
  );
}

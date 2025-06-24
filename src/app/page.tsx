import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  Globe,
  Zap,
  Bot,
  ExternalLink,
  Mail,
  Github,
  Instagram,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-java-sand">
      {/* Navigation */}
      <nav
        className="sticky top-0 z-50 w-full px-4 sm:px-6 py-4 bg-white border-b border-soft-gray"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div
              className="w-10 h-10 bg-rust rounded-lg flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-zinc-800">
                Ashari Tech
              </span>
              <span className="text-xs text-zinc-600 font-medium">
                AI & Technology
              </span>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-6">
            <a
              href="#about"
              className="text-sm font-medium text-zinc-700 hover:text-rust"
              aria-label="Learn about Ashari Tech"
            >
              About
            </a>
            <a
              href="#products"
              className="text-sm font-medium text-zinc-700 hover:text-rust"
              aria-label="View our products"
            >
              Products
            </a>
            <a
              href="#goals"
              className="text-sm font-medium text-zinc-700 hover:text-rust"
              aria-label="Our company goals"
            >
              Goals
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-zinc-700 hover:text-rust"
              aria-label="Contact us"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16 lg:py-24"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge
              className="bg-rust/10 text-rust border-rust/20 mb-4"
              role="img"
              aria-label="Made in Indonesia"
            >
              🇮🇩 Made in Indonesia
            </Badge>
            <h1
              id="hero-heading"
              className="text-zinc-800 text-balance text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              Revolutionizing the Future with{" "}
              <span className="text-rust font-bold">AI and Technology</span>
            </h1>
            <p className="text-zinc-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              At Ashari Tech, we harness cutting-edge AI and technology to
              transform Indonesia's landscape, empowering SMEs, enhancing lives,
              and building a more connected, prosperous future for all.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              asChild
              className="bg-rust hover:bg-rust-hover text-white px-6 py-3"
              size="lg"
            >
              <a href="#products">
                Explore Our Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-rust text-rust hover:bg-rust/5 px-6 py-3"
              size="lg"
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 sm:px-6 bg-white"
        aria-labelledby="about-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-zinc-800 mb-4"
            >
              Our Mission & Vision
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Driving Indonesia's technological revolution through innovation,
              accessibility, and sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-soft-gray">
              <CardHeader>
                <div className="w-12 h-12 bg-rust/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-rust" aria-hidden="true" />
                </div>
                <CardTitle className="text-zinc-800">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-600 leading-relaxed">
                  To be the leading force in Indonesia's technological
                  revolution, establishing AI and digital innovation as the
                  cornerstone for economic growth, social progress, and
                  environmental sustainability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-soft-gray">
              <CardHeader>
                <div className="w-12 h-12 bg-rust/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-rust" aria-hidden="true" />
                </div>
                <CardTitle className="text-zinc-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-600 leading-relaxed">
                  To harness the power of cutting-edge AI and technology to
                  transform Indonesia's landscape—from boosting business
                  efficiency and SME growth to improving the quality of life for
                  all Indonesians.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="py-16 px-4 sm:px-6 bg-cream"
        aria-labelledby="products-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="products-heading"
              className="text-3xl sm:text-4xl font-bold text-zinc-800 mb-4"
            >
              Our Products
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Innovative AI solutions designed to empower learning and enhance
              productivity.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <Card className="border-soft-gray bg-white">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-rust rounded-lg flex items-center justify-center">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-zinc-800 text-2xl">
                      Brainy Buddy
                    </CardTitle>
                    <CardDescription className="text-zinc-600">
                      AI Assistant untuk Belajar
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 leading-relaxed mb-6">
                  Meet Brainy Buddy, your intelligent learning companion
                  available 24/7. Designed to help students and learners tackle
                  assignments, understand complex topics, and enhance their
                  educational journey through personalized AI assistance.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-rust/10 text-rust">
                    24/7 Available
                  </Badge>
                  <Badge variant="secondary" className="bg-rust/10 text-rust">
                    Educational AI
                  </Badge>
                  <Badge variant="secondary" className="bg-rust/10 text-rust">
                    Multi-platform
                  </Badge>
                  <Badge variant="secondary" className="bg-rust/10 text-rust">
                    Indonesian Language
                  </Badge>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="bg-rust hover:bg-rust-hover text-white"
                  >
                    <a
                      href="https://t.me/brainybuddybot"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Chat di Telegram
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="bg-terracotta hover:bg-terracotta-hover text-white"
                  >
                    <a
                      href="https://line.me/R/ti/p/@125nkjfl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Chat di LINE
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section
        id="goals"
        className="py-16 px-4 sm:px-6 bg-white"
        aria-labelledby="goals-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="goals-heading"
              className="text-3xl sm:text-4xl font-bold text-zinc-800 mb-4"
            >
              Our Goals
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
              Six key objectives driving Indonesia's digital transformation and
              technological advancement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Empowering SMEs",
                description:
                  "Equip small and medium-sized enterprises with digital tools and AI capabilities to enhance competitiveness and market reach.",
              },
              {
                icon: Lightbulb,
                title: "Innovating for Society",
                description:
                  "Develop AI-powered solutions that enhance healthcare, education, and urban planning for a more equitable future.",
              },
              {
                icon: Globe,
                title: "Advancing Digital Literacy",
                description:
                  "Launch initiatives to boost digital skills across the population, preparing Indonesians for the digital economy.",
              },
              {
                icon: Zap,
                title: "Sustainable Technology",
                description:
                  "Promote and develop sustainable technologies that minimize environmental impact for a green future.",
              },
              {
                icon: Target,
                title: "Strengthening Infrastructure",
                description:
                  "Collaborate to enhance Indonesia's digital infrastructure, making internet more accessible and reliable.",
              },
              {
                icon: Bot,
                title: "Innovation Hub",
                description:
                  "Establish Ashari Tech as an innovation hub, attracting talent and partners for groundbreaking projects.",
              },
            ].map((goal) => (
              <Card
                key={goal.title}
                className="border-soft-gray hover:border-rust/30 "
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-rust/10 rounded-lg flex items-center justify-center mb-4">
                    <goal.icon className="h-6 w-6 text-rust" />
                  </div>
                  <CardTitle className="text-zinc-800">{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-600 leading-relaxed">
                    {goal.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 bg-cream"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-zinc-800 mb-4"
          >
            Get in Touch
          </h2>
          <p className="text-zinc-600 text-lg mb-8 max-w-2xl mx-auto">
            Ready to revolutionize your business with AI and technology? Let's
            build the future together.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-soft-gray bg-white">
              <CardHeader className="text-center">
                <Mail className="h-8 w-8 text-rust mx-auto mb-2" />
                <CardTitle className="text-zinc-800">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:support@ashari.tech"
                  className="text-rust hover:text-rust-hover "
                >
                  support@ashari.tech
                </a>
              </CardContent>
            </Card>

            <Card className="border-soft-gray bg-white">
              <CardHeader className="text-center">
                <Github className="h-8 w-8 text-rust mx-auto mb-2" />
                <CardTitle className="text-zinc-800">GitHub</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://github.com/asharitech"
                  className="text-rust hover:text-rust-hover "
                >
                  github.com/asharitech
                </a>
              </CardContent>
            </Card>

            <Card className="border-soft-gray bg-white">
              <CardHeader className="text-center">
                <Instagram className="h-8 w-8 text-rust mx-auto mb-2" />
                <CardTitle className="text-zinc-800">Instagram</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://instagram.com/ashari.tech"
                  className="text-rust hover:text-rust-hover "
                >
                  @ashari.tech
                </a>
              </CardContent>
            </Card>
          </div>

          <Button
            className="bg-rust hover:bg-rust-hover text-white px-8 py-3"
            size="lg"
          >
            Start Your Digital Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-4 sm:px-6 py-8 border-t border-soft-gray bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-rust rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div className="text-sm text-zinc-600">
                <div className="font-semibold text-zinc-800">Ashari Tech</div>
                <div className="text-xs">
                  Revolutionizing the Future with AI
                </div>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-sm text-zinc-600">
                © 2025 Ashari Tech. Made with ❤️ in Indonesia
              </p>
              <p className="text-xs text-zinc-500 mt-1">
                Building the future, one innovation at a time
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

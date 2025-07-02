"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PolygonCluster } from "@/components/ui/polygon-shape";
import { SectionDivider } from "@/components/ui/section-divider";
import { MobileMenuButton } from "@/components/ui/mobile-menu-button";
import { GlobalMobileMenu } from "@/components/ui/global-mobile-menu";
import { MobileNavProvider, useMobileNav } from "@/contexts/mobile-nav-context";
import Logo from "@/components/logo";
import { PatternToggle } from "@/components/ui/pattern-toggle";
import {
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  Globe,
  Zap,
  Bot,
  Link2,
  Mail,
  Github,
  Instagram,
  Sparkles,
  CircuitBoard,
} from "lucide-react";

function HomeContent() {
  const { isOpen, toggleMenu, closeMenu } = useMobileNav();

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 glass-card border-b-0 rounded-b-2xl backdrop-blur-xl"
        aria-label="Main navigation"
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center min-h-[56px]">
          <Logo size="md" showText={true} glowIntensity="high" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#about"
              className="text-base font-medium text-text-secondary hover:text-neon-orange transition-colors min-h-[44px] px-3 inline-flex items-center"
              aria-label="Learn about Ashari Tech"
            >
              About
            </a>
            <a
              href="#products"
              className="text-base font-medium text-text-secondary hover:text-neon-orange transition-colors min-h-[44px] px-3 inline-flex items-center"
              aria-label="View our products"
            >
              Products
            </a>
            <a
              href="#goals"
              className="text-base font-medium text-text-secondary hover:text-neon-orange transition-colors min-h-[44px] px-3 inline-flex items-center"
              aria-label="Our company goals"
            >
              Goals
            </a>
            <a
              href="#testimonials"
              className="text-base font-medium text-text-secondary hover:text-neon-orange transition-colors min-h-[44px] px-3 inline-flex items-center"
              aria-label="Client testimonials"
            >
              Success Stories
            </a>
            <a
              href="#contact"
              className="text-base font-medium text-text-secondary hover:text-neon-orange transition-colors min-h-[44px] px-3 inline-flex items-center"
              aria-label="Contact us"
            >
              Contact
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden">
            <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-24"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neon-border">
              <Sparkles className="w-4 h-4 text-neon-orange" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-orange">
                Made in Indonesia
              </span>
            </div>
            <h1
              id="hero-heading"
              className="text-text-primary text-balance text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
            >
              Revolutionizing the Future with{" "}
              <span className="gradient-text">AI and Technology</span>
            </h1>
            <p className="text-text-secondary text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              At Ashari Tech, we harness cutting-edge AI and technology to
              transform Indonesia's landscape, empowering SMEs, enhancing lives,
              and building a more connected, prosperous future for all.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 sm:mt-12">
            <Button asChild size="lg" className="btn-neon group text-black">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2"
              >
                <CircuitBoard className="w-4 h-4 text-white drop-shadow-[0_0_4px_rgba(255,159,28,0.8)]" />
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="neon-border hover:bg-neon-orange/10 group"
            >
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2"
              >
                <span>Learn About Our Mission</span>
                <ArrowRight className="w-4 h-4 text-neon-orange transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* Decorative Polygonal Shapes */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 pointer-events-none">
          <PolygonCluster className="absolute bottom-20 left-10 hidden sm:block" />
          <PolygonCluster className="absolute bottom-10 right-10 scale-75 hidden sm:block" />
        </div>
      </section>

      {/* Divider between Hero and About */}
      <SectionDivider variant="angular" color="orange" />

      {/* About Section */}
      <section
        id="about"
        className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        aria-labelledby="about-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
            >
              Our Mission & Vision
            </h2>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
              Driving Indonesia's technological revolution through innovation,
              accessibility, and sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <Card className="glass-card border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-6 sm:p-8">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF9900 0%, #FF5700 25%, #FFB347 50%, #E94B8A 75%, #FF9900 100%)",
                  }}
                >
                  <Target className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-text-primary">
                  Our Vision for Indonesia's Digital Future
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8">
                <CardDescription className="text-text-secondary leading-relaxed text-sm sm:text-base">
                  To be the leading force in Indonesia's technological
                  revolution, establishing AI and digital innovation as the
                  cornerstone for economic growth, social progress, and
                  environmental sustainability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-6 sm:p-8">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF9900 0%, #FF5700 25%, #FFB347 50%, #E94B8A 75%, #FF9900 100%)",
                  }}
                >
                  <Lightbulb
                    className="h-7 w-7 text-white"
                    aria-hidden="true"
                  />
                </div>
                <CardTitle className="text-xl sm:text-2xl text-text-primary">
                  Our Mission to Empower Through Technology
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8">
                <CardDescription className="text-text-secondary leading-relaxed text-sm sm:text-base">
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

      {/* Divider between About and Products */}
      <SectionDivider variant="mesh" color="gold" />

      {/* Products Section */}
      <section
        id="products"
        className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        aria-labelledby="products-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              id="products-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
            >
              Our Products
            </h2>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
              Innovative AI solutions designed to empower learning and enhance
              productivity.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <Card className="glass-card border-0 hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div
                className="absolute top-0 right-0 w-64 h-64 opacity-10 blur-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, #FF9900 0%, #FF5700 25%, #FFB347 50%, #E94B8A 75%, #FF9900 100%)",
                }}
              />
              <CardHeader className="relative p-6 sm:p-8">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF9900 0%, #FF5700 25%, #FFB347 50%, #E94B8A 75%, #FF9900 100%)",
                    }}
                  >
                    <Bot className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl sm:text-3xl text-text-primary">
                      Brainy Buddy
                    </CardTitle>
                    <CardDescription className="text-text-secondary text-base sm:text-lg">
                      AI Assistant untuk Belajar
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative px-6 pb-6 sm:px-8 sm:pb-8">
                <p className="text-text-secondary leading-relaxed mb-6 text-sm sm:text-base">
                  Meet Brainy Buddy, your intelligent learning companion
                  available 24/7. Designed to help students and learners tackle
                  assignments, understand complex topics, and enhance their
                  educational journey through personalized AI assistance.
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <Badge
                    variant="secondary"
                    className="px-3 py-1 sm:px-4 sm:py-1.5 bg-neon-orange/10 text-neon-orange border border-neon-orange/30 font-semibold text-xs sm:text-sm"
                  >
                    24/7 Available
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="px-3 py-1 sm:px-4 sm:py-1.5 bg-gold-orange/10 text-gold-orange border border-gold-orange/30 font-semibold text-xs sm:text-sm"
                  >
                    Educational AI
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="px-3 py-1 sm:px-4 sm:py-1.5 bg-magenta-accent/10 text-magenta-accent border border-magenta-accent/30 font-semibold text-xs sm:text-sm"
                  >
                    Multi-platform
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="px-3 py-1 sm:px-4 sm:py-1.5 bg-bright-purple/10 text-bright-purple border border-bright-purple/30 font-semibold text-xs sm:text-sm"
                  >
                    Indonesian Language
                  </Badge>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="btn-neon group text-black"
                  >
                    <a
                      href="https://t.me/brainybuddybot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <Link2 className="w-4 h-4 text-white drop-shadow-[0_0_4px_rgba(255,159,28,0.8)]" />
                      <span>Start Learning on Telegram</span>
                      <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="neon-border hover:bg-neon-orange/10 group"
                  >
                    <a
                      href="https://line.me/R/ti/p/@125nkjfl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <Link2 className="w-4 h-4 text-neon-orange" />
                      <span>Start Learning on LINE</span>
                      <ArrowRight className="w-4 h-4 text-neon-orange transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Divider between Products and Goals */}
      <SectionDivider variant="polygon" color="magenta" />

      {/* Goals Section */}
      <section
        id="goals"
        className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        aria-labelledby="goals-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              id="goals-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
            >
              Our Goals
            </h2>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
              Six key objectives driving Indonesia's digital transformation and
              technological advancement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Users,
                title: "Empowering SMEs",
                description:
                  "Equip small and medium-sized enterprises with digital tools and AI capabilities to enhance competitiveness and market reach.",
                color: "bg-neon-orange",
              },
              {
                icon: Lightbulb,
                title: "Innovating for Society",
                description:
                  "Develop AI-powered solutions that enhance healthcare, education, and urban planning for a more equitable future.",
                color: "bg-gold-orange",
              },
              {
                icon: Globe,
                title: "Advancing Digital Literacy",
                description:
                  "Launch initiatives to boost digital skills across the population, preparing Indonesians for the digital economy.",
                color: "bg-magenta-accent",
              },
              {
                icon: Zap,
                title: "Sustainable Technology",
                description:
                  "Promote and develop sustainable technologies that minimize environmental impact for a green future.",
                color: "bg-gold-orange-dark",
              },
              {
                icon: Target,
                title: "Strengthening Infrastructure",
                description:
                  "Collaborate to enhance Indonesia's digital infrastructure, making internet more accessible and reliable.",
                color: "bg-bright-purple",
              },
              {
                icon: Bot,
                title: "Innovation Hub",
                description:
                  "Establish Ashari Tech as an innovation hub, attracting talent and partners for groundbreaking projects.",
                color: "bg-neon-orange-dark",
              },
            ].map((goal) => (
              <Card
                key={goal.title}
                className="glass-card border-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <CardHeader className="p-5 sm:p-6">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 ${goal.color} rounded-xl flex items-center justify-center mb-4`}
                    style={{
                      boxShadow:
                        "0 0 20px rgba(255, 153, 0, 0.5), 0 0 40px rgba(255, 153, 0, 0.3), 0 0 60px rgba(255, 153, 0, 0.1)",
                    }}
                  >
                    <goal.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-text-primary">
                    {goal.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <CardDescription className="text-text-secondary leading-relaxed text-sm">
                    {goal.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Divider between Goals and Testimonials */}
      <SectionDivider variant="wave" color="orange" />

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
            >
              Trusted by Indonesian Innovators
            </h2>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
              See how Indonesian businesses and students are transforming with
              our AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="glass-card border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-5 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neon-orange/20 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-neon-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary text-sm sm:text-base">
                      PT Digital Maju
                    </h3>
                    <p className="text-xs sm:text-sm text-text-muted">
                      E-commerce Platform
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                <p className="text-text-secondary italic mb-4 text-sm">
                  "Ashari Tech's AI solutions helped us increase customer
                  engagement by 45% and reduce operational costs by 30%. Their
                  team truly understands Indonesian market needs."
                </p>
                <p className="text-xs sm:text-sm font-semibold text-neon-orange">
                  - Budi Santoso, CEO
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-5 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-orange/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-gold-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary text-sm sm:text-base">
                      Sarah Wijaya
                    </h3>
                    <p className="text-xs sm:text-sm text-text-muted">
                      University Student
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                <p className="text-text-secondary italic mb-4 text-sm">
                  "Brainy Buddy has been a game-changer for my studies. It
                  understands Indonesian curriculum perfectly and helps me
                  prepare for UTBK. My grades improved significantly!"
                </p>
                <p className="text-xs sm:text-sm font-semibold text-gold-orange">
                  - Computer Science, UI
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="p-5 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-magenta-accent/20 flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 text-magenta-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary text-sm sm:text-base">
                      CV Kreatif Nusantara
                    </h3>
                    <p className="text-xs sm:text-sm text-text-muted">
                      Creative Agency
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                <p className="text-text-secondary italic mb-4 text-sm">
                  "The AI tools from Ashari Tech transformed our creative
                  process. We can now deliver projects 2x faster while
                  maintaining quality. Highly recommended for Indonesian SMEs!"
                </p>
                <p className="text-xs sm:text-sm font-semibold text-magenta-accent">
                  - Rina Prasetyo, Founder
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-flex items-center gap-6 sm:gap-8 flex-wrap justify-center">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-neon-orange">
                  500+
                </p>
                <p className="text-xs sm:text-sm text-text-muted">
                  Businesses Transformed
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-gold-orange">
                  50,000+
                </p>
                <p className="text-xs sm:text-sm text-text-muted">
                  Students Helped
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-magenta-accent">
                  98%
                </p>
                <p className="text-xs sm:text-sm text-text-muted">
                  Customer Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider between Testimonials and Contact */}
      <SectionDivider variant="angular" color="gold" />

      {/* Contact Section */}
      <section
        id="contact"
        className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4"
          >
            Get in Touch
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
            Join 500+ Indonesian businesses already transforming with our AI
            solutions. Start your digital transformation journey today.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Card className="glass-card border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center p-5 sm:p-6">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-neon-orange rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    boxShadow:
                      "0 0 20px rgba(255, 153, 0, 0.5), 0 0 40px rgba(255, 153, 0, 0.3), 0 0 60px rgba(255, 153, 0, 0.1)",
                  }}
                >
                  <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg text-text-primary">
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                <a
                  href="mailto:support@ashari.tech"
                  className="text-neon-orange hover:text-neon-orange/80 font-medium transition-colors text-sm sm:text-base"
                >
                  support@ashari.tech
                </a>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center p-5 sm:p-6">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-gold-orange rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    boxShadow:
                      "0 0 20px rgba(255, 179, 71, 0.5), 0 0 40px rgba(255, 179, 71, 0.3), 0 0 60px rgba(255, 179, 71, 0.1)",
                  }}
                >
                  <Github className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg text-text-primary">
                  GitHub
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                <a
                  href="https://github.com/asharitech"
                  className="text-gold-orange hover:text-gold-orange/80 font-medium transition-colors text-sm sm:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/asharitech
                </a>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center p-5 sm:p-6">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-magenta-accent rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    boxShadow:
                      "0 0 20px rgba(233, 75, 138, 0.5), 0 0 40px rgba(233, 75, 138, 0.3), 0 0 60px rgba(233, 75, 138, 0.1)",
                  }}
                >
                  <Instagram className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg text-text-primary">
                  Instagram
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                <a
                  href="https://instagram.com/ashari.tech"
                  className="text-magenta-accent hover:text-magenta-accent/80 font-medium transition-colors text-sm sm:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @ashari.tech
                </a>
              </CardContent>
            </Card>
          </div>

          <Button asChild size="lg" className="btn-neon group text-black">
            <a
              href="mailto:support@ashari.tech"
              className="inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-white drop-shadow-[0_0_4px_rgba(255,159,28,0.8)]" />
              <span>Get Started with Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 glass-card rounded-t-3xl border-t border-glass-border overflow-hidden">
        {/* Mesh pattern background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="footer-mesh"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="40"
                  y2="40"
                  stroke="#FF9900"
                  strokeWidth="0.5"
                />
                <line
                  x1="40"
                  y1="0"
                  x2="0"
                  y2="40"
                  stroke="#E94B8A"
                  strokeWidth="0.5"
                />
                <line
                  x1="20"
                  y1="0"
                  x2="20"
                  y2="40"
                  stroke="#FFB347"
                  strokeWidth="0.5"
                />
                <line
                  x1="0"
                  y1="20"
                  x2="40"
                  y2="20"
                  stroke="#FFB347"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-mesh)" />
          </svg>
        </div>

        {/* Glowing accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-orange to-transparent opacity-50" />

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Logo size="sm" showText={true} glowIntensity="medium" />
            <div className="text-center sm:text-right">
              <p className="text-xs sm:text-sm text-text-secondary">
                © 2025 Ashari Tech. Made with ❤️ in Indonesia
              </p>
              <p className="text-xs text-text-muted mt-1">
                Building the future, one innovation at a time
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Mobile Menu */}
      <GlobalMobileMenu isOpen={isOpen} onClose={closeMenu} />

      {/* Pattern Toggle for Accessibility */}
      <PatternToggle />
    </main>
  );
}

export default function Home() {
  return (
    <MobileNavProvider>
      <HomeContent />
    </MobileNavProvider>
  );
}

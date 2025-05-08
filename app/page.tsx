"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { useRef, useState } from "react"
import {
  BarChart3,
  FileText,
  Mail,
  MonitorPlay,
  Twitter,
  Linkedin,
  Youtube,
  FileEdit,
  Phone,
  Rocket,
  RefreshCw,
} from "lucide-react"

export default function Home() {
  const contactRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      ticker: formData.get('ticker'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!response.ok) throw new Error(result.error || 'Submission failed');
      
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      if (error instanceof Error) {
        console.error('Submission error:', error.message);
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0">
              <img
                src="/images/Logo.png"
                alt="TDM Financial Logo"
                width={100}
                height={47}
                className="h-12 w-auto"
              />
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium text-[#002b45] hover:text-[#f47c26]">
              Services
            </Link>
            <Link href="#why-us" className="text-sm font-medium text-[#002b45] hover:text-[#f47c26]">
              Why Us
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-[#002b45] hover:text-[#f47c26]">
              How It Works
            </Link>
            <Link href="#contact" className="text-sm font-medium text-[#002b45] hover:text-[#f47c26]">
              Contact
            </Link>
          </nav>
          <div>
            <Button
              className="bg-[#f47c26] hover:bg-[#f47c26]/90 text-white"
              onClick={scrollToContact}
            >
              Call Us Now: 406.862.5400
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002b45]">
                  Maximize Investor Visibility with Proven Financial Media Coverage
                </h1>
                <p className="text-xl text-[#444444]">
                  Reach new investors through trusted channels, original content, and multi-platform distribution — all
                  managed by an experienced financial media team.
                </p>
                <Button
                  className="bg-[#f47c26] hover:bg-[#f47c26]/90 text-white text-lg px-8 py-6 h-auto"
                  onClick={scrollToContact}
                >
                  Request a Free Campaign Overview
                </Button>
              </div>
              <div className="hidden lg:block">
                <img
                  src="/images/Hero2.png"
                  alt="Financial Media Coverage"
                  width={600}
                  height={500}
                  className="w-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002b45] mb-4">
                You want investor attention. We deliver it.
              </h2>
              <p className="text-lg text-[#444444] max-w-3xl mx-auto">
                TDM Financial helps public companies connect with the right investors through a comprehensive,
                done-for-you media program.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="h-8 w-8 rounded-full bg-[#002b45]/10 flex items-center justify-center mb-2">
                    <FileText className="h-4 w-4 text-[#002b45]" />
                  </div>
                  <h3 className="text-base font-bold text-[#002b45] mb-1">SECFilings.com</h3>
                  <p className="text-sm text-[#444444]">
                    Original articles and company news posted, distributed, and featured in our filing alerts.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="h-8 w-8 rounded-full bg-[#002b45]/10 flex items-center justify-center mb-2">
                    <MonitorPlay className="h-4 w-4 text-[#002b45]" />
                  </div>
                  <h3 className="text-base font-bold text-[#002b45] mb-1">CFN Media News</h3>
                  <p className="text-sm text-[#444444]">
                    Content posted and distributed to our micro- and small-cap investor audience.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="h-8 w-8 rounded-full bg-[#002b45]/10 flex items-center justify-center mb-2">
                    <Linkedin className="h-4 w-4 text-[#002b45]" />
                  </div>
                  <h3 className="text-base font-bold text-[#002b45] mb-1">Social Campaigns</h3>
                  <p className="text-sm text-[#444444]">
                    Strategic Twitter and LinkedIn exposure to engage with the investment community.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="h-8 w-8 rounded-full bg-[#002b45]/10 flex items-center justify-center mb-2">
                    <Mail className="h-4 w-4 text-[#002b45]" />
                  </div>
                  <h3 className="text-base font-bold text-[#002b45] mb-1">Email Outreach</h3>
                  <p className="text-sm text-[#444444]">
                    Direct distribution to our 50K+ opt-in investor list of active market participants.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="h-8 w-8 rounded-full bg-[#002b45]/10 flex items-center justify-center mb-2">
                    <FileEdit className="h-4 w-4 text-[#002b45]" />
                  </div>
                  <h3 className="text-base font-bold text-[#002b45] mb-1">Custom Content</h3>
                  <p className="text-sm text-[#444444]">
                    Professionally crafted articles, videos, and social media reels tailored to your company.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-3 flex flex-col items-center text-center">
                  <div className="h-8 w-8 rounded-full bg-[#002b45]/10 flex items-center justify-center mb-2">
                    <BarChart3 className="h-4 w-4 text-[#002b45]" />
                  </div>
                  <h3 className="text-base font-bold text-[#002b45] mb-1">Traffic Reporting</h3>
                  <p className="text-sm text-[#444444]">
                    Comprehensive weekly performance insights to track campaign effectiveness.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Ready to Talk CTA Section */}
            <section className="py-4 bg-[#eaf2f7]">
              <div className="container">
                <div className="max-w-[800px] mx-auto text-center">
                  <h2 className="text-2xl font-bold text-[#002b45] mb-2">Ready to Talk?</h2>
                  <p className="text-base text-[#444444] mb-3">
                    Let us show you how TDM Financial can help your company get in front of the right investors.
                  </p>
                  <Button
                    className="bg-[#f47c26] hover:bg-[#f47c26]/90 text-white px-6 py-2 h-auto text-base rounded-md transition-colors"
                    onClick={scrollToContact}
                  >
                    Request More Info
                  </Button>
                </div>
              </div>
            </section>

            {/* Case Studies Section - Moved above Example Content */}
            <div id="case-studies" className="mt-16 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002b45] mb-12 text-center">
                See How We Help Public Companies Get Noticed
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img
                      src="/images/AduroCase.jpeg"
                      alt="Aduro Clean Technologies Case Study"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#002b45] mb-1">Aduro Clean Technologies (NASDAQ: ADUR) (CSE: ACT)</h3>
                    <p className="text-[#444444] mb-4 pb-4 border-b border-gray-200">Emerging plastic recycling technology based in Canada.</p>
                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <p className="text-sm font-medium text-[#002b45] mb-1">Challenge:</p>
                      <p className="text-[#444444]">Grow and engage US investors ahead of and through NASDAQ listing.</p>
                    </div>
                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <p className="text-sm font-medium text-[#002b45] mb-1">Solution:</p>
                      <p className="text-[#444444]">Strategic social media promotions, extensive email outreach, target US retail investors.</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-[#002b45] mb-1">Result:</p>
                      <p className="text-[#444444]">Successful NASDAQ IPO, increased US investor volume.</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img
                      src="/images/CRDLCase.jpeg"
                      alt="Cardiol Therapeutics Case Study"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#002b45] mb-1">Cardiol Therapeutics (NASDAQ: CRDL) (TSX:V: CRDL)</h3>
                    <p className="text-[#444444] mb-4 pb-4 border-b border-gray-200">Clinical stage pharmaceutical developer focused on heart conditions.</p>
                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <p className="text-sm font-medium text-[#002b45] mb-1">Challenge:</p>
                      <p className="text-[#444444]">Articulate value proposition and keep investors engaged through the slow clinical trial process.</p>
                    </div>
                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <p className="text-sm font-medium text-[#002b45] mb-1">Solution:</p>
                      <p className="text-[#444444]">Consistent content creation, disease-specific market overviews, engage biotech investors.</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-[#002b45] mb-1">Result:</p>
                      <p className="text-[#444444]">Supported NASDAQ listing, long-term client, writing for corporate content, leverage deep understanding of Cardiol.</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img
                      src="/images/LISCase.jpg"
                      alt="Lithium South Development Corp Case Study"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#002b45] mb-1">Lithium South Development Corp (TSX-V: LIS)(OTCQB: LISMF)</h3>
                    <p className="text-[#444444] mb-4 pb-4 border-b border-gray-200">Lithium explorer/developer with a proven resource in Argentina's Lithium Triangle.</p>
                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <p className="text-sm font-medium text-[#002b45] mb-1">Challenge:</p>
                      <p className="text-[#444444]">Educate investors about the lithium market and value of LIS' resource ahead of potential exit.</p>
                    </div>
                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <p className="text-sm font-medium text-[#002b45] mb-1">Solution:</p>
                      <p className="text-[#444444]">Industry deep dives, social media videos, green energy targeting.</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-[#002b45] mb-1">Result:</p>
                      <p className="text-[#444444]">Two year engagement through a depressed lithium market leading up to exit LOI.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Example Content */}
            <div id="investor-content" className="mt-16">
              <h3 className="text-2xl font-bold text-[#002b45] mb-6 text-center">
                Investor-Focused Content That Drives Engagement
              </h3>
              <Tabs defaultValue="articles" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="articles">Articles</TabsTrigger>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                  <TabsTrigger value="social">Social Media</TabsTrigger>
                </TabsList>
                <TabsContent value="articles" className="mt-0">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Link 
                      href="https://www.secfilings.com/news/plastic-recycling-solutions-comparing-pyrolysis-and-hydrochemolytic-tm-technology"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="group relative overflow-hidden rounded-lg">
                        <img
                          src="/images/ADURArticle.jpg"
                          alt="ADUR Article"
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                          <h4 className="text-white font-bold">Plastic Recycling Solutions? Comparing Pyrolysis and Hydrochemolytic Technology</h4>
                          <p className="text-white/80 text-sm">Published on SECFilings.com</p>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="https://cfnmedianews.com/the-growing-market-for-recurrent-pericarditis-therapies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="group relative overflow-hidden rounded-lg">
                        <img
                          src="/images/CRDLArticle.jpg"
                          alt="CRDL Article"
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                          <h4 className="text-white font-bold">The Growing Market for Recurrent Pericarditis Therapies</h4>
                          <p className="text-white/80 text-sm">Published on CFN Media News</p>
                        </div>
                      </div>
                    </Link>
                    <Link 
                      href="https://www.secfilings.com/news/why-is-california-s-premier-extraction-company-planting-a-massive-cannabis-farm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="group relative overflow-hidden rounded-lg">
                        <img
                          src="/images/LEEFArticle.jpeg"
                          alt="LEEF Article"
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                          <h4 className="text-white font-bold">Why is California's Premier Extraction Company Planting a Massive Cannabis Farm?</h4>
                          <p className="text-white/80 text-sm">Published on SECFilings.com</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </TabsContent>
                <TabsContent value="videos" className="mt-0">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="group relative overflow-hidden rounded-lg">
                      <video
                        src="/images/Banxa.mp4"
                        poster="/images/BNXAThumbnail.png"
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover"
                        controls
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 pointer-events-none">
                        <h4 className="text-white font-bold">CEO Interview</h4>
                        <p className="text-white/80 text-sm">SECFilings.com</p>
                      </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg">
                      <video
                        src="/images/CRDL.mp4"
                        poster="/images/CRDLThumbnail.png"
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover"
                        controls
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 pointer-events-none">
                        <h4 className="text-white font-bold">Video Press Release</h4>
                        <p className="text-white/80 text-sm">SECFilings.com</p>
                      </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg">
                      <video
                        src="/images/ADUR.mp4"
                        poster="/images/ADURThumbnail.png"
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover"
                        controls
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 pointer-events-none">
                        <h4 className="text-white font-bold">Company Profile</h4>
                        <p className="text-white/80 text-sm">SECFilings.com</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="social" className="mt-0">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="group relative overflow-hidden rounded-lg">
                      <img
                        src="/images/ADURTwitter.png"
                        alt="ADUR Twitter Example"
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Twitter className="h-6 w-6 text-[#1DA1F2]" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                        <h4 className="text-white font-bold">CFN Media Twitter Campaign</h4>
                        <p className="text-white/80 text-sm">
                          Reached 500K+ targeted investors monthly through high-engagement posts and curated amplification
                        </p>
                      </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg">
                      <img
                        src="/images/CRDLTwitter.png"
                        alt="CRDL Twitter Example"
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Twitter className="h-6 w-6 text-[#1DA1F2]" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                        <h4 className="text-white font-bold">SECFilings.com Twitter Campaign</h4>
                        <p className="text-white/80 text-sm">
                          Delivered 500K+ monthly impressions to a qualified audience of institutional and active retail investors
                        </p>
                      </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg">
                      <img
                        src="/images/LEEFLinkedin.png"
                        alt="LEEF LinkedIn Example"
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Linkedin className="h-6 w-6 text-[#0077B5]" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                        <h4 className="text-white font-bold">SECFilings.com LinkedIn Campaign</h4>
                        <p className="text-white/80 text-sm">
                          Delivered curated impressions to tens of thousands of finance professionals through targeted outreach and precision messaging
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Ready to Talk CTA Section - Duplicate */}
        <section className="py-4 bg-[#eaf2f7]">
          <div className="container">
            <div className="max-w-[800px] mx-auto text-center">
              <h2 className="text-2xl font-bold text-[#002b45] mb-2">Ready to Talk?</h2>
              <p className="text-base text-[#444444] mb-3">
                Let us show you how TDM Financial can help your company get in front of the right investors.
              </p>
              <Button
                className="bg-[#f47c26] hover:bg-[#f47c26]/90 text-white px-6 py-2 h-auto text-base rounded-md transition-colors"
                onClick={scrollToContact}
              >
                Request More Info
              </Button>
            </div>
          </div>
        </section>

        {/* How Our Program Works Section */}
        <section id="how-it-works" className="py-16 bg-[#f7f9fa]">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002b45] mb-4">How Our Program Works</h2>
              <p className="text-lg text-[#444444] max-w-3xl mx-auto">
                From first call to full distribution — here's what to expect.
              </p>
            </div>

            {/* Desktop Timeline */}
            <div className="hidden md:block relative max-w-5xl mx-auto">
              {/* Connector Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

              <div className="grid grid-cols-5 gap-4 relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white h-16 w-16 rounded-full border-2 border-[#002b45] flex items-center justify-center mb-4 z-10">
                    <Phone className="h-6 w-6 text-[#002b45]" />
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#002b45] mb-2">Step 1: Intro Call</h3>
                    <p className="text-sm text-[#444444]">
                      We learn about your company, your goals, and ideal investor targets. You learn about our process.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white h-16 w-16 rounded-full border-2 border-[#002b45] flex items-center justify-center mb-4 z-10">
                    <FileEdit className="h-6 w-6 text-[#002b45]" />
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#002b45] mb-2">Step 2: Content Creation</h3>
                    <p className="text-sm text-[#444444]">
                      Our team develops article drafts, video scripts, and supporting assets for your review.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white h-16 w-16 rounded-full border-2 border-[#002b45] flex items-center justify-center mb-4 z-10">
                    <Rocket className="h-6 w-6 text-[#002b45]" />
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#002b45] mb-2">Step 3: Approval & Launch</h3>
                    <p className="text-sm text-[#444444]">
                      Once approved, your campaign launches across web, social, email, and video channels.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white h-16 w-16 rounded-full border-2 border-[#002b45] flex items-center justify-center mb-4 z-10">
                    <BarChart3 className="h-6 w-6 text-[#002b45]" />
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#002b45] mb-2">Step 4: Performance Tracking</h3>
                    <p className="text-sm text-[#444444]">
                      You receive weekly reports with reach, engagement, and traffic insights.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white h-16 w-16 rounded-full border-2 border-[#002b45] flex items-center justify-center mb-4 z-10">
                    <RefreshCw className="h-6 w-6 text-[#002b45]" />
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-[#002b45] mb-2">Step 5: Ongoing Visibility</h3>
                    <p className="text-sm text-[#444444]">
                      We keep your company in front of investors through continued placements and updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6 max-w-md mx-auto">
              {/* Step 1 */}
              <div className="flex items-start">
                <div className="bg-white h-12 w-12 rounded-full border-2 border-[#002b45] flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#002b45]" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex-grow">
                  <h3 className="font-bold text-[#002b45] mb-1">Step 1: Intro Call</h3>
                  <p className="text-sm text-[#444444]">
                    We learn about your company, your goals, and ideal investor targets.
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              <div className="w-0.5 h-6 bg-gray-200 ml-6"></div>

              {/* Step 2 */}
              <div className="flex items-start">
                <div className="bg-white h-12 w-12 rounded-full border-2 border-[#002b45] flex items-center justify-center mr-4 flex-shrink-0">
                  <FileEdit className="h-5 w-5 text-[#002b45]" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex-grow">
                  <h3 className="font-bold text-[#002b45] mb-1">Step 2: Content Creation</h3>
                  <p className="text-sm text-[#444444]">
                    Our team develops article drafts, video scripts, and supporting assets for your review.
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              <div className="w-0.5 h-6 bg-gray-200 ml-6"></div>

              {/* Step 3 */}
              <div className="flex items-start">
                <div className="bg-white h-12 w-12 rounded-full border-2 border-[#002b45] flex items-center justify-center mr-4 flex-shrink-0">
                  <Rocket className="h-5 w-5 text-[#002b45]" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex-grow">
                  <h3 className="font-bold text-[#002b45] mb-1">Step 3: Approval & Launch</h3>
                  <p className="text-sm text-[#444444]">
                    Once approved, your campaign launches across web, social, email, and video channels.
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              <div className="w-0.5 h-6 bg-gray-200 ml-6"></div>

              {/* Step 4 */}
              <div className="flex items-start">
                <div className="bg-white h-12 w-12 rounded-full border-2 border-[#002b45] flex items-center justify-center mr-4 flex-shrink-0">
                  <BarChart3 className="h-5 w-5 text-[#002b45]" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex-grow">
                  <h3 className="font-bold text-[#002b45] mb-1">Step 4: Performance Tracking</h3>
                  <p className="text-sm text-[#444444]">
                    You receive weekly reports with reach, engagement, and traffic insights.
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              <div className="w-0.5 h-6 bg-gray-200 ml-6"></div>

              {/* Step 5 */}
              <div className="flex items-start">
                <div className="bg-white h-12 w-12 rounded-full border-2 border-[#002b45] flex items-center justify-center mr-4 flex-shrink-0">
                  <RefreshCw className="h-5 w-5 text-[#002b45]" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex-grow">
                  <h3 className="font-bold text-[#002b45] mb-1">Step 5: Ongoing Visibility</h3>
                  <p className="text-sm text-[#444444]">
                    We keep your company in front of investors through continued placements and updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="why-us" className="py-16 bg-[#f7f9fa]">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#002b45] mb-6">About TDM Financial</h2>
                  <p className="text-[#444444] text-lg">
                    TDM Financial helps public companies share their story with the right audience. Through our owned
                    media platforms — including SECFilings.com and CFN Media News — we produce and distribute custom
                    financial content across web, email, and social channels. With over a decade of experience in
                    investor-focused media, we've earned a reputation for delivering measurable results and professional
                    coverage.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <div className="relative w-full max-w-md aspect-[3/2]">
                    <img
                      src="/images/about.png"
                      alt="TDM Financial"
                      width={450}
                      height={300}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002b45] mb-12 text-center">
              What Our Clients Are Saying
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Testimonial Card 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <p className="text-[#333333] mb-6">
                  <span className="text-[#f47c26] text-2xl font-serif">"</span>
                  TDM Financial has been amazing to work with, I cannot say enough about their ability to drive results. I wish I had met and hired them a few years earlier...
                  <span className="text-[#f47c26] text-2xl font-serif">"</span>
                </p>
                <p className="text-[#002b45] font-medium">Chris Bunka</p>
                <p className="text-[#666666] text-sm">CEO Lexaria</p>
              </div>

              {/* Testimonial Card 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <p className="text-[#333333] mb-6">
                  <span className="text-[#f47c26] text-2xl font-serif">"</span>
                  Daniel has been a pleasure to work with. In the quickly evolving online investor relations landscape, Daniel and his group at TDM Financial are strategic, innovative, and very professional to work with.
                  <span className="text-[#f47c26] text-2xl font-serif">"</span>
                </p>
                <p className="text-[#002b45] font-medium">John Nesbett</p>
                <p className="text-[#666666] text-sm">Owner of Institutional Marketing Services</p>
              </div>

              {/* Testimonial Card 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <p className="text-[#333333] mb-6">
                  <span className="text-[#f47c26] text-2xl font-serif">"</span>
                  Daniel is truly the man! He is smart, helpful, and one of the few who can get the job done in any environment. I recommend him rain or shine.
                  <span className="text-[#f47c26] text-2xl font-serif">"</span>
                </p>
                <p className="text-[#002b45] font-medium">Chris Lahiji</p>
                <p className="text-[#666666] text-sm">Private Investor & President of LD Micro</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Section */}
        <section id="contact" ref={contactRef} className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#002b45] mb-4">
                  Want to See What We Can Do for You?
                </h2>
                <p className="text-lg text-[#444444]">We'll send you a sample campaign and share coverage options.</p>
              </div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-[#002b45]">
                          Name
                        </label>
                        <Input name="name" id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-[#002b45]">
                          Company
                        </label>
                        <Input name="company" id="company" placeholder="Your company" required />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-[#002b45]">
                          Email
                        </label>
                        <Input name="email" id="email" type="email" placeholder="Your email" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="ticker" className="text-sm font-medium text-[#002b45]">
                          Ticker Symbol (optional)
                        </label>
                        <Input name="ticker" id="ticker" placeholder="e.g., AAPL" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-[#002b45]">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        id="message"
                        placeholder="Tell us about your investor relations goals"
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-[#f47c26] hover:bg-[#f47c26]/90 text-white py-6 h-auto text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Request More Info'}
                    </Button>
                    {submitStatus === 'success' && (
                      <p className="text-green-600 text-center">Thank you for your submission!</p>
                    )}
                    {submitStatus === 'error' && (
                      <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
                    )}
                    <p className="text-xs text-center text-[#444444]">We never share your contact information.</p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-[#002b45] text-white">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex-shrink-0">
                <img
                  src="/images/LogoTransparent.png"
                  alt="TDM Financial Logo"
                  width={100}
                  height={47}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-sm text-white/70 mt-4">
                Connecting public companies with qualified investors through strategic media coverage.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://www.secfilings.com" className="text-sm text-white/70 hover:text-white">
                    SECFilings.com
                  </Link>
                </li>
                <li>
                  <Link href="https://www.cfnmedianews.com" className="text-sm text-white/70 hover:text-white">
                    CFN Media News
                  </Link>
                </li>
                <li>
                  <Link href="#investor-content" className="text-sm text-white/70 hover:text-white">
                    Social Campaigns
                  </Link>
                </li>
                <li>
                  <Link href="#investor-content" className="text-sm text-white/70 hover:text-white">
                    Email Outreach
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#why-us" className="text-sm text-white/70 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="text-sm text-white/70 hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-sm text-white/70 hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-white/70 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-white/70 hover:text-white">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-white/70 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
              <div className="mt-4">
                <p className="text-xs text-center text-[#444444]">Subscribe to our investor newsletter</p>
                <div className="mt-2 flex">
                  <Input
                    placeholder="Your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Button className="ml-2 bg-[#f47c26] hover:bg-[#f47c26]/90">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} TDM Financial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

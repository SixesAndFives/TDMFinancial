"use client"

import Image from "next/image"
import Link from "next/link"
import { BarChart3, Video, TrendingUp, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function ViewOurWorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="border-b py-4">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center justify-center">
            <div className="bg-gray-200 flex items-center justify-center w-[180px] h-[40px] rounded">
              <span className="text-gray-600 font-semibold">SECFilings.com</span>
            </div>
          </Link>
          <div className="flex items-center">
            <div className="flex items-center text-[#2c6da3] font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span className="text-lg">1-800-123-4567</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-[#2c6da3] text-white">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Stock market background"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                See How We Help Public Companies Gain Investor Visibility
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">
                Our tailored investor relations strategies drive measurable engagement and awareness. Explore real-world
                case studies showcasing how SECFilings.com helps companies reach institutional, retail, and market maker
                audiences.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16">
          <div className="container">
            <CaseStudy1 />
            <div className="my-16 border-t border-gray-200"></div>
            <CaseStudy2 />
            <div className="my-16 border-t border-gray-200"></div>
            <CaseStudy3 />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to See These Results for Your Company?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              We help public companies gain visibility and investor interest through content, distribution, and targeted
              outreach.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                className="bg-[#2c6da3] hover:bg-[#1e5a8a] text-white px-8 py-6 text-lg rounded-md"
                onClick={() => (window.location.href = "/#booking-section")}
              >
                Book an Appointment Now
              </Button>
              <Button
                variant="outline"
                className="border-[#2c6da3] text-[#2c6da3] hover:bg-[#eef7ff] px-8 py-6 text-lg rounded-md"
                onClick={() => (window.location.href = "/")}
              >
                Learn More About Our Services
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <Link href="/" className="mb-4 md:mb-0">
              <div className="bg-gray-200 flex items-center justify-center w-[180px] h-[40px] rounded">
                <span className="text-gray-600 font-semibold">SECFilings.com</span>
              </div>
            </Link>
            <div className="flex space-x-6">
              <Link href="#" aria-label="Facebook">
                <div className="bg-[#eef7ff] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#2c6da3]"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
              </Link>
              <Link href="#" aria-label="Instagram">
                <div className="bg-[#eef7ff] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#2c6da3]"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </Link>
              <Link href="#" aria-label="Twitter">
                <div className="bg-[#eef7ff] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#2c6da3]"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </div>
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <div className="bg-[#eef7ff] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#2c6da3]"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-2">Phone: 1-800-123-4567</p>
                <p className="text-gray-600">Email: contact@secfilings.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-gray-900">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-gray-900">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/view-our-work" className="text-gray-600 hover:text-gray-900">
                      View Our Work
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Legal Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} TDM Financial, Inc. All rights reserved.</p>
            <p className="mt-2 text-xs">
              SECFilings.com is a TDM Financial Property. SECFilings.com may be compensated for its services in the form
              of cash-based compensation or equity securities in the companies it writes about, or a combination of the
              two. For a full disclaimer, click here. EDGAR is a trademark of the U.S. Securities and Exchange
              Commission (SEC). SECFilings.com is not affiliated with or approved by the SEC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function CaseStudy1() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
      <div className="md:flex">
        <div className="md:shrink-0 relative h-64 md:h-auto md:w-1/3">
          <Image
            src="/placeholder.svg?height=600&width=400"
            alt="Biotech company case study"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c6da3]/80 to-transparent flex items-center justify-center md:hidden">
            <h3 className="text-white text-2xl font-bold px-6">Increased Retail Investor Engagement</h3>
          </div>
        </div>
        <div className="p-8 md:w-2/3">
          <div className="uppercase tracking-wide text-sm text-[#2c6da3] font-semibold">Case Study 1</div>
          <h3 className="hidden md:block text-2xl font-bold text-gray-900 mb-2">
            Increased Retail Investor Engagement
          </h3>
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Small-Cap Biotech Company</h4>

          <div className="mb-6">
            <h5 className="font-bold text-gray-800 mb-2">Challenge</h5>
            <p className="text-gray-600">Low awareness among retail investors despite groundbreaking research.</p>
          </div>

          <div className="mb-6">
            <h5 className="font-bold text-gray-800 mb-2">Solution</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-[#eef7ff] p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#2c6da3]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-600">Published 4 featured articles in one month.</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-[#eef7ff] p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#2c6da3]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-600">Created a CEO interview video for direct engagement.</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-[#eef7ff] p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#2c6da3]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-600">
                  Boosted exposure via SECFilings.com, CFNMediaNews.com, and targeted Reddit/LinkedIn promotions.
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="font-bold text-gray-800 mb-2">Results</h5>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-[#eef7ff]">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-[#2c6da3]">30%</p>
                  <p className="text-sm text-gray-600">increase in investor-related website traffic</p>
                </CardContent>
              </Card>
              <Card className="bg-[#eef7ff]">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-[#2c6da3]">400+</p>
                  <p className="text-sm text-gray-600">new opt-in investors added to their email list</p>
                </CardContent>
              </Card>
              <Card className="bg-[#eef7ff]">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-[#2c6da3] flex justify-center">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <p className="text-sm text-gray-600">Positive discussion generated on investor forums</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {expanded && (
            <div className="mt-6 border-t border-gray-100 pt-6 animate-in fade-in duration-300">
              <h5 className="font-bold text-gray-800 mb-2">Strategy Details</h5>
              <p className="text-gray-600 mb-4">
                Our comprehensive approach focused on creating high-quality content that highlighted the company's
                unique research and market potential. We identified key investor demographics and tailored our messaging
                to address their specific interests and concerns.
              </p>
              <p className="text-gray-600 mb-4">
                The CEO interview was particularly effective, as it allowed potential investors to connect with
                leadership and understand the company's vision directly. This personal touch helped build trust and
                credibility in a competitive market.
              </p>
              <p className="text-gray-600">
                By leveraging multiple distribution channels, we ensured maximum visibility across different investor
                segments, resulting in a significant increase in engagement metrics across all platforms.
              </p>
            </div>
          )}

          <button
            className="mt-6 flex items-center text-[#2c6da3] font-medium hover:text-[#1e5a8a] transition-colors"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                <span>Show More</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

function CaseStudy2() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
      <div className="md:flex">
        <div className="md:shrink-0 relative h-64 md:h-auto md:w-1/3">
          <Image
            src="/placeholder.svg?height=600&width=400"
            alt="Tech company case study"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c6da3]/80 to-transparent flex items-center justify-center md:hidden">
            <h3 className="text-white text-2xl font-bold px-6">
              Institutional Investor Targeting & Market Maker Interest
            </h3>
          </div>
        </div>
        <div className="p-8 md:w-2/3">
          <div className="uppercase tracking-wide text-sm text-[#2c6da3] font-semibold">Case Study 2</div>
          <h3 className="hidden md:block text-2xl font-bold text-gray-900 mb-2">
            Institutional Investor Targeting & Market Maker Interest
          </h3>
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Mid-Cap Tech Company Entering a Growth Phase</h4>

          <div className="mb-6">
            <h5 className="font-bold text-gray-800 mb-2">Challenge</h5>
            <p className="text-gray-600">Needed institutional exposure to attract larger investors.</p>
          </div>

          <div className="mb-6">
            <h5 className="font-bold text-gray-800 mb-2">Solution</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-[#eef7ff] p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#2c6da3]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-600">
                  Conducted 13F filing analysis to identify potential institutional investors.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-[#eef7ff] p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#2c6da3]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-600">
                  Published peer & industry reports comparing the company to top competitors.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-[#eef7ff] p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#2c6da3]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-600">
                  Sent direct outreach emails to institutional investors using data-driven targeting.
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="font-bold text-gray-800 mb-2">Results</h5>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-[#eef7ff]">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-[#2c6da3]">2</p>
                  <p className="text-sm text-gray-600">new institutional investors added to their shareholder base</p>
                </CardContent>
              </Card>
              <Card className="bg-[#eef7ff]">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-[#2c6da3] flex justify-center">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <p className="text-sm text-gray-600">Increased market maker engagement and stock liquidity</p>
                </CardContent>
              </Card>
              <Card className="bg-[#eef7ff]">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-[#2c6da3]">12%</p>
                  <p className="text-sm text-gray-600">increase in daily trade volume</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {expanded && (
            <div className="mt-6 border-t border-gray-100 pt-6 animate-in fade-in duration-300">
              <h5 className="font-bold text-gray-800 mb-2">Strategy Details</h5>
              <p className="text-gray-600 mb-4">
                Our institutional targeting strategy began with a comprehensive analysis of 13F filings to identify
                institutions that had invested in similar companies or were expanding their portfolios in the tech
                sector. This data-driven approach allowed us to create a highly targeted outreach campaign.
              </p>
              <p className="text-gray-600 mb-4">
                The peer and industry reports were particularly valuable, as they positioned the company within the
                competitive landscape and highlighted their unique value proposition. These reports were designed to
                address the specific due diligence requirements of institutional investors.
              </p>
              <p className="text-gray-600">
                The direct outreach campaign was carefully timed to coincide with the company's growth phase
                announcements, creating a compelling narrative for potential institutional investors. This coordinated
                approach maximized the impact of each touchpoint in the investor journey.
              </p>
            </div>
          )}

          <button
            className="mt-6 flex items-center text-[#2c6da3] font-medium hover:text-[#1e5a8a] transition-colors"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                <span>Show More</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

function CaseStudy3() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
      <div className="md:flex">
        <div className="md:shrink-0 relative h-64 md:h-auto md:w-1/3">
          <Image
            src="/placeholder.svg?height=600&width=400"
            alt="Mining company case study"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c6da3]/80 to-transparent flex items-center justify-center md:hidden">
            <h3 className="text-white text-2xl font-bold px-6">Maximizing Visibility Through Video & Social Media</h3>
          </div>
        </div>
        <div className="p-8 md:w-2/3">
          <div className="uppercase tracking-wide text-sm text-[#2c6da3] font-semibold">Case Study 3</div>
          <h3 className="hidden md:block text-2xl font-bold text-gray-900 mb-2">
            Maximizing Visibility Through Video & Social Media
          </h3>
          <h4 className="text-lg font-semibold text-gray-700 mb-4">
            Micro-Cap Mining Company Preparing for a Public Offering
          </h4>

          <div className="mb-6">
            <h5 className="font-bold text-gray-800 mb-2">Challenge</h5>
            <p className="text-gray-600">Needed visibility in a crowded market before a major announcement.</p>
          </div>

          <div className="mb-6">
            <h5 className="font-bold text-gray-800 mb-2">Solution</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-[#eef7ff] p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#2c6da3]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-600">Created narrated video summaries of key updates.</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-[#eef7ff] p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#2c6da3]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-600">Distributed via Twitter, YouTube, and Google Ads targeting investors.</p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 bg-[#eef7ff] p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#2c6da3]"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-600">Used retargeting ads to reinforce brand visibility.</p>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="font-bold text-gray-800 mb-2">Results</h5>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-[#eef7ff]">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-[#2c6da3]">50,000+</p>
                  <p className="text-sm text-gray-600">video views across social media</p>
                </CardContent>
              </Card>
              <Card className="bg-[#eef7ff]">
                <CardContent className="p-4 text-center">
                  <p className="text-3xl font-bold text-[#2c6da3]">5,000+</p>
                  <p className="text-sm text-gray-600">investor engagements (clicks, comments, shares)</p>
                </CardContent>
              </Card>
              <Card className="bg-[#eef7ff]">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold text-[#2c6da3] flex justify-center">
                    <Video className="h-8 w-8" />
                  </div>
                  <p className="text-sm text-gray-600">Higher visibility before their financing round</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {expanded && (
            <div className="mt-6 border-t border-gray-100 pt-6 animate-in fade-in duration-300">
              <h5 className="font-bold text-gray-800 mb-2">Strategy Details</h5>
              <p className="text-gray-600 mb-4">
                Our video strategy was designed to simplify complex mining information into digestible, engaging content
                that would appeal to both sophisticated and retail investors. The narrated summaries highlighted key
                differentiators and growth potential in a visually compelling format.
              </p>
              <p className="text-gray-600 mb-4">
                The multi-channel distribution approach ensured maximum reach across different investor demographics. By
                leveraging platform-specific features and targeting capabilities, we were able to optimize engagement on
                each platform while maintaining a consistent message.
              </p>
              <p className="text-gray-600">
                The retargeting campaign was particularly effective in building familiarity and trust with potential
                investors who had shown initial interest. This reinforcement strategy created multiple touchpoints
                throughout the investor journey, significantly increasing conversion rates when the financing round was
                announced.
              </p>
            </div>
          )}

          <button
            className="mt-6 flex items-center text-[#2c6da3] font-medium hover:text-[#1e5a8a] transition-colors"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                <span>Show More</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}


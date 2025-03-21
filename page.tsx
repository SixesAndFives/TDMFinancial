"use client"

import Image from "next/image"
import Link from "next/link"
import {
  BarChart3,
  FileText,
  Video,
  Users,
  Target,
  TrendingUp,
  Calendar,
  User,
  Mail,
  Building,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function InvestorRelationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="border-b py-4">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center justify-center">
            <div className="bg-gray-200 flex items-center justify-center w-[180px] h-[40px] rounded">
              <span className="text-gray-600 font-semibold">TDMFinancial.com</span>
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
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="/hero_section.jpg"
              alt="TDM Financial hero background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Expand Your Investor Reach with TDMFinancial.com
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Get your company in front of institutional investors,<br />
                market makers, and retail investors.
              </p>
              <Button
                className="bg-[#2c6da3] hover:bg-[#1e5a8a] text-white px-8 py-6 text-lg rounded-md"
                onClick={() => document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book an Appointment Now
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Investor Relations Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions to enhance your company's visibility and investor engagement
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-[#eef7ff] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-[#2c6da3]" />
                  </div>
                  <CardTitle className="text-xl font-bold">Featured Articles</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    Highlight your company and reach the right investors with professionally written articles
                    distributed across our network.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-[#eef7ff] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-[#2c6da3]" />
                  </div>
                  <CardTitle className="text-xl font-bold">CEO Interviews</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    Directly engage investors with executive insights through professionally conducted and distributed
                    interviews.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-[#eef7ff] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Video className="h-8 w-8 text-[#2c6da3]" />
                  </div>
                  <CardTitle className="text-xl font-bold">Investor-Ready Video Summaries</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    Transform company news into engaging videos that capture attention and drive investor interest.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Market Intelligence Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Maximize Your Investor Awareness</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Data-driven strategies powered by advanced analytics to connect with the right investors
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto bg-[#eef7ff] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-[#2c6da3]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Institutional & Market Maker Targeting</h3>
                <p className="text-gray-600">
                  AI-powered analysis to identify and connect with institutional investors and market makers most likely
                  to be interested in your company.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto bg-[#eef7ff] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-[#2c6da3]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Investor Outreach</h3>
                <p className="text-gray-600">
                  Strategic communication campaigns to engage with potential investors through multiple channels.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto bg-[#eef7ff] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-[#2c6da3]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Peer & Industry Reports</h3>
                <p className="text-gray-600">
                  Comprehensive analysis of your company's position relative to peers and industry trends to highlight
                  investment potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Sales Pitch Section */}
        <section id="why-us" className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why TDMFinancial.com?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-xl mb-6 text-gray-700">
                  To empower public companies with the tools, visibility, and connections they need to succeed in
                  today's competitive capital markets.
                </p>

                <h3 className="text-2xl font-bold mb-4">How We Deliver Results</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-[#eef7ff] p-1 rounded-full">
                      <TrendingUp className="h-5 w-5 text-[#2c6da3]" />
                    </div>
                    <p className="text-gray-700">Extensive network of over 500,000 active investors</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-[#eef7ff] p-1 rounded-full">
                      <TrendingUp className="h-5 w-5 text-[#2c6da3]" />
                    </div>
                    <p className="text-gray-700">
                      Proprietary targeting algorithms to match companies with interested investors
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-[#eef7ff] p-1 rounded-full">
                      <TrendingUp className="h-5 w-5 text-[#2c6da3]" />
                    </div>
                    <p className="text-gray-700">
                      Comprehensive analytics to measure and optimize campaign performance
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-[#eef7ff] p-1 rounded-full">
                      <TrendingUp className="h-5 w-5 text-[#2c6da3]" />
                    </div>
                    <p className="text-gray-700">
                      Expert team with decades of combined experience in investor relations
                    </p>
                  </li>
                </ul>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Investor Relations Strategy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section with Calendly Widget */}
        <section id="booking-section" className="py-16 bg-[#2c6da3]">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to take your investor outreach to the next level?
                </h2>
                <p className="text-xl mb-8">
                  Schedule a consultation with our team to discuss how we can help your company connect with the right
                  investors.
                </p>
                <div className="mb-8">
                  <Link
                    href="/view-our-work"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-white text-[#2c6da3] px-8 py-3 text-lg font-semibold hover:bg-gray-100"
                  >
                    View Our Work
                  </Link>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">Why Book a Consultation?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-white/20 p-1 rounded-full">
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
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <p>Get a personalized investor relations strategy</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-white/20 p-1 rounded-full">
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
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <p>Learn how we can help you reach your target investors</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 bg-white/20 p-1 rounded-full">
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
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <p>Discover our proven process for increasing investor engagement</p>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <h3 className="text-xl font-bold mb-4">What Our Clients Say</h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <p className="italic text-white/90 mb-2">
                        "TDMFinancial.com helped us increase our investor base by 40% in just three months. Their targeted
                        approach delivered measurable results."
                      </p>
                      <p className="text-sm text-white/80 font-medium">— Michael Roberts, CEO of NexGen Therapeutics</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <p className="italic text-white/90 mb-2">
                        "The team's expertise in reaching institutional investors was invaluable during our growth
                        phase. Highly recommended."
                      </p>
                      <p className="text-sm text-white/80 font-medium">— Sarah Chen, CFO of TechVision Solutions</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                      <p className="italic text-white/90 mb-2">
                        "Their video content strategy transformed how we communicate with investors. We saw engagement
                        increase almost immediately."
                      </p>
                      <p className="text-sm text-white/80 font-medium">
                        — David Miller, IR Director at GreenMining Corp
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly Widget Representation */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-[#2c6da3]" />
                    Book Your Consultation
                  </h3>
                </div>

                {/* Calendar Selection */}
                <div className="p-6 border-b border-gray-200">
                  <div className="mb-4">
                    <Label htmlFor="appointment-date" className="text-sm font-medium text-gray-700 mb-1 block">
                      Select a Date
                    </Label>
                    <div className="grid grid-cols-7 gap-1 mb-4">
                      {/* Calendar Header */}
                      {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                        <div key={i} className="text-center text-sm font-medium text-gray-500 py-1">
                          {day}
                        </div>
                      ))}

                      {/* Calendar Days */}
                      {Array.from({ length: 35 }, (_, i) => {
                        const day = i - 3 // Start from previous month
                        const isCurrentMonth = day > 0 && day <= 31
                        const isAvailable =
                          isCurrentMonth && [3, 5, 8, 10, 12, 15, 17, 19, 22, 24, 26, 29, 31].includes(day)

                        return (
                          <div
                            key={i}
                            className={`
                              text-center py-2 rounded-md text-sm
                              ${!isCurrentMonth ? "text-gray-300" : "text-gray-800"}
                              ${isAvailable ? "bg-[#eef7ff] hover:bg-[#2c6da3] hover:text-white cursor-pointer" : ""}
                              ${day === 15 ? "bg-[#2c6da3] text-white" : ""}
                            `}
                          >
                            {day > 0 ? day : ""}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <Label htmlFor="appointment-time" className="text-sm font-medium text-gray-700 mb-1 block">
                      Select a Time
                    </Label>
                    <div className="grid grid-cols-3 gap-2">
                      {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time, i) => (
                        <div
                          key={i}
                          className={`
                            text-center py-2 border rounded-md text-sm cursor-pointer
                            ${time === "10:00 AM" ? "bg-[#2c6da3] text-white border-[#2c6da3]" : "border-gray-200 hover:border-[#2c6da3]"}
                          `}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Information Form */}
                <div className="p-6">
                  <h4 className="font-medium text-gray-800 mb-4">Your Information</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="first-name" className="text-sm font-medium text-gray-700 mb-1 block">
                          First Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input id="first-name" className="pl-10" placeholder="John" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="last-name" className="text-sm font-medium text-gray-700 mb-1 block">
                          Last Name
                        </Label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input id="email" className="pl-10" placeholder="john.doe@company.com" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-1 block">
                        Company
                      </Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input id="company" className="pl-10" placeholder="Your Company, Inc." />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1 block">
                        Phone
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input id="phone" className="pl-10" placeholder="(123) 456-7890" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1 block">
                        What would you like to discuss?
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your investor relations needs..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <Button className="w-full bg-[#2c6da3] hover:bg-[#1e5a8a] text-white py-3 text-lg font-semibold">
                      Confirm Appointment
                    </Button>
                  </div>
                </div>
              </div>
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
                <span className="text-gray-600 font-semibold">TDMFinancial.com</span>
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
                <p className="text-gray-600">Email: contact@tdmfinancial.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
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
            <p> 2023 TDM Financial, Inc. All rights reserved.</p>
            <p className="mt-2 text-xs">
              TDMFinancial.com is a TDM Financial Property. TDMFinancial.com may be compensated for its services in the form
              of cash-based compensation or equity securities in the companies it writes about, or a combination of the
              two. For a full disclaimer, click here. EDGAR is a trademark of the U.S. Securities and Exchange
              Commission (SEC). TDMFinancial.com is not affiliated with or approved by the SEC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

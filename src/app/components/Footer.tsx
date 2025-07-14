"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const [isOpenTop, setIsOpenTop] = useState(false);
  const [isOpenBottom, setIsOpenBottom] = useState(false);

  return (
    <footer className="bg-dark  w-full md:px-28 pt-16 pb-5 px-4 lg:px-28 relative mt-20 md:mt-40">
      <div
        style={{
          backgroundImage: "url('https://bimascore.com/footerbg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full"
      >
        <div className="max-w-7xl mx-auto text-white">
          <div className="flex flex-wrap justify-between">
            <div className="grid grid-cols-12 gap-4">
              {/* Intro Block - Will always take full row on small screens */}
              <div className="col-span-12 sm:col-span-8 md:col-span-6">
                <Image
                  src="https://bimascore.com/logo-white.svg"
                  alt="logo"
                  width={100}
                  height={56}
                />
                <div className="w-full mt-2">
                  <p className="mb-2 text-lg leading-7 font-semibold">
                    Digitalization is the engine of the process and <br />
                    we are making the insurance world more secure, <br />
                    safer, and protected with technology.
                  </p>
                  <button className="border-2 text-[#7544E4] border-[#7544E4] font-semibold h-11 px-4 rounded-[6px] flex items-center hover:bg-purple-700 hover:text-white gap-2 bg-transparent">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>
                    </svg>
                    Book a free call
                  </button>
                  <div className="text-base font-semibold space-y-2 mt-6">
                    <h1>For Insurance Queries:</h1>
                    <p>
                      <a href="mailto:care@bimascore.com">care@bimascore.com</a>
                      <span className="px-2">|</span>
                      <a href="tel:+917065982598">+91 7065982598</a>
                    </p>
                  </div>
                  <div className="border-b mt-4 border-[#FFFFFF1F] w-[50%]" />
                  <div className="flex space-x-6 pt-4 text-[22px]">
                    <a href="#" className="hover:text-purple-400">
                      <FaLinkedin />
                    </a>
                    <a href="#" className="hover:text-pink-400">
                      <FaInstagram />
                    </a>
                    <a href="#" className="hover:text-red-500">
                      <FaYoutube />
                    </a>
                    <a href="#" className="hover:text-blue-500">
                      <FaFacebook />
                    </a>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className="col-span-6 sm:col-span-4 md:col-span-2">
                <h3 className="font-bold text-base mb-2  md:text-lg">
                  Products
                </h3>
                <ul>
                  {[
                    "health",
                    "term",
                    "motor",
                    "cyber",
                    "home",
                    "travel",
                    "pet",
                  ].map((type) => (
                    <li key={type}>
                      <Link
                        href={`/${type}-insurance`}
                        className="group mb-2 relative flex items-center text-base  transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)} Insurance
                        <span className="ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M7 17L17 7M17 7H7M17 7V17"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="col-span-6 sm:col-span-6 md:col-span-2">
                <h3 className="font-bold text-base mb-2  md:text-lg">Tools</h3>
                <ul>
                  <li>
                    <Link
                      href="/compare-insurance-plans"
                      className="group mb-2 relative flex items-center text-base transition-transform duration-300 hover:scale-110 hover:shadow-2xl "
                    >
                      BimaCompare
                      <span className="ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/bima-analyze-your-health-insurance-policy"
                      className="group mb-2 relative flex items-center  transition-transform duration-300 hover:scale-110 hover:shadow-2xl text-base"
                    >
                      Bima Analyze
                      <span className="ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="col-span-6 sm:col-span-6 md:col-span-2">
                <h3 className="font-bold text-base mb-2  md:text-lg">
                  Company
                </h3>
                <ul>
                  {[
                    { label: "About", href: "/about" },
                    { label: "Blogs", href: "/blogs" },
                    { label: "Privacy Policy", href: "/privacy-policy" },
                    {
                      label: "Terms & Conditions",
                      href: "/terms-and-conditions",
                    },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="group mb-2 relative flex items-center text-base transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
                      >
                        {label}
                        <span className="ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M7 17L17 7M17 7H7M17 7V17"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Additional Footer Sections can go here */}

            <div className="flex flex-col w-full mt-12 font-medium text-sm md:text-base">
              <div
                className="cursor-pointer border border-white/10 bg-white/5 shadow-md px-2 py-3 rounded"
                onClick={() => setIsOpenTop(!isOpenTop)}
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 font-semibold gap-4 items-center">
                  <p className="text-left text-sm md:text-lg">Term Insurance</p>
                  <p className="text-left text-sm md:text-lg">
                    Health Insurance
                  </p>
                  <p className="text-left text-sm md:text-lg">
                    Motor Insurance
                  </p>
                  <p className="text-left text-sm md:text-lg">Home Insurance</p>
                </div>
                <div className="flex justify-end mt-[-20px]">
                  {isOpenTop ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-up"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                </div>
              </div>

              {isOpenTop && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm leading-relaxed tracking-wider">
                  <div>
                    <p className="mb-2">
                      Best Term Life Insurance Plans for 2025
                    </p>
                    <p className="mb-2">
                      How to Choose Affordable Term Insurance
                    </p>
                    <p className="mb-2">
                      Top Term Insurance Providers This Year
                    </p>
                    <p className="mb-2">
                      Term Insurance: Coverage You Need Now
                    </p>
                    <p className="mb-2">
                      Top Tips for Buying Travel Insurance Now
                    </p>
                    <p className="mb-2">
                      Why Term Insurance Is Essential for Families
                    </p>
                  </div>
                  <div>
                    <p className="mb-2">
                      Top Affordable Health Insurance Options 2025
                    </p>
                    <p className="mb-2">
                      How to Pick the Best Health Insurance Plan
                    </p>
                    <p className="mb-2">
                      Health Insurance: Coverage for Every Need
                    </p>
                    <p className="mb-2">
                      Best Family Health Insurance Plans Today
                    </p>
                    <p className="mb-2">
                      Save on Health Insurance: Tips for 2025
                    </p>
                    <p className="mb-2">
                      Understanding Health Insurance Benefits Now
                    </p>
                  </div>
                  <div>
                    <p className="mb-2">
                      How to Choose the Right Car Insurance in 2025
                    </p>
                    <p className="mb-2">
                      Top Motor Insurance Plans for Your Vehicle
                    </p>
                    <p className="mb-2">
                      Affordable Car Insurance Options This Year
                    </p>
                    <p className="mb-2">
                      Motor Insurance: Coverage You Can’t Ignore
                    </p>
                    <p className="mb-2">
                      Best Tips for Lowering Car Insurance Costs
                    </p>
                    <p className="mb-2">
                      Affordable Cyber Insurance Options for 2025
                    </p>
                  </div>
                  <div>
                    <p className="mb-2">
                      Essential Tips for Home Insurance Coverage
                    </p>
                    <p className="mb-2">Best Home Insurance Plans for 2025</p>
                    <p className="mb-2">How to Save on Home Insurance Today</p>
                    <p className="mb-2">
                      Top Home Insurance Providers to Consider
                    </p>
                    <p className="mb-2">
                      Home Insurance: Protect Your Property Now
                    </p>
                    <p className="mb-2">
                      Understanding Home Insurance Policies 2025
                    </p>
                  </div>
                </div>
              )}

              <div className="border-b border-[#FFFFFF1F]" />

              <div
                className="cursor-pointer border border-white/10 bg-white/5 shadow-md px-2 py-3 rounded"
                onClick={() => setIsOpenBottom(!isOpenBottom)}
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 font-semibold gap-4 items-center">
                  <p className="text-left text-sm md:text-lg">
                    Travel Insurance
                  </p>
                  <p className="text-left text-sm md:text-lg">
                    Critical Illness Insurance
                  </p>
                  <p className="text-left hidden sm:block text-sm md:text-lg">
                    Cyber Insurance
                  </p>
                  <p className="text-left hidden sm:block text-sm md:text-lg">Pet Insurance</p>
                </div>
                <div className="flex justify-end mt-[-20px]">
                  {isOpenBottom ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-up"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                </div>
              </div>

              {isOpenBottom && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm leading-relaxed tracking-wider mt-4">
                  <div>
                    <p className="mb-2">
                      Must-Have Travel Insurance for International Trips
                    </p>
                    <p className="mb-2">Best Travel Insurance Plans for 2025</p>
                    <p className="mb-2">
                      How to Choose Affordable Travel Insurance
                    </p>
                    <p className="mb-2">
                      Travel Insurance: Coverage for Every Trip
                    </p>
                    <p className="mb-2">
                      Top Tips for Buying Travel Insurance Now
                    </p>
                    <p className="mb-2">
                      Compare Travel Insurance Options This Year
                    </p>
                  </div>
                  <div>
                    <p className="mb-2">
                      Benefits: Understanding Critical Illness Coverage
                    </p>
                    <p className="mb-2">
                      Best Critical Illness Insurance Plans 2025
                    </p>
                    <p className="mb-2">
                      How Critical Illness Insurance Saves Lives
                    </p>
                    <p className="mb-2">
                      Top Providers for Critical Illness Insurance
                    </p>
                    <p className="mb-2">
                      Affordable Critical Illness Insurance Options
                    </p>
                    <p className="mb-2">
                      Why You Need Critical Illness Insurance Now
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <p className="mb-2">
                      Why Businesses Need Cyber Insurance in 2025
                    </p>
                    <p className="mb-2">
                      Best Cyber Insurance Plans for Companies
                    </p>
                    <p className="mb-2">
                      How to Choose Cyber Insurance Coverage
                    </p>
                    <p className="mb-2">
                      Top Cyber Insurance Providers This Year
                    </p>
                    <p className="mb-2">
                      Cyber Insurance: Protect Your Business Now
                    </p>
                    <p className="mb-2">
                      Affordable Cyber Insurance Options for 2025
                    </p>
                  </div>
                  <div  className="hidden sm:block">
                    <p className="mb-2">
                      Best Pet Insurance Plans for Your Furry Friends
                    </p>
                    <p className="mb-2">
                      How to Choose Affordable Pet Insurance
                    </p>
                    <p className="mb-2">Top Pet Insurance Providers for 2025</p>
                    <p className="mb-2">
                      Pet Insurance: Coverage Your Pet Needs
                    </p>
                    <p className="mb-2">
                      Save on Pet Insurance: Tips for This Year
                    </p>
                    <p className="mb-2">
                      Why Pet Insurance is Essential for Owners
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 text-sm md:text-[16px]">
              <p>
                Alps Insurance Brokers Pvt Ltd IRDAI Registration: 943 License
                Category: Direct Broker (Life & General) License Validity:
                27-02-2027 CIN: U66220DL2023PTC411530 | COI: IRDAI/DB1062/2023
              </p>
              <div>
                <p>
                  Disclaimer: The Information Contained In This Website Is
                  Presented Purely For Information Purposes Only Provided As
                  Service To The Internet Community At Large. It Does Not
                  Constitute Insurance Advice And We Do Not Guarantee The
                  Accuracy, Adequacy Or The Completeness Of The Information
                  Contained Here.
                </p>
                <p className="mt-5">
                  Copyright © 2025 Made with 💜 for India by Alps Insurance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

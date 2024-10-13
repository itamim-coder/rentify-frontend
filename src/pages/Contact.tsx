import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

function Contact() {
  return (
    <>
      {" "}
      <body className="font-inter">
        <main>
          <section className="w-full xl:py-24 lg:py-20 py-12 bg-slate-50 border-b border-gray-300">
            <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-16 xl:gap-x-24 gap-y-14 max-w-lg md:max-w-3xl lg:max-w-full mx-auto">
                <div>
                  <h1 className="font-manrope text-gray-900 md:text-5xl text-4xl font-bold leading-tight mb-8 lg:text-left text-center">
                    Contact Us
                  </h1>
                  <p className="text-gray-900 text-lg font-normal leading-7 lg:text-left text-center">
                    We're here to assist you! Whether you have questions,
                    feedback, or inquiries, our team is ready to help.
                  </p>
                  <div className="my-12 grid md:grid-cols-2 grid-cols-1 md:gap-x-8 gap-y-8">
                    <div className="rounded-2xl border border-gray-200 bg-white p-7 group transition-all duration-500 hover:bg-red-600">
                      <a
                        href="javascript:;"
                        className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-white cursor-pointer"
                      >
                        <svg
                          className="fill-white transition-all duration-500 group-hover:fill-red-600"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.84758 7.58462L4.63863 7.46524L4.63855 7.46473L3.84758 7.58462ZM23.693 27.4085L23.5227 28.1902L23.5232 28.1903L23.693 27.4085ZM24.3879 20.598L24.6727 19.8504L24.3879 20.598ZM10.8408 7.07147L10.0919 7.35301V7.35301L10.8408 7.07147ZM11.6654 10.4021L10.879 10.2555L11.6654 10.4021ZM11.535 8.91814L12.2839 8.6366L11.535 8.91814ZM11.2622 15.0393L11.9827 14.6915L11.2622 15.0393ZM11.0857 13.5119L11.8721 13.6585L11.0857 13.5119ZM18.0722 20.3301L17.92 19.5447L18.0722 20.3301ZM16.3099 20.069L15.9211 20.7682L16.3099 20.069ZM21.0165 19.7596L21.1687 20.545L21.0165 19.7596ZM22.5311 19.8906L22.2463 20.6382L22.5311 19.8906ZM18.8963 2.79564C18.4577 2.74255 18.0591 3.05509 18.006 3.49372C17.9529 3.93234 18.2654 4.33096 18.7041 4.38405L18.8963 2.79564ZM26.5498 12.1082C26.6098 12.546 27.0132 12.8523 27.4509 12.7923C27.8887 12.7324 28.195 12.329 28.135 11.8912L26.5498 12.1082ZM18.5736 7.39616C18.1349 7.34387 17.7369 7.65713 17.6846 8.09585C17.6323 8.53457 17.9455 8.93262 18.3843 8.98491L18.5736 7.39616ZM21.9524 12.4978C22.0116 12.9356 22.4144 13.2426 22.8523 13.1835C23.2901 13.1244 23.5972 12.7215 23.538 12.2836L21.9524 12.4978ZM20.8643 18.9742L17.92 19.5447L18.2244 21.1155L21.1687 20.545L20.8643 18.9742ZM16.6987 19.3699C14.4144 18.0995 12.9397 16.6739 11.9827 14.6915L10.5418 15.387C11.6752 17.7349 13.423 19.3789 15.9211 20.7682L16.6987 19.3699ZM11.8721 13.6585L12.4519 10.5487L10.879 10.2555L10.2992 13.3652L11.8721 13.6585ZM12.2839 8.6366L11.5896 6.78994L10.0919 7.35301L10.7862 9.19967L12.2839 8.6366ZM8.24537 4.4745H5.932V6.0745H8.24537V4.4745ZM5.932 4.4745C4.22338 4.4745 2.78466 5.91024 3.05662 7.70451L4.63855 7.46473C4.52906 6.74236 5.09463 6.0745 5.932 6.0745V4.4745ZM3.05654 7.704C3.53868 10.8987 4.97217 16.8037 9.24397 21.0755L10.3753 19.9441C6.46975 16.0385 5.10446 10.552 4.63863 7.46524L3.05654 7.704ZM9.24397 21.0755C13.7053 25.5368 20.0794 27.4401 23.5227 28.1902L23.8632 26.6269C20.4991 25.894 14.5022 24.0709 10.3753 19.9441L9.24397 21.0755ZM23.5232 28.1903C25.3821 28.594 26.9735 27.1319 26.9735 25.323H25.3735C25.3735 26.2068 24.6333 26.7941 23.8627 26.6268L23.5232 28.1903ZM26.9735 25.323V23.1891H25.3735V25.323H26.9735ZM24.6727 19.8504L22.816 19.143L22.2463 20.6382L24.1031 21.3456L24.6727 19.8504ZM26.9735 23.1891C26.9735 22.7447 26.9746 22.3461 26.938 22.0163C26.8991 21.6666 26.8117 21.3186 26.5874 20.9931L25.2699 21.901C25.2904 21.9307 25.3254 21.9915 25.3478 22.1929C25.3723 22.4141 25.3735 22.709 25.3735 23.1891H26.9735ZM24.1031 21.3456C24.5517 21.5165 24.8269 21.6226 25.0249 21.7243C25.2051 21.8169 25.2494 21.8712 25.2699 21.901L26.5874 20.9931C26.3631 20.6676 26.069 20.462 25.7561 20.3012C25.4609 20.1495 25.088 20.0087 24.6727 19.8504L24.1031 21.3456ZM11.5896 6.78994C11.4325 6.37206 11.2927 5.99701 11.1416 5.70004C10.9815 5.38519 10.7761 5.08922 10.4498 4.86331L9.53905 6.17878C9.56885 6.19941 9.62325 6.24403 9.71552 6.42544C9.81689 6.62473 9.92222 6.90162 10.0919 7.35301L11.5896 6.78994ZM8.24537 6.0745C8.7276 6.0745 9.02385 6.07565 9.24606 6.1004C9.44834 6.12293 9.50925 6.15814 9.53905 6.17878L10.4498 4.86331C10.1236 4.6374 9.77426 4.54934 9.42319 4.51023C9.09205 4.47335 8.6918 4.4745 8.24537 4.4745V6.0745ZM12.4519 10.5487C12.5145 10.2131 12.5798 9.89958 12.5514 9.57655L10.9575 9.71661C10.9624 9.77151 10.9573 9.83573 10.879 10.2555L12.4519 10.5487ZM10.7862 9.19967C10.9365 9.59936 10.9527 9.6617 10.9575 9.71661L12.5514 9.57655C12.523 9.25351 12.404 8.95621 12.2839 8.6366L10.7862 9.19967ZM11.9827 14.6915C11.8158 14.3457 11.8038 14.304 11.7945 14.2344L10.2085 14.4461C10.2579 14.8157 10.4002 15.0936 10.5418 15.387L11.9827 14.6915ZM10.2992 13.3652C10.2314 13.7288 10.1587 14.0724 10.2085 14.4461L11.7945 14.2344C11.7857 14.1687 11.7886 14.1065 11.8721 13.6585L10.2992 13.3652ZM17.92 19.5447C17.4 19.6455 17.3246 19.6491 17.2535 19.6378L17.0016 21.2179C17.414 21.2836 17.8072 21.1964 18.2244 21.1155L17.92 19.5447ZM15.9211 20.7682C16.2665 20.9602 16.5915 21.1525 17.0016 21.2179L17.2535 19.6378C17.1803 19.6261 17.1213 19.6048 16.6987 19.3699L15.9211 20.7682ZM21.1687 20.545C21.5971 20.4619 21.6627 20.4564 21.7188 20.4613L21.8567 18.8672C21.5267 18.8387 21.2068 18.9078 20.8643 18.9742L21.1687 20.545ZM22.816 19.143C22.49 19.0188 22.1867 18.8958 21.8567 18.8672L21.7188 20.4613C21.7748 20.4661 21.8385 20.4828 22.2463 20.6382L22.816 19.143ZM18.7041 4.38405C22.8983 4.8917 25.9767 7.92241 26.5498 12.1082L28.135 11.8912C27.4633 6.98479 23.8126 3.39069 18.8963 2.79564L18.7041 4.38405ZM18.3843 8.98491C20.2949 9.21265 21.6949 10.5909 21.9524 12.4978L23.538 12.2836C23.1828 9.65387 21.2086 7.71023 18.5736 7.39616L18.3843 8.98491Z"
                            fill=""
                          />
                        </svg>
                      </a>
                      <h5 className="text-gray-900 text-xl font-semibold leading-8 mb-3 transition-all duration-500 group-hover:text-white">
                        Support
                      </h5>
                      <p className="text-gray-500 text-sm font-normal leading-5 transition-all duration-500 group-hover:text-white">
                        We Provide Various Methods For You To Carry Out All
                        Transactions Related To Your Finances
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-white p-7 group transition-all duration-500 hover:bg-red-600">
                      <a
                        href="javascript:;"
                        className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-white cursor-pointer"
                      >
                        <svg
                          className="stroke-white transition-all duration-500 group-hover:stroke-red-600"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.5 10.25H15.25M8.5 15.25H21.5M10.6687 23.75C9.72032 23.75 9.24614 23.75 8.81368 23.916C7.17055 24.5465 4.98937 27.2387 3.24145 26.4602C2.5 26.13 2.5 24.9239 2.5 22.5116C2.5 20.6459 2.5 15.9678 2.5 11.7499C2.5 7.97876 2.5 6.09318 3.67157 4.92161C4.84314 3.75004 6.72865 3.75004 10.4997 3.75003C13.4302 3.75003 16.6564 3.75002 19.5037 3.75002C23.2725 3.75001 25.1568 3.75 26.3284 4.92158C27.5 6.09315 27.5 7.97875 27.5 11.7499C27.5 13.0803 27.5 14.4198 27.5 15.7501C27.5 19.5213 27.5 21.4069 26.3284 22.5785C25.1569 23.75 23.2712 23.75 19.5 23.75C16.5562 23.75 13.6125 23.75 10.6687 23.75Z"
                            stroke=""
                            stroke-width="2"
                            stroke-linecap="round"
                          />
                        </svg>
                      </a>
                      <h5 className="text-gray-900 text-xl font-semibold leading-8 mb-3 transition-all duration-500 group-hover:text-white">
                        Pagedone Blog
                      </h5>
                      <p className="text-gray-500 text-sm font-normal leading-5 transition-all duration-500 group-hover:text-white">
                        We have the most up-to-date security to support the
                        security of all our customers in carrying out all
                        transactions.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-slate-200 pt-12 flex lg:justify-start justify-center">
                    <div className="flex gap-x-1 border-r border-indigo-300 items-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_12167_9192)">
                          <path
                            d="M10.9239 2.78195C11.3641 1.89005 12.6359 1.89005 13.0761 2.78195L15.2475 7.18173C15.4223 7.5359 15.7602 7.78139 16.151 7.83818L21.0065 8.54372C21.9907 8.68674 22.3838 9.89631 21.6715 10.5905L18.1581 14.0153C17.8753 14.291 17.7462 14.6882 17.813 15.0775L18.6424 19.9133C18.8105 20.8936 17.7816 21.6411 16.9013 21.1783L12.5584 18.8951C12.2088 18.7113 11.7912 18.7113 11.4416 18.8951L7.09875 21.1783C6.21839 21.6411 5.18947 20.8936 5.3576 19.9133L6.18701 15.0775C6.25378 14.6882 6.12472 14.291 5.8419 14.0153L2.32846 10.5906C1.61624 9.89631 2.00925 8.68674 2.99352 8.54372L7.84897 7.83818C8.23982 7.78139 8.5777 7.5359 8.75249 7.18173L10.9239 2.78195Z"
                            fill="#F59E0B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_12167_9192">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_12167_9192)">
                          <path
                            d="M10.9239 2.78195C11.3641 1.89005 12.6359 1.89005 13.0761 2.78195L15.2475 7.18173C15.4223 7.5359 15.7602 7.78139 16.151 7.83818L21.0065 8.54372C21.9907 8.68674 22.3838 9.89631 21.6715 10.5905L18.1581 14.0153C17.8753 14.291 17.7462 14.6882 17.813 15.0775L18.6424 19.9133C18.8105 20.8936 17.7816 21.6411 16.9013 21.1783L12.5584 18.8951C12.2088 18.7113 11.7912 18.7113 11.4416 18.8951L7.09875 21.1783C6.21839 21.6411 5.18947 20.8936 5.3576 19.9133L6.18701 15.0775C6.25378 14.6882 6.12472 14.291 5.8419 14.0153L2.32846 10.5906C1.61624 9.89631 2.00925 8.68674 2.99352 8.54372L7.84897 7.83818C8.23982 7.78139 8.5777 7.5359 8.75249 7.18173L10.9239 2.78195Z"
                            fill="#F59E0B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_12167_9192">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_12167_9192)">
                          <path
                            d="M10.9239 2.78195C11.3641 1.89005 12.6359 1.89005 13.0761 2.78195L15.2475 7.18173C15.4223 7.5359 15.7602 7.78139 16.151 7.83818L21.0065 8.54372C21.9907 8.68674 22.3838 9.89631 21.6715 10.5905L18.1581 14.0153C17.8753 14.291 17.7462 14.6882 17.813 15.0775L18.6424 19.9133C18.8105 20.8936 17.7816 21.6411 16.9013 21.1783L12.5584 18.8951C12.2088 18.7113 11.7912 18.7113 11.4416 18.8951L7.09875 21.1783C6.21839 21.6411 5.18947 20.8936 5.3576 19.9133L6.18701 15.0775C6.25378 14.6882 6.12472 14.291 5.8419 14.0153L2.32846 10.5906C1.61624 9.89631 2.00925 8.68674 2.99352 8.54372L7.84897 7.83818C8.23982 7.78139 8.5777 7.5359 8.75249 7.18173L10.9239 2.78195Z"
                            fill="#F59E0B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_12167_9192">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_12167_9192)">
                          <path
                            d="M10.9239 2.78195C11.3641 1.89005 12.6359 1.89005 13.0761 2.78195L15.2475 7.18173C15.4223 7.5359 15.7602 7.78139 16.151 7.83818L21.0065 8.54372C21.9907 8.68674 22.3838 9.89631 21.6715 10.5905L18.1581 14.0153C17.8753 14.291 17.7462 14.6882 17.813 15.0775L18.6424 19.9133C18.8105 20.8936 17.7816 21.6411 16.9013 21.1783L12.5584 18.8951C12.2088 18.7113 11.7912 18.7113 11.4416 18.8951L7.09875 21.1783C6.21839 21.6411 5.18947 20.8936 5.3576 19.9133L6.18701 15.0775C6.25378 14.6882 6.12472 14.291 5.8419 14.0153L2.32846 10.5906C1.61624 9.89631 2.00925 8.68674 2.99352 8.54372L7.84897 7.83818C8.23982 7.78139 8.5777 7.5359 8.75249 7.18173L10.9239 2.78195Z"
                            fill="#F59E0B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_12167_9192">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_9225_63160)">
                          <path
                            d="M10.9239 2.78195C11.3641 1.89005 12.6359 1.89005 13.0761 2.78195L15.2475 7.18173C15.4223 7.5359 15.7602 7.78139 16.151 7.83818L21.0065 8.54372C21.9907 8.68674 22.3838 9.89631 21.6715 10.5905L18.1581 14.0153C17.8753 14.291 17.7462 14.6882 17.813 15.0775L18.6424 19.9133C18.8105 20.8936 17.7816 21.6411 16.9013 21.1783L12.5584 18.8951C12.2088 18.7113 11.7912 18.7113 11.4416 18.8951L7.09875 21.1783C6.21839 21.6411 5.18947 20.8936 5.3576 19.9133L6.18701 15.0775C6.25378 14.6882 6.12472 14.291 5.8419 14.0153L2.32846 10.5906C1.61624 9.89631 2.00925 8.68674 2.99352 8.54372L7.84897 7.83818C8.23982 7.78139 8.5777 7.5359 8.75249 7.18173L10.9239 2.78195Z"
                            fill="#818CF8"
                          />
                          <g clip-path="url(#clip1_9225_63160)">
                            <path
                              d="M10.9239 2.78195C11.3641 1.89005 12.6359 1.89005 13.0761 2.78195L15.2475 7.18173C15.4223 7.5359 15.7602 7.78139 16.151 7.83818L21.0065 8.54372C21.9907 8.68674 22.3838 9.89631 21.6715 10.5905L18.1581 14.0153C17.8753 14.291 17.7462 14.6882 17.813 15.0775L18.6424 19.9133C18.8105 20.8936 17.7816 21.6411 16.9013 21.1783L12.5584 18.8951C12.2088 18.7113 11.7912 18.7113 11.4416 18.8951L7.09875 21.1783C6.21839 21.6411 5.18947 20.8936 5.3576 19.9133L6.18701 15.0775C6.25378 14.6882 6.12472 14.291 5.8419 14.0153L2.32846 10.5906C1.61624 9.89631 2.00925 8.68674 2.99352 8.54372L7.84897 7.83818C8.23982 7.78139 8.5777 7.5359 8.75249 7.18173L10.9239 2.78195Z"
                              fill="#F59E0B"
                            />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_9225_63160">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                          <clipPath id="clip1_9225_63160">
                            <rect width="15.6" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <a
                        href="javascript:;"
                        className="text-indigo-900 text-lg font-normal leading-7 pl-2.5 pr-3.5"
                      >
                        4.9 Rating
                      </a>
                    </div>
                    <a
                      href="javascript:;"
                      className="pl-3.5 text-indigo-900 text-lg font-normal leading-7"
                    >
                      163 Reviews on{" "}
                      <span className="text-emerald-500"> Trustpilot </span>
                    </a>
                  </div>
                </div>
                <form
                  action=""
                  className="h-fit bg-white border border-slate-200 rounded-2xl lg:p-12 p-8 w-full max-w-lg md:max-w-3xl lg:max-w-full mx-auto"
                >
                  <div className="relative mb-8">
                    <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
                      Name{" "}
                    </label>
                    <div className="relative text-gray-500 focus-within:text-gray-900">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 21C20 18.1716 20 16.7574 19.1213 15.8787C18.2426 15 16.8284 15 14 15H10C7.17157 15 5.75736 15 4.87868 15.8787C4 16.7574 4 18.1716 4 21M12.1441 11C12.0541 10.991 11.9459 10.991 11.8468 11C9.7027 10.9278 8 9.16911 8 7.00451C8 4.79481 9.78378 3 12 3C14.2072 3 16 4.79481 16 7.00451C15.991 9.16911 14.2883 10.9278 12.1441 11Z"
                            stroke="#111827"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="default-search"
                        className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                        placeholder="harsh"
                      />
                    </div>
                  </div>
                  <div className="relative mb-8">
                    <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
                      Email{" "}
                    </label>
                    <div className="relative text-gray-500 focus-within:text-gray-900">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.25201 7L8.15881 10.8953C10.2686 12.1612 11.3235 12.7941 12.4825 12.7665C13.6416 12.739 14.6652 12.0566 16.7124 10.6917L21.748 7M10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20Z"
                            stroke="#6B7280"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="default-search"
                        className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                        placeholder="Enter Your Email"
                      />
                    </div>
                  </div>
                  <div className="relative mb-8">
                    <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
                      Message{" "}
                    </label>
                    <div className="relative ">
                      <textarea
                        className="block w-full h-40 px-4 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none"
                        placeholder="Write your message"
                      ></textarea>
                    </div>
                  </div>
                  <button className="w-full h-12 rounded-full bg-red-500 hover:bg-red-600 transition-all duration-700 shadow-sm text-white text-base font-semibold leading-6 flex items-center justify-center">
                    Send message{" "}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                        stroke="white"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </section>
          <section className="w-full xl:py-28 lg:py-20 py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="lg:mb-16 mb-10">
                <h6 className="text-lg text-red-600 font-medium text-center mb-2 leading-7">
                  FAQs
                </h6>
                <h2 className="lg:text-4xl text-3xl font-manrope text-center font-bold text-gray-900 leading-tight ">
                  {" "}
                  Frequently asked questions{" "}
                </h2>
              </div>
              <div className="accordion-group w-full max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
                <div
                  className="accordion p-6 border-b border-solid bg-gray-50 border-gray-200 transition-all duration-500 active:rounded-xl active:bg-gray-50 active:border-transparent"
                  id="basic-heading-one-general"
                >
                  <button
                    className="accordion-toggle group  inline-flex items-center justify-between text-lg text-gray-900 font-medium leading-7 w-full transition duration-500 text-left lg:text-lg hover:text-gray-900 accordion-active:text-gray-900"
                    aria-controls="basic-collapse-one-general"
                  >
                    <h5> How can I reset my password? </h5>
                    <svg
                      className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 15L10.5858 10.4142C11.2525 9.74755 11.5858 9.41421 12 9.41421C12.4142 9.41421 12.7475 9.74755 13.4142 10.4142L18 15"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-one-general"
                    className="accordion-content w-full  px-0 overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                    aria-labelledby="basic-heading-one-general"
                  >
                    <p className="text-base text-gray-600 font-normal leading-6">
                      To reset your password, go to the login page and click on
                      the "Forgot password" link. Enter the email address
                      associated with your account, and you will receive an
                      email with instructions on how to reset your password.
                      Follow the instructions in the email to create a new
                      password.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion p-6 border-b border-solid border-gray-200 transition-all duration-500 active:rounded-xl active:bg-gray-50 active:border-transparent"
                  id="basic-heading-two-with-arrow"
                >
                  <button
                    className="accordion-toggle group  inline-flex items-center justify-between text-base leading-8 text-gray-500 w-full transition duration-500 text-left lg:text-lg hover:text-gray-900 accordion-active:text-gray-900"
                    aria-controls="basic-collapse-two-with-arrow"
                  >
                    <h5> How do I change my privacy settings? </h5>
                    <svg
                      className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow"
                    className="accordion-content w-full hidden px-0 overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                    aria-labelledby="basic-heading-two-with-arrow"
                  >
                    <p className="text-base text-gray-600 leading-6">
                      To reset your password, go to the login page and click on
                      the "Forgot password" link. Enter the email address
                      associated with your account, and you will receive an
                      email with instructions on how to reset your password.
                      Follow the instructions in the email to create a new
                      password.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion p-6 border-b border-solid border-gray-200 transition-all duration-500 active:rounded-xl active:bg-gray-50 active:border-transparent"
                  id="basic-heading-three-with-arrow"
                >
                  <button
                    className="accordion-toggle group  inline-flex items-center justify-between text-base lg:text-lg leading-8 text-gray-500 w-full transition duration-500 text-left hover:text-gray-900 accordion-active:text-gray-900"
                    aria-controls="basic-collapse-three-with-arrow"
                  >
                    <h5> What is the payment process? </h5>
                    <svg
                      className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow"
                    className="accordion-content w-full hidden px-0 overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                    aria-labelledby="basic-heading-three-with-arrow"
                  >
                    <p className="text-base text-gray-600 leading-6">
                      To reset your password, go to the login page and click on
                      the "Forgot password" link. Enter the email address
                      associated with your account, and you will receive an
                      email with instructions on how to reset your password.
                      Follow the instructions in the email to create a new
                      password.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion p-6 transition-all duration-500 active:rounded-xl active:bg-gray-50"
                  id="basic-heading-four-with-arrow"
                >
                  <button
                    className="accordion-toggle group  inline-flex items-center justify-between text-base lg:text-lg leading-8 text-gray-500 w-full transition duration-500 text-left hover:text-gray-900 accordion-active:text-gray-900"
                    aria-controls="basic-collapse-four-with-arrow"
                  >
                    <h5> How do I find my purchase history? </h5>
                    <svg
                      className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow"
                    className="accordion-content w-full hidden px-0 overflow-hidden transition-[height] duration-300 pr-4 mt-3"
                    aria-labelledby="basic-heading-four-with-arrow"
                  >
                    <p className="text-base text-gray-600 leading-6">
                      To reset your password, go to the login page and click on
                      the "Forgot password" link. Enter the email address
                      associated with your account, and you will receive an
                      email with instructions on how to reset your password.
                      Follow the instructions in the email to create a new
                      password.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </>
  );
}

export default Contact;

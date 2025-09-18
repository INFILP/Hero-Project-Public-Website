"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import React from "react"

const StatsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselTexts = [
    {
      id: 1,
      text: "We All Need Transparency - View a summary of team member efforts with ",
      boldText: "+Summaries Boost",
    },
    {
      id: 2,
      text: "We All Need Encouragement - Check Uplift for new ",
      boldText: "Inspirational Quotes",
    },
    {
      id: 3,
      text: "We All Need Connection - Let ",
      boldText: "team members know",
      afterBold:
        " if you'd like more info on a care activity through Let's Connect",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="sm:px-4 py-10 md:py-8 flex flex-col">
      <div className="flex items-end gap-4 xs:gap-4">
        <div className="rounded-4xl bg-[#FFEEEC] w-[170px] xs:w-[190px] sm:w-[220px] sm:h-[160px] lg:w-[220px] xl:w-[278px] h-[123px] lg:h-[160px] xl:h-[201px] flex flex-col justify-between">
          <div className="px-4 pt-4 sm:px-6 sm:pt-6">
            <p className="text-prime text-base lg:text-xl xl:text-[24px] font-sfpro-medium">
              Care <span className="text-[#FF897B]">Together</span>
            </p>
            <p className="text-prime text-xs sm:text-sm xl:text-lg font-sfpro-regular mt-1">
              First, do something to{" "}
              <span className="font-sfpro-bold">help</span> your Hero
            </p>
          </div>
          <div className="ml-auto w-7 h-7 sm:w-8 sm:h-8 xl:w-12 xl:h-12 relative right-3 bottom-3">
            <Image
              src="/images/heart.png"
              alt="Heart Icon"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Mobile Image */}
        <div className="flex items-center justify-center inset-x-0 overflow-hidden w-[170px] xs:w-[190px] sm:w-[250px] lg:w-[260px] xl:w-[320px] h-44 sm:h-52 lg:h-64 xl:h-80">
          <div className="relative">
            <div
              className="absolute bottom-0 -left-1/4 transform translate-x-1/4 xl:translate-x-1/5 w-[170px] xs:w-[190px] sm:w-[250px] lg:w-[260px] xl:w-[320px] h-[180px] xs:h-[215px] sm:h-[280px] xl:h-[350px] rounded-tl-4xl -z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(77, 163, 174, 1) 0%, rgba(113, 181, 190, 1) 100%)",
              }}
            ></div>

            <Image
              src="/images/gifSimmulator.gif"
              alt="Mobile UI"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="w-[10.5rem] xs:w-[18.5rem] h-auto object-contain relative left-2 -bottom-16 xs:-bottom-20 sm:-bottom-30 z-10"
            />
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between mt-4 sm:mt-6 gap-4 xs:gap-4">
        {/* Bottom Left Card */}
        <div className="rounded-b-4xl rounded-tl-4xl bg-[#F4F2FF] w-[170px] xs:w-[190px] sm:w-[220px] sm:h-[160px] lg:w-[220px] xl:w-[278px] h-[153px] lg:h-[160px] xl:h-[211px] flex flex-col justify-between">
          <div className="px-3 pt-4 sm:p-6">
            <p className="text-base lg:text-xl xl:text-[24px] font-sfpro-medium">
              Inspire <span className="text-[#A096FF]">Together</span>
            </p>
            <p className="text-prime text-sm sm:text-sm xl:text-lg font-sfpro-regular mt-1">
              Then share and track activity on the{" "}
              <span className=" font-sfpro-bold">Event Board</span> and inspire
              your team
            </p>
          </div>
          <div className="ml-auto w-7 h-7 sm:w-8 sm:h-8 xl:w-12 xl:h-12 relative right-3 bottom-3">
            <Image
              src="/images/uplift.png"
              alt="Uplift Icon"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Right Card */}
        <div className="rounded-b-4xl rounded-tr-4xl bg-[#2B2B2B] w-[170px] xs:w-[190px] h-[200px] xs:h-[183px] sm:w-[259px] xl:w-[328px] sm:h-[180px] xl:h-[228px] flex flex-col justify-between">
          <div className="px-3 pt-4 sm:p-6 overflow-hidden">
            <p className="text-white text-base lg:text-xl xl:text-[24px] font-sfpro-medium">
              <span className="text-[#A2A2A2]">But Wait,</span> There's More!
            </p>

            <div className="mt-1 relative overflow-hidden">
              <div className="relative">
                {carouselTexts.map((item, index) => (
                  <div
                    key={item.id}
                    className={`absolute w-full transition-all duration-500 ease-in-out ${
                      index === currentIndex
                        ? "opacity-100 translate-y-0"
                        : index < currentIndex
                        ? "opacity-0 -translate-y-full"
                        : "opacity-0 translate-y-full"
                    }`}
                  >
                    <p className="text-white text-sm sm:text-sm xl:text-lg font-sfpro-regular leading-tight">
                      {item.text}
                      <span className="font-sfpro-bold">{item.boldText}</span>
                      {item.afterBold && item.afterBold}
                    </p>
                  </div>
                ))}
                <p className="text-white text-sm sm:text-sm xl:text-xl font-sfpro-regular leading-tight opacity-0">
                  {carouselTexts[currentIndex].text}
                  <span className="font-sfpro-bold">
                    {carouselTexts[currentIndex].boldText}
                  </span>
                  {carouselTexts[currentIndex].afterBold &&
                    carouselTexts[currentIndex].afterBold}
                </p>
              </div>
            </div>
          </div>

          <div className="ml-auto w-7 h-7 sm:w-8 xl:w-12 sm:h-8 xl:h-12 relative right-4 bottom-4">
            <Image
              src="/images/add.png"
              alt="Chart Icon"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsComponent

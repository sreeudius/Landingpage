import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const HeroSection = (): JSX.Element => {
  const navigationItems = [
    { label: "About Us", href: "#about", isActive: true },
    { label: "Services", href: "#services", isActive: false },
    { label: "Latest Work", href: "#work", isActive: false },
    { label: "Testmonials", href: "#testimonials", isActive: false },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-6 px-20 py-6 relative min-h-screen">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt="Background"
        src="/background.png"
      />

      <header className="items-center gap-[221px] flex-[0_0_auto] inline-flex relative z-10">
        <div className="items-center gap-[287px] flex-[0_0_auto] inline-flex relative">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Creato_Display-Medium',Helvetica] font-medium text-primary-white text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
            <span className="text-white">Ze</span>
            <span className="text-[#2dca72]">b</span>
            <span className="text-white">ra</span>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="inline-flex items-start gap-[50px] relative flex-[0_0_auto]">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={item.href}
                    className="flex-col items-start gap-2 flex-[0_0_auto] inline-flex relative"
                  >
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Creato_Display-Medium',Helvetica] font-medium text-secondary-grey text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                      {item.label}
                    </div>
                    {item.isActive && (
                      <img
                        className="relative w-[58px] h-0.5"
                        alt="Line"
                        src="/line-71.svg"
                      />
                    )}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Button
          className="relative w-[147px] h-[47px] bg-[url(/rectangle-167.svg)] bg-[100%_100%] h-auto border-0 p-0"
          variant="ghost"
        >
          <div className="absolute w-[60.54%] top-[calc(50.00%_-_8px)] left-[19.73%] [font-family:'Rubik',Helvetica] font-medium text-[#0c0c0c] text-base tracking-[0.48px] leading-[17px] whitespace-nowrap">
            Contact us
          </div>
        </Button>
      </header>

      <main className="inline-flex items-center gap-[121px] relative flex-[0_0_auto] z-10">
        <div className="inline-flex flex-col items-start gap-11 relative flex-[0_0_auto]">
          <div className="relative w-[507px] h-[244px]">
            <div className="flex-col items-start gap-[22px] inline-flex relative">
              <h1 className="relative w-fit mt-[-1.00px] [font-family:'Creato_Display-Bold',Helvetica] font-bold text-primary-white text-6xl tracking-[0] leading-[normal]">
                Creative Digital Marketing Agency
              </h1>

              <p className="relative w-[468px] h-20 [font-family:'Rubik',Helvetica] font-normal text-secondary-grey text-lg tracking-[0] leading-7">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
                sadipscing elitr
              </p>
            </div>
          </div>

          <Button
            className="relative w-[147px] h-[47px] bg-[url(/rectangle-167.svg)] bg-[100%_100%] h-auto border-0 p-0"
            variant="ghost"
          >
            <div className="absolute w-[60.54%] top-[calc(50.00%_-_8px)] left-[19.73%] [font-family:'Rubik',Helvetica] font-medium text-[#0c0c0c] text-base tracking-[0.48px] leading-[17px] whitespace-nowrap">
              Contact us
            </div>
          </Button>
        </div>

        <img
          className="relative w-[582px] h-[652px] mr-[-20.00px]"
          alt="Cover image"
          src="/cover-image.png"
        />
      </main>
    </section>
  );
};

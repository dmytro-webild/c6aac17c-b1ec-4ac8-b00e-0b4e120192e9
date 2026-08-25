import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Our Work",
    "href": "#work"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Reviews",
    "href": "#reviews"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Why Us",
    "href": "#why-us"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="floatingGradient" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
      logo="Quality Car Valeting"
      ctaButton={{
        text: "Get A Quote",
        href: "#quote",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Links",
          items: [
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Work",
              href: "#work",
            },
            {
              label: "Booking",
              href: "#quote",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/p/Quality-car-Valeting-100063664028299/",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/valetman69/",
            },
            {
              label: "WhatsApp",
              href: "https://wa.me/447802167343?text=Hi%20Quality%20Car%20Valeting%2C%20I%27d%20like%20to%20enquire%20about%20booking%20a%20valet.",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      leftText="Quality Car Valeting © 2024"
      rightText="Professional Mobile Detailing"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}

"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeLargeTitles"
        background="grid"
        cardStyle="glass-depth"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Collections",
          id: "products",
        },
        {
          name: "Story",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="MODA"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Timeless Design, Modern Elegance"
      description="Experience curated fashion designed for the modern individual. Quality, comfort, and style in every stitch."
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-japanese-woman-with-jacket-posing-mirror_23-2148870747.jpg"
      imageAlt="Fashion Editorial"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/view-beige-tone-colored-pants_23-2150773383.jpg",
          alt: "Modern fashion editorial model",
        },
        {
          src: "http://img.b2bpic.net/free-photo/fashion-portrait-young-elegant-woman_1328-2744.jpg",
          alt: "Elegant fashion portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-woman-posing_23-2149080881.jpg",
          alt: "Minimalist posing model",
        },
        {
          src: "http://img.b2bpic.net/free-photo/handsome-stylish-african-american-guy-white-jacket-looking-aggressive-camera-isolated-white-background_574295-4462.jpg",
          alt: "Stylish jacket editorial",
        },
        {
          src: "http://img.b2bpic.net/free-photo/flirtatious-lady-massive-round-earrings-red-beret-stylish-trench-coat-sits-by-window-touches-her-hair-coquettishly_197531-26928.jpg",
          alt: "Customer testimonial portrait",
        },
      ]}
      avatarText="Loved by 10k+ people worldwide"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Crafting Stories"
      description="Our brand was born from a passion for quality textiles and sustainable production. We believe in clothing that empowers the wearer through minimalist form and functional design."
      metrics={[
        {
          value: "100%",
          title: "Organic Fabrics",
        },
        {
          value: "50+",
          title: "Unique Styles",
        },
        {
          value: "10k+",
          title: "Happy Clients",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-woman-working-as-clothing-designer_23-2150762235.jpg"
      imageAlt="Atelier"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          brand: "MODA",
          name: "Essential Linen Shirt",
          price: "$89",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/studio-with-props-photography_23-2148885673.jpg",
          imageAlt: "Shirt",
        },
        {
          id: "p2",
          brand: "MODA",
          name: "Signature Wide Leg Trouser",
          price: "$129",
          rating: 5,
          reviewCount: "95",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-checking-red-dress_23-2147601331.jpg",
          imageAlt: "Trouser",
        },
        {
          id: "p3",
          brand: "MODA",
          name: "Minimalist Cotton Tee",
          price: "$45",
          rating: 4,
          reviewCount: "340",
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-client-examining-fabric-formal-shirts-hanging-department-store-mall-male-customer-looking-trendy-fashionable-merchandise-buying-modern-clothes-shop_482257-64803.jpg",
          imageAlt: "Tee",
        },
        {
          id: "p4",
          brand: "MODA",
          name: "Wool Knit Sweater",
          price: "$159",
          rating: 5,
          reviewCount: "88",
          imageSrc: "http://img.b2bpic.net/free-photo/chic-fashion-boutique-with-well-organized-clothing-racks_482257-118413.jpg",
          imageAlt: "Sweater",
        },
        {
          id: "p5",
          brand: "MODA",
          name: "Oversized Trench Coat",
          price: "$299",
          rating: 5,
          reviewCount: "42",
          imageSrc: "http://img.b2bpic.net/free-photo/light-brown-beige-pants-hangers_52683-135677.jpg",
          imageAlt: "Coat",
        },
        {
          id: "p6",
          brand: "MODA",
          name: "Classic Denim Jacket",
          price: "$189",
          rating: 5,
          reviewCount: "210",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-clothing-store-mall_482257-91309.jpg",
          imageAlt: "Jacket",
        },
      ]}
      title="New Arrivals"
      description="Discover our latest seasonal drop."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Alice M.",
          date: "Oct 2023",
          title: "Customer",
          quote: "The quality is simply unmatched. Fits perfectly.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/flirtatious-lady-massive-round-earrings-red-beret-stylish-trench-coat-sits-by-window-touches-her-hair-coquettishly_197531-26928.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/young-japanese-woman-with-jacket-posing-mirror_23-2148870747.jpg",
          imageAlt: "happy fashion customer smiling",
        },
        {
          id: "t2",
          name: "John D.",
          date: "Nov 2023",
          title: "Customer",
          quote: "Love the minimalist aesthetic. My go-to brand.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/person-drinking-beverage-while-break-time_23-2149256900.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-working-as-clothing-designer_23-2150762235.jpg",
          imageAlt: "happy fashion customer smiling",
        },
        {
          id: "t3",
          name: "Sarah P.",
          date: "Dec 2023",
          title: "Customer",
          quote: "Sustainable and stylish. Finally, a brand that gets it.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/overjoyed-hipster-girl-with-green-hair-makes-yes-gesture-clenches-fists-celebrates-success-triumphs-something-dressed-red-leather-jacket-poses-indoor-wins-prize-smiles-feels-glad_273609-53756.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/studio-with-props-photography_23-2148885673.jpg",
          imageAlt: "happy fashion customer smiling",
        },
        {
          id: "t4",
          name: "Michael B.",
          date: "Jan 2024",
          title: "Customer",
          quote: "Excellent customer service and even better quality clothes.",
          tag: "Verified",
          avatarSrc: "http://img.b2bpic.net/free-photo/vintage-woman-as-witch-posing-beside-abandoned-building-eve-halloween_1153-8799.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-positive-woman-smiling-candid-spring-fashion-street-style-wearing-green-blose_285396-6673.jpg",
          imageAlt: "happy fashion customer smiling",
        },
        {
          id: "t5",
          name: "Emma L.",
          date: "Feb 2024",
          title: "Customer",
          quote: "I've bought several pieces and they still look brand new.",
          tag: "Verified",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=lkpqfr",
          imageSrc: "http://img.b2bpic.net/free-vector/logo-collection-with-pastel-colors_23-2148386005.jpg",
          imageAlt: "happy fashion customer smiling",
        },
      ]}
      title="What Our Community Says"
      description="Hear from the people who live in our designs."
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Vogue",
        "Harper's Bazaar",
        "Elle",
        "GQ",
        "WWD",
        "Cosmopolitan",
        "Marie Claire",
      ]}
      title="Featured In"
      description="Recognized by industry leaders for our commitment to minimalist design and ethical production."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "What is your return policy?",
          content: "You can return items within 30 days of purchase for a full refund.",
        },
        {
          id: "f2",
          title: "Do you offer international shipping?",
          content: "Yes, we ship to over 50 countries worldwide.",
        },
        {
          id: "f3",
          title: "Are your materials sustainable?",
          content: "We prioritize organic, recycled, and ethically sourced fabrics in every collection.",
        },
      ]}
      title="Questions?"
      description="We've got you covered."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/empty-modern-room-with-furniture_23-2149178893.jpg"
      imageAlt="Minimalist studio space"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Get in touch"
      title="Ready to upgrade your wardrobe?"
      description="Join our newsletter for exclusive drops and design insights."
      buttons={[
        {
          text: "Subscribe Now",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="MODA"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "New Arrivals",
              href: "#",
            },
            {
              label: "Best Sellers",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Returns",
              href: "#",
            },
            {
              label: "FAQ",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 MODA Studio."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

export const contentData = {
  brand: {
    name: "STREET STYLE",
    logoImage: "/asset/images/logo.png",
    tagline: "Minimal Luxury Streetwear",
    symbol: "✦✦",
  },
  
  hero: {
    headlines: ["FIND", "YOUR", "VIBE"],
    subtitle: "Check out our Captivating Cities shirt collection",
    ctaText: "EXPLORE HERE",
    mockups: {
      card: {
        tag: "Steph",
        tagColor: "#00E5FF", // Cyan badge
        graphic: "orbit",
        title: "Y2K Vector Graphic"
      },
      shirt: {
        image: "/asset/images/dress 1.png",
        alt: "White Graphic T-Shirt Mockup"
      }
    }
  },

  story: {
    headlines: ["WE'RE", "PROUD OF", "OUR ROOTS"],
    bodyText: "What's special about your product, service, or company? Use this space to highlight the things that set you apart from your competition, whether it's a special feature, a unique philosophy, or awards and recognition that you have received. Think of this as your elevator pitch to get the reader's attention.",
    bgImage: "/asset/images/cover.png",
  },

  values: {
    headlines: ["WE'RE", "PROUD OF", "OUR CLOTHES"],
    items: [
      {
        id: "locals",
        icon: "flower",
        titleLines: ["DESIGNED", "BY LOCALS"]
      },
      {
        id: "inclusive",
        icon: "oval-disc",
        titleLines: ["INCLUSIVE", "SIZES"]
      },
      {
        id: "eco",
        icon: "globe",
        titleLines: ["ECO-FRIENDLY", "PACKAGING"]
      }
    ]
  },

  newArrivals: {
    headline: "NEW ARRIVALS",
    tipText: "Tip: Drag and drop your image over the mockup.",
    products: [
      {
        id: "city-of-shirts",
        name: "City of Shirts",
        price: 20.00,
        priceFormatted: "$20.00",
        image: "/asset/images/dress 1.png",
        category: "T-SHIRT",
        tag: null,
        description: "Heavyweight 240GSM organic cotton tee with landscape minimal print."
      },
      {
        id: "street-smart-hoodie",
        name: "Street Smart Hoodie",
        price: 25.00,
        priceFormatted: "$25.00",
        image: "/asset/images/dress 2.png",
        category: "HOODIE",
        tag: {
          name: "Charlotte M",
          badge: "star"
        },
        description: "Oversized French terry hoodie built for street elegance and warmth."
      },
      {
        id: "urban-sweat-shirt",
        name: "Urban Sweat Shirt",
        price: 30.00,
        priceFormatted: "$30.00",
        image: "/asset/images/dress 3.png",
        category: "SWEATSHIRT",
        tag: null,
        description: "Relaxed fit drop-shoulder crewneck featuring raw seam detail."
      }
    ]
  },

  press: {
    headline: "PRESS",
    quotes: [
      {
        id: "youth-culture",
        publication: "YOUTH CULTURE MAGAZINE",
        quote: "Boost your credibility by adding quotes from articles written about your brand."
      },
      {
        id: "streetwear-daily",
        publication: "STREETWEAR DAILY",
        quote: "Boost your credibility by adding quotes from articles written about your brand."
      },
      {
        id: "idea-media",
        publication: "IDEA MEDIA",
        quote: "Boost your credibility by adding quotes from articles written about your brand."
      }
    ]
  },

  contact: {
    headlineTop: ["REACH OUT FOR", "INQUIRIES"],
    headlineBottom: ["AND PARTNERSHIPS"],
    columns: [
      {
        id: "phone",
        label: "PHONE",
        value: "(123) 456-7890",
        type: "tel"
      },
      {
        id: "email",
        label: "EMAIL",
        value: "hello@reallygreatsite.com",
        type: "email"
      },
      {
        id: "social",
        label: "SOCIAL",
        type: "social",
        links: [
          { name: "Facebook", icon: "facebook", url: "#" },
          { name: "Instagram", icon: "instagram", url: "#" }
        ]
      }
    ]
  }
};

/**
 * ALI'S CAFE - CENTRAL CLIENT CONFIGURATION FILE
 * 
 * Brand: Ali's Cafe
 * Established: 2021
 * Address: Bharathi Nagar, Rameswaram Road, Ramnad - 623504
 * Phone: +91 91590 92589
 * Email: aliscafe00@gmail.com
 * Instagram: @alis_cafe_rmd
 * Specialty: 100% Natural Juices, Artisanal Ice Creams & Gourmet Food.
 */

const CAFE_CONFIG = {
  // Brand Details
  brand: {
    name: "Ali’s Cafe",
    tagline: "Fresh Juices. Artisanal Ice Creams. Gourmet Food.",
    establishedYear: "2021",
    logoImage: "assets/images/logo.png",
    logoSymbol: "🧃",
    founder: "Ali",
    shortDescription: "Welcome to Ali’s Cafe — your destination on Rameswaram Road, Bharathi Nagar, Ramnad for cold-pressed natural juices, handcrafted artisanal ice creams, and freshly prepared gourmet food."
  },

  // Hero & Section Local PC Image Paths
  heroImages: [
    "assets/images/hero-bg.jpg"
  ],
  aboutImages: [
    "assets/images/story_cafe.jpg"
  ],
  storyImages: [
    "assets/images/hero-bg.jpg"
  ],
  about: {
    image: "assets/images/story_cafe.jpg",
    paragraph1: "Welcome to Ali’s Cafe, Bharathi Nagar, Ramnad — a sanctuary crafted for flavor lovers, families, and travelers. We take pride in cold-pressed 100% natural juices, handcrafted artisanal ice cream sundaes, and gourmet fast food served in a warm atmosphere."
  },

  // Contact & Location Information (Real Ramnad Address & Phone)
  contact: {
    address: "Bharathi Nagar, Rameswaram Road, Ramnad - 623504",
    phone: "+91 91590 92589",
    phoneRaw: "+919159092589",
    email: "aliscafe00@gmail.com",
    instagram: "@alis_cafe_rmd",
    instagramUrl: "https://www.instagram.com/alis_cafe_rmd?igsh=MWNnZ3RoNXl1eDlmZg==",
    whatsappNumber: "919159092589",
    whatsappDefaultMessage: "Hi Ali’s Cafe Ramnad, I’d like to know more about your juice, ice cream & food menu.",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15758.123456789!2d78.832!3d9.366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjEnNTcuNiJOIDc4wrA0OSc1NS4yIkU!5e0!3m2!1sen!2sin!4v1614050000000!5m2!1sen!2sin"
  },

  // Real Opening Hours Schedule (Mon-Thu, Sat-Sun 12pm-9:45pm, Fri 4pm-9:45pm)
  openingHours: [
    { day: "Monday", hours: "12:00 PM – 9:45 PM", status: "Open" },
    { day: "Tuesday", hours: "12:00 PM – 9:45 PM", status: "Open" },
    { day: "Wednesday", hours: "12:00 PM – 9:45 PM", status: "Open" },
    { day: "Thursday", hours: "12:00 PM – 9:45 PM", status: "Open" },
    { day: "Friday", hours: "4:00 PM – 9:45 PM", status: "Open" },
    { day: "Saturday", hours: "12:00 PM – 9:45 PM", status: "Open" },
    { day: "Sunday", hours: "12:00 PM – 9:45 PM", status: "Open" }
  ],

  // Achievements & Statistics
  achievements: [
    { label: "Established", value: "2021", suffix: "", isPlaceholder: false },
    { label: "Happy Guests", value: "25000", suffix: "+", isPlaceholder: false },
    { label: "Menu Delights", value: "60", suffix: "+", isPlaceholder: false },
    { label: "Years of Growth", value: "5", suffix: "+", isPlaceholder: false }
  ],

  // Highlights Section Cards
  highlights: [
    {
      title: "Fresh Natural Juices",
      description: "100% natural, cold-pressed fruit juices and refreshing smoothies."
    },
    {
      title: "Artisanal Ice Creams",
      description: "Rich, creamy handcrafted gelato sundaes and waffle treats."
    },
    {
      title: "Fresh Gourmet Food",
      description: "Quality ingredients, delicious burgers, pastas, and savory snacks."
    },
    {
      title: "Cozy Atmosphere",
      description: "A comfortable, vibrant place in Bharathi Nagar, Ramnad to relax."
    }
  ],

  // Story & Journey Content
  story: {
    heading: "Our Journey",
    subheading: "From Passion to Ramnad’s Favorite Sanctuary",
    paragraph1: "Founded in 2021, Ali’s Cafe began with a dedicated promise: to deliver exceptional quality, 100% natural juices, artisanal ice creams, and gourmet food to Ramnad. Thanks to the warmth and support of our wonderful guests, our small beginning blossomed into a thriving community favorite.",
    paragraph2: "After five incredible years of growth, we expanded to our new home in Bharathi Nagar on Rameswaram Road — featuring expanded seating, lush green ambiance, cozy booth dining, and the same pure passion for flavor.",
    timeline: [
      {
        year: "2021",
        title: "The Beginning in Ramnad",
        description: "Opened our doors with an unwavering commitment to pure natural taste and warm hospitality."
      },
      {
        year: "2024",
        title: "Moving to Bharathi Nagar",
        description: "Expanded into a larger, enhanced sanctuary on Rameswaram Road with cozy booth seating and green wall ambiance."
      },
      {
        year: "Today",
        title: "A Beloved Destination",
        description: "Proudly serving local residents of Ramnad District, travelers across India, and guests worldwide."
      }
    ]
  },

  // Mission & Vision
  missionVision: {
    mission: "To serve 100% natural juices, artisanal ice creams, and gourmet food with consistent quality while creating a warm, memorable experience for every guest.",
    vision: "To remain Ramnad’s most loved cafe destination known for pure taste, quality service, and unforgettable dining moments."
  },

  // Menu Categories
  menuCategories: [
    { id: "all", name: "All Items" },
    { id: "icecream", name: "Artisanal Ice Creams & Waffles" },
    { id: "food", name: "Gourmet Food & Mains" },
    { id: "snacks", name: "Quick Bites & Platters" }
  ],

  // Official Menu Items (Dish Name & Picture ONLY - NO PRICES)
  menuItems: [
    {
      id: "m1",
      name: "Oreo Waffles",
      category: "icecream",
      badge: "Chocolate Oreo Waffle",
      image: "assets/images/oreo-waffles.png"
    },
    {
      id: "m2",
      name: "Kitkat Crunch",
      category: "icecream",
      badge: "Kitkat Fudge Sundae",
      image: "assets/images/kitkat-crunch.png"
    },
    {
      id: "m3",
      name: "Waffle Ice Cream",
      category: "icecream",
      badge: "Waffle & Gelato",
      image: "assets/images/waffle-icecream-single.png"
    },
    {
      id: "m4",
      name: "Lotus Biscoff Sundae",
      category: "icecream",
      badge: "Biscoff Speculoos",
      image: "assets/images/lotus-biscoff-sundae.png"
    },
    {
      id: "m5",
      name: "Cream Falooda",
      category: "icecream",
      badge: "Rich Malai Falooda",
      image: "assets/images/cream-falooda.png"
    },
    {
      id: "m6",
      name: "Tandoori Cheese Creamy Pasta",
      category: "food",
      badge: "Cheesy Mac Pasta",
      image: "assets/images/tandoori-cheese-creamy-pasta.png"
    },
    {
      id: "m7",
      name: "Choco Burger",
      category: "food",
      badge: "Nutella Dessert Burger",
      image: "assets/images/choco-burger.png"
    },
    {
      id: "m8",
      name: "Double Choco Waffle",
      category: "icecream",
      badge: "Dual Chocolate Waffle",
      image: "assets/images/double-choco-waffle.png"
    },
    {
      id: "m9",
      name: "Pistachio Kunafa Sundae",
      category: "icecream",
      badge: "Kunafa Pastry Sundae",
      image: "assets/images/pistachio-kunafa-sundae.png"
    },
    {
      id: "m10",
      name: "Blueberry Blast",
      category: "icecream",
      badge: "Blueberry Gelato",
      image: "assets/images/blueberry-blast.png"
    },
    {
      id: "m11",
      name: "Mumbai Rose Falooda",
      category: "icecream",
      badge: "Rose Royal Falooda",
      image: "assets/images/mumbai-rose-falooda.png"
    },
    {
      id: "m12",
      name: "Gudbad",
      category: "icecream",
      badge: "Multi-Layer Sundae",
      image: "assets/images/gudbad.png"
    },
    {
      id: "m13",
      name: "Oreo Magic",
      category: "icecream",
      badge: "Cookies & Cream",
      image: "assets/images/oreo-magic.png"
    },
    {
      id: "m14",
      name: "Brochocolates",
      category: "icecream",
      badge: "Brownie Fudge Bowl",
      image: "assets/images/brochocolates.png"
    },
    {
      id: "m15",
      name: "Rainbow Falooda",
      category: "icecream",
      badge: "Multi-Scoop Falooda",
      image: "assets/images/rainbow-falooda.png"
    },
    {
      id: "m16",
      name: "Oval Plate",
      category: "icecream",
      badge: "Warm Brownie Gelato",
      image: "assets/images/oval-plate.jpg"
    },
    {
      id: "m17",
      name: "Cheese Sandwich",
      category: "snacks",
      badge: "Loaded Cheese Toast",
      image: "assets/images/cheese-sandwich-toast.png"
    },
    {
      id: "m18",
      name: "Jamun Fantasy",
      category: "icecream",
      badge: "Gulab Jamun Sundae",
      image: "assets/images/jamun-fantasy.png"
    },
    {
      id: "m19",
      name: "Kulfi Shake",
      category: "icecream",
      badge: "Saffron Pistachio Shake",
      image: "assets/images/kulfi-shake.jpg"
    },
    {
      id: "m20",
      name: "Strawberry Falooda",
      category: "icecream",
      badge: "Berry Falooda",
      image: "assets/images/strawberry-falooda.png"
    },
    {
      id: "m21",
      name: "Vanilla Falooda",
      category: "icecream",
      badge: "Vanilla Bean Falooda",
      image: "assets/images/vanilla-falooda.png"
    },
    {
      id: "m22",
      name: "Oreo Bites",
      category: "icecream",
      badge: "Gelato Sandwich",
      image: "assets/images/oreo-bites.jpg"
    },
    {
      id: "m23",
      name: "Fruzzy",
      category: "icecream",
      badge: "Fruit Fizz",
      image: "assets/images/fruzzy.jpg"
    },
    {
      id: "m24",
      name: "Wappy",
      category: "icecream",
      badge: "Sunset Mocktail",
      image: "assets/images/wappy.png"
    },
    {
      id: "m25",
      name: "Triple Waffle Ice Cream Pizza",
      category: "icecream",
      badge: "Gelato Waffle",
      image: "assets/images/triple-waffle-icecream-pizza.png"
    },
    {
      id: "m26",
      name: "Mango Coconut Falooda",
      category: "icecream",
      badge: "Tropical Falooda",
      image: "assets/images/mango-coconut-falooda.png"
    },
    {
      id: "m27",
      name: "Waffle Pizza",
      category: "icecream",
      badge: "Artisanal Waffle",
      image: "assets/images/waffle-pizza-plain.jpg"
    },
    {
      id: "m28",
      name: "Pistachio Waffle Ice Cream Pizza",
      category: "icecream",
      badge: "Pistachio Gelato",
      image: "assets/images/pistachio-waffle-icecream-pizza.png"
    },
    {
      id: "m29",
      name: "Dark Fantasy",
      category: "icecream",
      badge: "Dark Fudge Sundae",
      image: "assets/images/dark-fantasy.png"
    },
    {
      id: "m30",
      name: "Truffles",
      category: "icecream",
      badge: "Truffle Mousse",
      image: "assets/images/truffles.png"
    },
    {
      id: "m31",
      name: "Monster Shake",
      category: "icecream",
      badge: "Loaded Milkshake",
      image: "assets/images/monster-shake.png"
    },
    {
      id: "m32",
      name: "Waffle Pizza Ice Cream",
      category: "icecream",
      badge: "Gelato Waffle",
      image: "assets/images/waffle-pizza-icecream.jpg"
    },
    {
      id: "m33",
      name: "Milo Dinosaur",
      category: "icecream",
      badge: "Chocolate Malt",
      image: "assets/images/milo-dinosaur.png"
    },
    {
      id: "m34",
      name: "Brownie Waffle Pizza",
      category: "icecream",
      badge: "Fudge Waffle",
      image: "assets/images/brownie-waffle-pizza.jpg"
    },
    {
      id: "m35",
      name: "Triple Choco Waffle Pizza",
      category: "icecream",
      badge: "Waffle Special",
      image: "assets/images/triple-choco-waffle-pizza.jpg"
    },
    {
      id: "m36",
      name: "Kinder Joy Waffle",
      category: "icecream",
      badge: "Hazelnut Waffle",
      image: "assets/images/kinder-joy-waffle.jpg"
    },
    {
      id: "m37",
      name: "Chicken Wings",
      category: "food",
      badge: "Crispy Wings",
      image: "assets/images/chicken-wings.jpg"
    },
    {
      id: "m38",
      name: "Biryani Ice Cream",
      category: "icecream",
      badge: "Matka Fusion",
      image: "assets/images/biryani-icecream.jpg"
    },
    {
      id: "m39",
      name: "Jelly Belly",
      category: "icecream",
      badge: "Strawberry Gelato",
      image: "assets/images/jelly-belly-pink.png"
    },
    {
      id: "m40",
      name: "Veg Platter",
      category: "snacks",
      badge: "Snack Platter",
      image: "assets/images/veg-platter.jpg"
    },
    {
      id: "m41",
      name: "Choco Overload",
      category: "icecream",
      badge: "Chocolate Supreme",
      image: "assets/images/choco-overload.jpg"
    },
    {
      id: "m42",
      name: "Kulfi Falooda",
      category: "icecream",
      badge: "Desi Delight",
      image: "assets/images/kulfi-falooda.png"
    },
    {
      id: "m43",
      name: "Kitkat Waffle",
      category: "icecream",
      badge: "Crispy Waffle",
      image: "assets/images/kitkat-waffle.png"
    },
    {
      id: "m44",
      name: "Brownie Ice Cream",
      category: "icecream",
      badge: "Hot Fudge Skillet",
      image: "assets/images/brownie-icecream.png"
    },
    {
      id: "m45",
      name: "Dry Fruits Falooda",
      category: "icecream",
      badge: "Royal Falooda",
      image: "assets/images/dry-fruits-falooda.jpg"
    },
    {
      id: "m46",
      name: "Cheese Bun",
      category: "food",
      badge: "Melted Cheese",
      image: "assets/images/cheese-bun.png"
    },
    {
      id: "m47",
      name: "Chicken Cheese Salad",
      category: "food",
      badge: "Cheesy Salad",
      image: "assets/images/chicken-cheese-salad.jpg"
    },
    {
      id: "m48",
      name: "Panini Sandwich",
      category: "snacks",
      badge: "Grill Toast",
      image: "assets/images/panini-sandwich.jpg"
    },
    {
      id: "m49",
      name: "Cheesy Chicken",
      category: "food",
      badge: "Chef Special",
      image: "assets/images/cheesy-chicken.jpg"
    },
    {
      id: "m50",
      name: "Burj Khalifa Falooda",
      category: "icecream",
      badge: "Royal Special",
      image: "assets/images/burj-khalifa-falooda.png"
    },
    {
      id: "m51",
      name: "Brownie Day",
      category: "icecream",
      badge: "Fudge Sundae",
      image: "assets/images/brownie-day.jpg"
    },
    {
      id: "m52",
      name: "Cheese Nachos",
      category: "snacks",
      badge: "Loaded Cheese",
      image: "assets/images/cheese-nachos.jpg"
    },
    {
      id: "m53",
      name: "Schezwan Momos",
      category: "food",
      badge: "Fiery Hot",
      image: "assets/images/schezwan-momos.jpg"
    },
    {
      id: "m54",
      name: "Pizza",
      category: "food",
      badge: "Fresh Baked",
      image: "assets/images/pizza-real.png"
    },
    {
      id: "m55",
      name: "Bunny Chow",
      category: "food",
      badge: "House Special",
      image: "assets/images/bunny-chow.png"
    },
    {
      id: "m56",
      name: "Mumbai Chat",
      category: "food",
      badge: "Spicy Favorite",
      image: "assets/images/mumbai-chat.jpg"
    },
    {
      id: "m57",
      name: "Cheese Fries",
      category: "snacks",
      badge: "Loaded Cheese",
      image: "assets/images/cheese-fries.jpg"
    },
    {
      id: "m58",
      name: "Ice Cream Meals",
      category: "icecream",
      badge: "Feast Platter",
      image: "assets/images/icecream-meals.jpg"
    },
    {
      id: "m59",
      name: "Chicken Lays Salad",
      category: "food",
      badge: "Signature Salad",
      image: "assets/images/chicken-lays-salad.jpg"
    },
    {
      id: "m60",
      name: "Tea Glass Ice Cream",
      category: "icecream",
      badge: "Artisanal Sundae",
      image: "assets/images/tea-glass-icecream.jpg"
    },
    {
      id: "m61",
      name: "Chicken Omelette",
      category: "food",
      badge: "Chef Special",
      image: "assets/images/chicken-omelette.jpg"
    },
    {
      id: "m62",
      name: "Club Sandwich",
      category: "snacks",
      badge: "Popular Food",
      image: "assets/images/club-sandwich-real.jpg"
    },
    {
      id: "m63",
      name: "Loaded Chicken Fries",
      category: "snacks",
      badge: "Must Try",
      image: "assets/images/loaded-chicken-fries.jpg"
    }
  ],

  // Featured Specials
  featuredSpecials: [
    {
      name: "Lotus Biscoff Sundae",
      image: "assets/images/lotus-biscoff-sundae.png",
      tag: "Biscoff Speculoos"
    },
    {
      name: "Oreo Waffles",
      image: "assets/images/oreo-waffles.png",
      tag: "Chocolate Oreo Waffle"
    },
    {
      name: "Kitkat Crunch",
      image: "assets/images/kitkat-crunch.png",
      tag: "Kitkat Fudge Sundae"
    },
    {
      name: "Waffle Ice Cream",
      image: "assets/images/waffle-icecream-single.png",
      tag: "Waffle & Gelato"
    }
  ],

  // Gallery Categories & Images (Interior & Exterior Space Images ONLY)
  galleryCategories: ["All", "Exterior", "Interior", "Decor & Lights"],
  galleryImages: [
    {
      title: "Warm Wicker Pendant Lamps & Greenery",
      category: "Interior",
      src: "assets/images/hero-bg.jpg",
      caption: "Cozy interior ambiance with lush green ceiling canopy and wicker lamps."
    },
    {
      title: "Ali’s Cafe Night Exterior & Neon Signage",
      category: "Exterior",
      src: "assets/images/gallery-exterior-signage.jpg",
      caption: "Illuminated 3D LED neon signage on building facade at night."
    },
    {
      title: "Cozy Booth Dining Hall & Green Wall Logo",
      category: "Interior",
      src: "assets/images/gallery-dining-booths-wide.jpg",
      caption: "Spacious booth seating with white dining tables, monstera plant & wall logo."
    },
    {
      title: "Signature Green Moss Wall & Gold Logo",
      category: "Interior",
      src: "assets/images/gallery-greenwall-logo.jpg",
      caption: "Gold circular logo mounted on lush green moss wall with woven wicker lamps."
    },
    {
      title: "Spacious Dining Hall & Booth Seating",
      category: "Interior",
      src: "assets/images/gallery-booth-dining.png",
      caption: "Comfortable leather booth seating with warm lighting and partition bamboo."
    },
    {
      title: "Handcrafted Mosaic Glass Turkish Chandelier",
      category: "Decor & Lights",
      src: "assets/images/gallery-mosaic-chandelier.jpg",
      caption: "Vibrant multi-colored mosaic glass globe chandelier hanging from ceiling."
    }
  ],

  // Experience Cards
  experiences: [
    {
      icon: "🧃",
      title: "Refresh",
      description: "Savor 100% natural, cold-pressed fruit juices and smoothies made fresh to order."
    },
    {
      icon: "🍨",
      title: "Indulge",
      description: "Treat yourself to rich, creamy artisanal gelato sundaes, toppings, and waffles."
    },
    {
      icon: "🍴",
      title: "Savor",
      description: "Discover delicious gourmet sandwiches, pastas, burgers, and freshly prepared bites."
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Basith",
      role: "Ramnad Guest",
      stars: 5,
      quote: "Ali’s Cafe in Bharathi Nagar is our favorite spot in Ramnad! The Lotus Biscoff Sundae and Oreo Waffles are unbelievable. Amazing cozy ambiance!",
      avatar: "B"
    },
    {
      name: "Sabreen Sibana",
      role: "Food Lover",
      stars: 5,
      quote: "The Pistachio Kunafa Sundae and Tandoori Cheese Creamy Pasta are absolutely delicious! Quick service and beautiful green wall ambiance.",
      avatar: "SS"
    },
    {
      name: "Nathira",
      role: "Local Resident",
      stars: 5,
      quote: "A true local gem for fresh natural juices, faloodas, and artisanal waffles! Everything is fresh, tasty, and presented beautifully. Our family's go-to cafe!",
      avatar: "N"
    }
  ],

  // FAQs
  faqs: [
    {
      question: "Where is Ali’s Cafe located in Ramnad?",
      answer: "We are located at Bharathi Nagar, Rameswaram Road, Ramnad - 623504 (Tamil Nadu) — featuring cozy booth seating and vibrant ambiance."
    },
    {
      question: "What are your opening hours?",
      answer: "We are open Everyday from 12:00 PM to 9:45 PM. On Fridays, we open from 4:00 PM to 9:45 PM."
    },
    {
      question: "What is your contact phone number?",
      answer: "You can call us or WhatsApp us directly at +91 91590 92589."
    },
    {
      question: "What signature dishes do you serve?",
      answer: "We serve 60+ signature dishes including Oreo Waffles, Kitkat Crunch, Waffle Ice Cream, Lotus Biscoff Sundae, Cream Falooda, Tandoori Cheese Creamy Pasta, Choco Burger, Double Choco Waffle, Pistachio Kunafa Sundae, Blueberry Blast, Mumbai Rose Falooda, Gudbad, Oreo Magic, Brochocolates, Rainbow Falooda, Oval Plate, Cheese Sandwich, Jamun Fantasy, Kulfi Shake, Strawberry Falooda, Vanilla Falooda, Oreo Bites, Fruzzy, Wappy, Triple Waffle Ice Cream Pizza, Mango Coconut Falooda, Waffle Pizza, Pistachio Waffle Ice Cream Pizza, Dark Fantasy, Truffles, Monster Shake, Waffle Pizza Ice Cream, Milo Dinosaur, Brownie Waffle Pizza, Triple Choco Waffle Pizza, Kinder Joy Waffle, Chicken Wings, Biryani Ice Cream, Jelly Belly, Veg Platter, Choco Overload, Kulfi Falooda, Kitkat Waffle, Brownie Ice Cream, Dry Fruits Falooda, Cheese Bun, Chicken Cheese Salad, Panini Sandwich, Cheesy Chicken, Burj Khalifa Falooda, Brownie Day, Cheese Nachos, Schezwan Momos, Pizza, Bunny Chow, Mumbai Chat, Cheese Fries, Ice Cream Meals, Chicken Lays Salad, Tea Glass Ice Cream, Chicken Omelette, Club Sandwich, and Loaded Chicken Fries."
    },
    {
      question: "Do you offer takeaway?",
      answer: "Yes! All natural juices, ice creams, and gourmet food dishes are packaged in eco-friendly takeaway containers."
    },
    {
      question: "How can I contact Ali’s Cafe Ramnad?",
      answer: "You can call us at +91 91590 92589, WhatsApp us directly, or connect with us on Instagram @alis_cafe_rmd."
    }
  ]
};

// Load overrides from LocalStorage if saved via Admin Panel (admin.html)
(function() {
  const savedConfig = localStorage.getItem('ALIS_CAFE_CONFIG_OVERRIDE');
  if (savedConfig) {
    try {
      const parsed = JSON.parse(savedConfig);
      Object.assign(CAFE_CONFIG, parsed);
    } catch(e) {
      console.warn("Could not parse ALIS_CAFE_CONFIG_OVERRIDE", e);
    }
  }
})();

if (typeof window !== 'undefined') {
  window.ALIS_CAFE_CONFIG = CAFE_CONFIG;
}

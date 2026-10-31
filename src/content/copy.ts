// All site wording lives here. Edit text in this file; components only read from it.
// Items marked PLACEHOLDER need real details from Kiri or Nina before going public.

export const contact = {
  name: "Nina",
  // PLACEHOLDER: Nina's real mobile and email
  phoneDisplay: "021 000 0000",
  phoneHref: "+64210000000",
  email: "hello@project-nina.co.nz",
  area: "Christchurch & Canterbury",
};

export const site = {
  name: "Project Nina",
  title: "Project Nina | Christchurch renovator buying as-is, TLC and tired properties",
  description:
    "Nina buys and renovates as-is, where-is, TLC and tired rental properties across Christchurch. Private sellers and landlords can talk to her in confidence. Agents, bring her the hard ones.",
  url: "https://www.project-nina.co.nz",
};

export const nav = [
  { label: "For agents", href: "#agents" },
  { label: "For owners", href: "#owners" },
  { label: "Instagram", href: "#instagram" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Christchurch renovator · As-is, where-is · TLC",
  headlineStart: "No project too big, too scary or too",
  headlineAccent: "small.",
  sub: "Nina buys, renovates and brings tired Christchurch homes back to life. Tired rentals, vacant houses, deceased estates and subdivision sites. If it's hard, she wants to hear about it.",
  pathwayPrompt: "Who are you?",
  pathways: [
    {
      key: "agent",
      label: "I'm an agent",
      sub: "See Nina's work and send her a listing",
      href: "#agents",
    },
    {
      key: "owner",
      label: "I'm selling a property",
      sub: "Talk to Nina privately, no obligation",
      href: "#owners",
    },
  ],
  ticks: ["Private and confidential", "Any condition", "You choose the timing"],
  bannerHint: "Drag the paintbrush to walk Nina past the house",
  film: "/media/nina-banner-720p.mp4",
  filmPoster: "/media/nina-banner-start.jpg",
  filmEnd: "/media/nina-banner-end.jpg",
};

export const takesOn = {
  eyebrow: "What Nina takes on",
  title: "The houses other people walk away from",
  items: [
    { icon: "key", title: "As-is, where-is", text: "Sold exactly as it stands. No repairs, no clean-up, no open homes." },
    { icon: "heart", title: "Needs some TLC", text: "Tired paint, old kitchen, overgrown garden. Nina sees the potential." },
    { icon: "home", title: "Tired rentals", text: "Landlords ready to step away from a property that needs more than they want to spend." },
    { icon: "door", title: "Vacant properties", text: "Empty, weathering and costing you rates and insurance every month." },
    { icon: "hammer", title: "Full renovations", text: "Leaks, rot, earthquake repairs, fire damage. The scary ones." },
    { icon: "map", title: "Subdivision projects", text: "Big sections with room for more. Nina has the plans and the builders." },
  ],
};

export const owners = {
  eyebrow: "For owners, landlords and families",
  title: "Talk to Nina privately. No pressure, no open homes.",
  intro:
    "Selling a tired property can feel overwhelming. Nina keeps it simple and private. She'll come and look, talk you through your options honestly, and you decide what happens next.",
  options: [
    {
      tag: "Option 1",
      title: "Nina buys it as-is",
      text: "Sell it exactly as it is. No repairs, no cleaning, no agents' marketing campaign. You pick the settlement date.",
      points: ["No repairs or clean-up", "No open homes", "Settle when it suits you"],
    },
    {
      tag: "Option 2",
      title: "An assisted sale",
      text: "Keep ownership while Nina renovates the property first, then sell it on the open market for a better price. Ideal for tired rentals and vacant homes.",
      points: ["Nina manages the renovation", "Sell for more once it's fresh", "Great for landlords and estates"],
    },
  ],
  stepsTitle: "How it works",
  steps: [
    { title: "Tell Nina about the property", text: "A quick call, text or the short form below. Everything stays confidential." },
    { title: "Nina comes to have a look", text: "No judgement about the state of it. She'll explain the options in plain language." },
    { title: "You choose the way forward", text: "Sell as-is or go for an assisted sale. Your timing, your call, no obligation." },
  ],
  cta: "Talk to Nina privately",
};

export const agents = {
  eyebrow: "For real estate agents",
  title: "Let's work together, the perfect team!",
  intro:
    "Too scary for first home buyers or Mum and Dad investors? Call Nina, I always give back to the agents that bring me good deals.",
  benefits: [
    { title: "Your client stays your client", text: "Nina works with you, not around you. The relationship is yours." },
    { title: "A quick, straight answer", text: "Send the address and a few photos. Nina will tell you quickly if it's a fit." },
    { title: "Finished homes to list", text: "Assisted sales and renovated homes need a great agent to sell them. That can be you." },
  ],
  cta: "Send Nina a property",
  secondaryCta: "See Nina's work on Instagram",
};

export const work = {
  // Hidden for now (Kiri, 31 Oct): set to true to bring the before-and-after section back.
  show: false,
  eyebrow: "Nina's work",
  title: "Before and after",
  intro: "Drag the slider on each project to see the difference. Real photos coming soon.",
  // PLACEHOLDER: replace with Nina's real projects and photos
  projects: [
    {
      suburb: "Sydenham villa",
      type: "Tired rental · Full renovation",
      summary: "Peeling weatherboards, leaking roof and a 1970s kitchen. Re-roofed, re-piled, painted and opened up.",
      scheme: "villa",
    },
    {
      suburb: "Linwood bungalow",
      type: "Vacant property · TLC",
      summary: "Empty for two years. New paint, carpet, bathroom and a garden the neighbours now stop to admire.",
      scheme: "bungalow",
    },
    {
      suburb: "Riccarton section",
      type: "Subdivision project",
      summary: "One tired house on a big section. Renovated the original home and created a second title at the back.",
      scheme: "subdivision",
    },
  ],
};

export const about = {
  eyebrow: "Meet Nina",
  title: "Paintbrush in hand, sleeves rolled up",
  photo: "/media/nina-painting-wall.jpg",
  photoAlt: "Nina on site in a house she is renovating",
  photo2: "/media/nina-demolition-selfie.jpg",
  photo2Alt: "Nina in goggles and mask on demolition day",
  // DRAFT: Nina's real story to replace this
  paragraphs: [
    "Nina is a Christchurch renovator who loves the houses everyone else has given up on. As-is, where-is, needs TLC, a bit scary? That's where she does her best work.",
    "She buys and renovates tired homes, helps landlords and families sell properties that have become a burden, and takes on subdivision projects across Canterbury.",
    "Every project is personal. Nina deals with you directly, keeps things private, and treats every house like it's going to be someone's home again. Because it is.",
  ],
};

export const instagram = {
  eyebrow: "On Instagram",
  title: "Follow the work as it happens",
  intro: "Demolition days, paint days and the big reveals. Nina shares it all on Instagram.",
  handle: "@nabiulina.nina",
  url: "https://www.instagram.com/nabiulina.nina/",
  follow: "Follow @nabiulina.nina",
  // PLACEHOLDER: swap each href for a real reel link and cover once Kiri sends them
  reels: [
    { cover: "/media/nina-demolition-selfie.jpg", caption: "Demo day. Out with the old brick.", href: "https://www.instagram.com/nabiulina.nina/" },
    { cover: "/media/nina-painting-wall.jpg", caption: "Holding the walls up until the plasterer arrives", href: "https://www.instagram.com/nabiulina.nina/" },
    { cover: "/media/nina-checkered-fleece.jpg", caption: "Site visit in the good fleece", href: "https://www.instagram.com/nabiulina.nina/" },
    { cover: "/media/nina-demolition-selfie.jpg", caption: "Reel coming soon", href: "https://www.instagram.com/nabiulina.nina/" },
    { cover: "/media/nina-painting-wall.jpg", caption: "Reel coming soon", href: "https://www.instagram.com/nabiulina.nina/" },
  ],
};

export const testimonials = {
  eyebrow: "What people say",
  title: "Agents and owners on working with Nina",
  // PLACEHOLDER: real testimonials
  items: [
    { quote: "Testimonial from an agent goes here. What Nina did, how quickly she moved, and how the vendor felt.", name: "Agent name", role: "Agency, Christchurch" },
    { quote: "Testimonial from a landlord or family goes here. How the private sale or assisted sale worked for them.", name: "Owner name", role: "Landlord, Christchurch" },
  ],
};

export const faq = {
  eyebrow: "Questions",
  title: "Good questions, straight answers",
  items: [
    { q: "What kind of properties does Nina buy?", a: "Houses in any condition across Christchurch and Canterbury: as-is, where-is, tired rentals, vacant homes, deceased estates, damaged properties and sections with subdivision potential. No project too big, too scary or too small." },
    { q: "Do I have to fix anything before selling?", a: "No. Nina buys properties exactly as they are. You don't need to repair, clean or clear anything." },
    { q: "What is an assisted sale?", a: "Instead of selling a tired property as it is, Nina renovates it first so it sells for a better price on the open market. It suits landlords with tired rentals and owners of vacant homes who want more from the sale without managing the work themselves." },
    { q: "Is talking to Nina confidential?", a: "Yes. Your enquiry goes straight to Nina and nobody else. There's no obligation, and nothing is advertised." },
    { q: "Can I sell a rental with tenants still in it?", a: "Often, yes. Tell Nina about the tenancy when you get in touch and she'll talk you through the options." },
    { q: "I'm an agent. How does working with Nina work?", a: "Send Nina the address and a few photos. If it's a fit she'll move quickly, and you stay in the deal with your client. Renovated homes from assisted sales also need an agent to list them." },
    { q: "Does Nina work outside Christchurch?", a: "Nina's home patch is Christchurch and greater Canterbury. If your property is further afield, get in touch anyway." },
  ],
};

export const contactSection = {
  eyebrow: "Get in touch",
  title: "Talk to Nina",
  intro: "Pick who you are, fill in a few details and Nina will get back to you personally. Prefer to talk? Call or text any time.",
  tabs: { owner: "Owner or landlord", agent: "Agent" },
  fields: {
    name: "Your name",
    phone: "Mobile",
    email: "Email (optional)",
    address: "Property address",
    addressOptional: "Property address (optional)",
    agency: "Agency",
    situation: "What's the situation?",
    situations: ["Tired rental", "Vacant property", "Deceased estate", "Needs a full renovation", "Subdivision potential", "Something else"],
    message: "Anything else Nina should know? (optional)",
  },
  submitOwner: "Send to Nina privately",
  submitAgent: "Send to Nina",
  privacy: "Private and confidential. Your details go to Nina only.",
  thanksTitle: "Thanks, that's with Nina.",
  thanksText: "She'll be in touch personally, usually the same day.",
  callLabel: "Call Nina",
  textLabel: "Text Nina",
  emailLabel: "Email Nina",
};

export const finalCta = {
  title: "Got a tired property? Nina would love to see it.",
  sub: "No project too big, too scary or too small.",
  primary: "Talk to Nina",
};

export const footer = {
  line: "Project Nina · Renovations, as-is purchases and assisted sales in Christchurch",
  small: "© 2026 Project Nina",
};

export const sticky = { label: "Talk to Nina", call: "Call", text: "Text" };

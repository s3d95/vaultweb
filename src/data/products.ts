import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    slug: "saad-boost",
    name: "Saad Boost",
    category: "Utility",
    status: "Released",
    version: "1.0.0",
    platform: "Windows",
    shortDescription:
      "A one-click tool that cleans up your Windows PC and helps it run faster.",
    fullDescription:
      "Saad Boost cleans up your Windows PC so it runs faster. With one click it clears out junk files, frees up memory, and resets the DNS cache — so your computer feels quick and responsive again.",
    features: [
      "Free up memory",
      "Reset DNS cache",
      "Clear cached data",
      "Delete junk files",
      "Safe one-click cleanup",
      "See what it's doing live",
    ],
    image: "/images/tools/saad-boost/hero-v2.png",
    gallery: [
      "/images/tools/saad-boost/shot-1.png",
      "/images/tools/saad-boost/shot-2.png",
      "/images/tools/saad-boost/shot-3.png",
    ],
    downloadUrl: "https://mega.nz/file/h2lDEa4K#C3SXZXdOu1Y0BpAUfdLASJt7Abl2vU40AqbGsA_06Z4",
    tags: ["optimizer", "windows", "cleanup", "performance"],
  },
  {
    id: "2",
    slug: "saad-macro",
    name: "Saad Macro",
    category: "Automation",
    status: "Released",
    version: "1.0.0",
    platform: "Windows",
    shortDescription:
      "Record your clicks and keystrokes, then play them back to do repetitive tasks for you.",
    fullDescription:
      "Saad Macro records what you do — your mouse clicks and key presses — and plays it back for you. Great for anything you do over and over. You choose how fast it runs and how many times it repeats.",
    features: [
      "Record user input",
      "Replay macros",
      "Speed control",
      "Repeat count",
      "Load and save macros",
      "Activity log",
    ],
    image: "/images/tools/saad-macro/hero-v2.png",
    gallery: [
      "/images/tools/saad-macro/shot-1.png",
      "/images/tools/saad-macro/shot-2.png",
      "/images/tools/saad-macro/shot-3.png",
    ],
    downloadUrl: "https://mega.nz/file/k78zXIoZ#iNpbWP4sSx36k_4UDsKo4pSHtnjIp9yVAQJ0cAvDJe4",
    tags: ["automation", "macro", "productivity", "workflow"],
  },
  {
    id: "3",
    slug: "saad-switcher",
    name: "Saad Switcher",
    category: "Account Tool",
    status: "Released",
    version: "1.0.0",
    platform: "Windows",
    shortDescription:
      "Switch between your Steam accounts quickly, with just one click.",
    fullDescription:
      "Saad Switcher makes it easy to manage several Steam accounts. Pick an account and switch to it in one click, all from a clean and simple screen.",
    features: [
      "Manage multiple accounts",
      "Quick switch system",
      "Account avatars",
      "Favorites system",
      "Recent activity tracking",
      "Modern UI dashboard",
    ],
    image: "/images/tools/saad-switcher/hero-v2.png",
    gallery: [
      "/images/tools/saad-switcher/shot-1.png",
      "/images/tools/saad-switcher/shot-2.png",
      "/images/tools/saad-switcher/shot-3.png",
    ],
    downloadUrl: "https://mega.nz/file/s6MHxJzY#l5PAnKH--x8mJqiK_W88gV4dpRzzPjGUNZLt3KfIFI8",
    tags: ["steam", "accounts", "launcher", "management"],
  },
  {
  id: "4",
  slug: "saad-snap",
  name: "Saad Snap",
  category: "Utility",
  status: "Released",
  version: "1.0.2",
  platform: "Windows",
  shortDescription:
    "A fast, simple way to take screenshots on your PC.",
  fullDescription:
    "Saad Snap is a simple, fast way to take screenshots. Snap a shot and it saves automatically, so you can find it right away. Clean and easy — nothing complicated.",
  features: [
    "Instant screenshot capture",
    "Auto-save to organized folders",
    "System tray integration",
    "Open last screenshot quickly",
    "Clean and modern UI",
    "Lightweight and fast performance",
  ],
  image: "/images/tools/saad-snap/hero.png",
  gallery: [
    "/images/tools/saad-snap/shot-1.png",
    "/images/tools/saad-snap/shot-2.png",
    "/images/tools/saad-snap/shot-3.png",
  ],
  downloadUrl: "https://mega.nz/file/JvtRCADQ#9dlE8UjeKWw_RVgRHjFYpg9fDlLGTPwr9d7u-200c1E",
  tags: ["screenshot", "capture", "screen", "tool", "windows"],
},
];

export const productCategories = [
  "All",
  "Utility",
  "Automation",
  "Account Tool",
  "Experimental",
] as const;

export const productStatuses = ["All", "Released", "Beta", "Coming Soon"] as const;

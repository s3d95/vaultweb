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
      "One-click Windows optimization utility designed for fast and safe system cleanup.",
    fullDescription:
      "Saad Boost is a precision-built Windows optimization tool focused on delivering immediate performance improvements through controlled system cleanup operations. It targets unnecessary temporary data, DNS cache, standby memory, and prefetch data, providing a streamlined and responsive system experience.",
    features: [
      "Clear standby memory",
      "Flush DNS cache",
      "Clean prefetch data",
      "Remove temporary files",
      "Safe one-click execution",
      "Real-time operation log",
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
      "Professional macro recorder and playback tool for automation workflows.",
    fullDescription:
      "Saad Macro is a lightweight yet powerful macro recording system designed for productivity and automation. It enables recording user actions and replaying them with precision control over speed and repetition.",
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
      "Steam-focused account switch manager with premium UI and fast switching.",
    fullDescription:
      "Saad Switcher is a streamlined Steam account management tool built for fast and secure switching between multiple accounts. It provides a clean interface, quick actions, and optimized workflow for users managing multiple Steam profiles.",
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
];

export const productCategories = [
  "All",
  "Utility",
  "Automation",
  "Account Tool",
  "Experimental",
] as const;

export const productStatuses = ["All", "Released", "Beta", "Coming Soon"] as const;

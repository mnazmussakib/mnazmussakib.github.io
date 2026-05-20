/**
 * YOUR PHOTOS
 * ───────────
 * 1. Drop image files into public/photos/  (jpg, png, webp all work)
 * 2. Add an entry to this array
 * 3. Push to GitHub — done!
 *
 * category options: "travel" | "everyday" | "people"
 * (or add your own — just add the same string to `categories` in life.astro)
 */

export const photos = [
  { src: "/photos/placeholder-1.jpg", caption: "Somewhere beautiful",          location: "City, Country",   category: "travel"    },
  { src: "/photos/placeholder-2.jpg", caption: "Golden hour",                  location: "City, Country",   category: "travel"    },
  { src: "/photos/placeholder-3.jpg", caption: "Lab coffee ritual",             location: "Baltimore, MD",   category: "everyday"  },
  { src: "/photos/placeholder-4.jpg", caption: "Conference friends",            location: "City, Country",   category: "people"    },
  { src: "/photos/placeholder-5.jpg", caption: "A long hike",                  location: "National Park",   category: "travel"    },
  { src: "/photos/placeholder-6.jpg", caption: "Something I found interesting", location: "Somewhere",       category: "everyday"  },
];

/**
 * YOUR PUBLICATIONS
 * ─────────────────
 * Add new papers to the top of the relevant year group.
 * To add a new year, copy one object in the `publications` array.
 *
 * badge options: "badge-amber" | "badge-teal" | "badge-coral" | "badge-purple" | null
 * Set pdf/code/talk to null if you don't have the link yet.
 */

export const publications = [
  {
    year: "2025",
    entries: [
      {
        title:   "Title of your CHI 2025 paper",
        authors: "Sakib, M. N., Co-author, A., Co-author, B.",
        venue:   "ACM CHI 2025",
        type:    "Full paper",
        badge:   "badge-amber",
        pdf:     "#",
        code:    "#",
        talk:    null,
      },
    ],
  },
  {
    year: "2024",
    entries: [
      {
        title:   "Title of your CSCW 2024 workshop paper",
        authors: "Sakib, M. N., Co-author, C.",
        venue:   "CSCW 2024 Workshop on [Workshop Name]",
        type:    "Workshop paper",
        badge:   "badge-teal",
        pdf:     "#",
        code:    null,
        talk:    null,
      },
      {
        title:   "Another paper or preprint",
        authors: "Sakib, M. N., et al.",
        venue:   "arXiv preprint",
        type:    "Preprint",
        badge:   null,
        pdf:     "#",
        code:    "#",
        talk:    null,
      },
    ],
  },
];

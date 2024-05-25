export const idJsonObject = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "PStore",
  image: {
    "@type": "ImageObject",
    url: "https://img.freepik.com/premium-photo/photocomposition-horizontal-shopping-banner-with-woman-big-smartphone_23-2151201773.jpg",
    width: 1080,
    height: 1080,
  },
  telephone: "0866866923",
  url: "http://localhost:3000/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "District 7, Ho Chi Minh City",
    addressLocality: "Ho Chi Minh",
    postalCode: "700000",
    addressRegion: "Ho Chi Minh",
    addressCountry: "VN",
  },
  priceRange: "1000 - 1000000000",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "10.739505685029403",
    longitude: "106.70413548291766",
  },
};

export const products = [
  {
    id: 1,
    name: "Silk Evening Gown",
    price: 450,
    category: "dresses",
    image: "/elegant-silk-evening-gown-black-gold.jpg",
    description: "Luxurious silk evening gown with intricate detailing",
    taille: "M, S, XS, XL",
  },
  {
    id: 2,
    name: "Premium Wool Coat",
    price: 680,
    category: "outerwear",
    image: "/premium-wool-coat-luxury-beige.jpg",
    description: "Classic premium wool coat perfect for any occasion",
  },
  {
    id: 3,
    name: "Cashmere Sweater",
    price: 320,
    category: "tops",
    image: "/luxurious-cashmere-sweater-cream.jpg",
    description: "Soft cashmere sweater for ultimate comfort",
  },
  {
    id: 4,
    name: "Designer Blazer",
    price: 550,
    category: "blazers",
    image: "/tailored-designer-blazer-gold-trim.jpg",
    description: "Perfectly tailored designer blazer with gold accents",
  },
  {
    id: 5,
    name: "Silk Trousers",
    price: 280,
    category: "bottoms",
    image: "/elegant-silk-trousers-black.jpg",
    description: "Elegant silk trousers with perfect fit",
  },
  {
    id: 6,
    name: "Leather Accessories",
    price: 195,
    category: "accessories",
    image: "/luxury-leather-accessories-beige.jpg",
    description: "Premium leather accessories collection",
  },
  {
    id: 7,
    name: "Linen Dress",
    price: 380,
    category: "dresses",
    image: "/premium-linen-dress-cream.jpg",
    description: "Breathable linen dress with timeless elegance",
  },
  {
    id: 8,
    name: "Designer Bag",
    price: 890,
    category: "accessories",
    image: "/luxury-designer-handbag-gold-chain.jpg",
    description: "Exclusive designer handbag with gold hardware",
  },
]

export const bestSellers = [products[0], products[1], products[3], products[7]]

export const sales = [
  { ...products[2], originalPrice: 450 },
  { ...products[4], originalPrice: 380 },
]

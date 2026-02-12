export interface Vehicle {
  id: number;
  name: string;
  type: "car" | "scooter";
  price: number;
  priceOptions?: {
    days: number;
    price: number;
    label: string;
  }[];
  image: string;
  seats: number;
  transmission: "Matic" | "Manual";
  fuel: string;
  year: number;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Toyota Alphard Transformer",
    type: "car",
    price: 2500000,
    image:
      "https://images.unsplash.com/photo-1720545044233-d2ac77fa6030?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seats: 7,
    transmission: "Matic",
    fuel: "Bensin",
    year: 2024,
  },
  {
    id: 2,
    name: "Honda Civic Turbo",
    type: "car",
    price: 1200000,
    image:
      "https://images.unsplash.com/photo-1693876734059-7bd0f6e59067?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seats: 5,
    transmission: "Matic",
    fuel: "Pertamax",
    year: 2023,
  },
  {
    id: 3,
    name: "Suzuki Jimny 5-Door",
    type: "car",
    price: 1500000,
    image:
      "https://images.unsplash.com/photo-1675231305497-1dc08c36b0f5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seats: 4,
    transmission: "Manual",
    fuel: "Bensin",
    year: 2024,
  },
  {
    id: 4,
    name: "Hyundai Ioniq 5",
    type: "car",
    price: 1800000,
    image:
      "https://images.unsplash.com/photo-1701921642695-729c4262b060?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seats: 5,
    transmission: "Matic",
    fuel: "Electric",
    year: 2024,
  },

  {
    id: 5,
    name: "Vespa Sprint S",
    type: "scooter",
    price: 250000,
    priceOptions: [
      { days: 3, price: 700000, label: "3 Hari" },
      { days: 7, price: 1500000, label: "7 Hari" },
      { days: 30, price: 5000000, label: "1 Bulan" },
    ],
    image:
      "https://images.unsplash.com/photo-1691525504376-1b87d3a7429d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seats: 2,
    transmission: "Matic",
    fuel: "Pertamax",
    year: 2023,
  },
  {
    id: 6,
    name: "Kawasaki Ninja ZX-25R",
    type: "scooter",
    price: 500000,
    priceOptions: [
      { days: 3, price: 1400000, label: "3 Hari" },
      { days: 7, price: 3000000, label: "7 Hari" },
      { days: 30, price: 10000000, label: "1 Bulan" },
    ],
    image:
      "https://images.unsplash.com/photo-1744471081329-e041204e6109?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seats: 2,
    transmission: "Manual",
    fuel: "Pertamax Turbo",
    year: 2022,
  },
  {
    id: 7,
    name: "Honda PCX 160",
    type: "scooter",
    price: 150000,
    priceOptions: [
      { days: 3, price: 400000, label: "3 Hari" },
      { days: 7, price: 900000, label: "7 Hari" },
      { days: 30, price: 3000000, label: "1 Bulan" },
    ],
    image:
      "https://images.unsplash.com/photo-1628798211398-29d5c9773fbd?q=80&w=447&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seats: 2,
    transmission: "Matic",
    fuel: "Bensin",
    year: 2023,
  },
  {
    id: 8,
    name: "Yamaha XMAX Connected",
    type: "scooter",
    price: 350000,
    priceOptions: [
      { days: 3, price: 1000000, label: "3 Hari" },
      { days: 7, price: 2200000, label: "7 Hari" },
      { days: 30, price: 7500000, label: "1 Bulan" },
    ],
    image:
      "https://images.unsplash.com/photo-1693479703657-a5ce2b29d542?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seats: 2,
    transmission: "Matic",
    fuel: "Bensin",
    year: 2024,
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    name: "Dimas Anggara",
    role: "Family Vacation",
    text: "The Alphard rental here was very satisfying. The car was clean, smelled nice, and the driver was on time. The kids were happy!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Sarah Wijaya",
    role: "Solo Traveler",
    text: "Renting a Vespa to explore the city all day was really fun. The booking process was fast, no hassle, just needed an ID card.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Business Trip",
    text: "The price was competitive compared to other rentals. The Civic was in prime condition with cold AC. Recommended for business trips.",
    rating: 4,
    avatar:
      "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    name: "Jessica Tan",
    role: "Honeymoon",
    text: "The service from the admin was very friendly. The Jimny was cool for taking photos in the mountains. Thanks, GoRent!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
  },
];

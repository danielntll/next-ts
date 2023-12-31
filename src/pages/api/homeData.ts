// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { tRoom } from "@/types/tRoom";
import type { NextApiRequest, NextApiResponse } from "next";

const roomList: tRoom[] = [
  {
    id: 1,
    name: "Bella Vista Hotel",
    description: "A luxurious hotel with panoramic ocean views",
    location: "Coastal city",
    price: 200,
    availability: true,
    reviews: [
      { author: "Marco", comment: "Excellent service and spacious rooms" },
      { author: "Giulia", comment: "Friendly staff and delicious breakfast" },
    ],
    imageLocation: "https://picsum.photos/300/200?1",
    amenities: ["Free Wi-Fi", "Swimming pool", "Fitness center"],
    rating: 4.5,
    contact: {
      phone: "+1234567890",
      email: "info@bellavista.com",
    },
    website: "https://www.bellavista.com",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    nearbyAttractions: ["Beach", "Shopping mall", "Fine dining"],
    roomsAvailable: [
      { type: "Standard", price: 200, quantity: 5 },
      { type: "Deluxe", price: 300, quantity: 3 },
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Mountain Green Hotel",
    description: "A cozy hotel nestled in the mountains",
    location: "Mountain area",
    price: 150,
    availability: false,
    reviews: [
      { author: "Luca", comment: "Quiet and relaxing atmosphere" },
      { author: "Simona", comment: "Clean rooms and friendly staff" },
    ],
    imageLocation: "https://picsum.photos/300/200?2",
    amenities: ["Free parking", "Restaurant", "Spa"],
    rating: 4.2,
    contact: {
      phone: "+9876543210",
      email: "info@mountaingreen.com",
    },
    website: "https://www.mountaingreen.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    nearbyAttractions: ["Hiking trails", "Ski resort", "Nature reserve"],
    roomsAvailable: [
      { type: "Standard", price: 150, quantity: 8 },
      { type: "Suite", price: 250, quantity: 2 },
    ],
    featured: false,
  },
  {
    id: 3,
    name: "Sunset Resort",
    description: "A beachfront resort with breathtaking sunset views",
    location: "Tropical paradise",
    price: 150,
    availability: true,
    reviews: [
      { author: "Alex", comment: "Amazing location and friendly staff" },
      { author: "Emma", comment: "Clean rooms and great amenities" },
    ],
    imageLocation: "https://picsum.photos/300/200?3",
    amenities: ["Private beach", "Spa", "Restaurant"],
    rating: 4.2,
    contact: {
      phone: "+1234567890",
      email: "info@sunsetresort.com",
    },
    website: "https://www.sunsetresort.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    nearbyAttractions: ["Waterfalls", "Hiking trails", "Snorkeling spots"],
    roomsAvailable: [
      { type: "Standard", price: 150, quantity: 8 },
      { type: "Suite", price: 400, quantity: 2 },
    ],
    featured: false,
  },
  {
    id: 4,
    name: "Mountain View Lodge",
    description: "A cozy lodge nestled in the mountains",
    location: "Scenic mountain range",
    price: 180,
    availability: true,
    reviews: [
      {
        author: "Sophia",
        comment: "Beautiful surroundings and comfortable beds",
      },
      {
        author: "Liam",
        comment: "Friendly staff and great hiking trails nearby",
      },
    ],
    imageLocation: "https://picsum.photos/300/200?4",
    amenities: ["Fireplace", "Hot tub", "Restaurant"],
    rating: 4.7,
    contact: {
      phone: "+1234567890",
      email: "info@mountainviewlodge.com",
    },
    website: "https://www.mountainviewlodge.com",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    nearbyAttractions: [
      "Ski resort",
      "Scenic viewpoints",
      "Wildlife sanctuary",
    ],
    roomsAvailable: [
      { type: "Standard", price: 180, quantity: 6 },
      { type: "Cabin", price: 250, quantity: 4 },
    ],
    featured: true,
  },
  {
    id: 5,
    name: "City Lights Inn",
    description: "A modern hotel with stunning city skyline views",
    location: "Downtown metropolitan area",
    price: 220,
    availability: true,
    reviews: [
      { author: "Olivia", comment: "Fantastic location and comfortable rooms" },
      { author: "Noah", comment: "Great amenities and helpful staff" },
    ],
    imageLocation: "https://picsum.photos/300/200?5",
    amenities: ["Gym", "Restaurant", "Conference rooms"],
    rating: 4.4,
    contact: {
      phone: "+1234567890",
      email: "info@citylightsinn.com",
    },
    website: "https://www.citylightsinn.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    nearbyAttractions: ["Museums", "Nightlife", "Shopping district"],
    roomsAvailable: [
      { type: "Standard", price: 220, quantity: 7 },
      { type: "Executive", price: 350, quantity: 3 },
    ],
    featured: false,
  },
  {
    id: 6,
    name: "Nature Retreat",
    description: "An eco-friendly retreat surrounded by lush greenery",
    location: "Secluded natural reserve",
    price: 130,
    availability: true,
    reviews: [
      { author: "Ava", comment: "Peaceful ambiance and helpful staff" },
      { author: "William", comment: "Clean rooms and beautiful hiking trails" },
    ],
    imageLocation: "https://picsum.photos/300/200?6",
    amenities: ["Organic restaurant", "Yoga studio", "Nature trails"],
    rating: 4.6,
    contact: {
      phone: "+1234567890",
      email: "info@natureretreat.com",
    },
    website: "https://www.natureretreat.com",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    nearbyAttractions: [
      "Waterfalls",
      "Bird watching spots",
      "Wildlife sanctuary",
    ],
    roomsAvailable: [
      { type: "Standard", price: 130, quantity: 10 },
      { type: "Treehouse", price: 250, quantity: 2 },
    ],
    featured: true,
  },
  {
    id: 7,
    name: "Riverside Inn",
    description: "A charming inn overlooking a picturesque river",
    location: "Riverside town",
    price: 120,
    availability: true,
    reviews: [
      { author: "Isabella", comment: "Quaint rooms and friendly staff" },
      { author: "James", comment: "Beautiful views and peaceful atmosphere" },
    ],
    imageLocation: "https://picsum.photos/300/200?7",
    amenities: ["Riverside terrace", "Bar", "Bike rental"],
    rating: 4.3,
    contact: {
      phone: "+1234567890",
      email: "info@riversideinn.com",
    },
    website: "https://www.riversideinn.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    nearbyAttractions: [
      "River cruises",
      "Historic landmarks",
      "Cycling trails",
    ],
    roomsAvailable: [
      { type: "Standard", price: 120, quantity: 8 },
      { type: "River view", price: 180, quantity: 2 },
    ],
    featured: false,
  },
  {
    id: 8,
    name: "Tranquil Haven",
    description: "A serene haven tucked away in the countryside",
    location: "Rural countryside",
    price: 170,
    availability: true,
    reviews: [
      { author: "Charlotte", comment: "Peaceful surroundings and cozy rooms" },
      {
        author: "Benjamin",
        comment: "Friendly staff and delicious homemade meals",
      },
    ],
    imageLocation: "https://picsum.photos/300/200?8",
    amenities: ["Gardens", "Spa", "Farm-to-table restaurant"],
    rating: 4.8,
    contact: {
      phone: "+1234567890",
      email: "info@tranquilhaven.com",
    },
    website: "https://www.tranquilhaven.com",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    nearbyAttractions: ["Wineries", "Scenic drives", "Countryside walks"],
    roomsAvailable: [
      { type: "Standard", price: 170, quantity: 6 },
      { type: "Cottage", price: 250, quantity: 4 },
    ],
    featured: true,
  },
  {
    id: 9,
    name: "Urban Oasis",
    description: "An urban retreat with modern amenities",
    location: "City center",
    price: 190,
    availability: true,
    reviews: [
      { author: "Mia", comment: "Convenient location and comfortable beds" },
      { author: "Ethan", comment: "Great rooftop bar and friendly staff" },
    ],
    imageLocation: "https://picsum.photos/300/200?9",
    amenities: ["Rooftop pool", "Gym", "Restaurant"],
    rating: 4.5,
    contact: {
      phone: "+1234567890",
      email: "info@urbanoasis.com",
    },
    website: "https://www.urbanoasis.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    nearbyAttractions: ["Museums", "Shopping", "Nightlife"],
    roomsAvailable: [
      { type: "Standard", price: 190, quantity: 7 },
      { type: "Luxury", price: 350, quantity: 3 },
    ],
    featured: false,
  },
  {
    id: 10,
    name: "Historic Manor",
    description: "A grand manor steeped in history and elegance",
    location: "Historic district",
    price: 250,
    availability: true,
    reviews: [
      {
        author: "Harper",
        comment: "Beautiful architecture and attentive staff",
      },
      {
        author: "Sebastian",
        comment: "Spacious rooms and exquisite dining experience",
      },
    ],
    imageLocation: "https://picsum.photos/300/200?10",
    amenities: ["Ballroom", "Gardens", "Fine dining restaurant"],
    rating: 4.7,
    contact: {
      phone: "+1234567890",
      email: "info@historicmanor.com",
    },
    website: "https://www.historicmanor.com",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    nearbyAttractions: ["Historic landmarks", "Art galleries", "Antique shops"],
    roomsAvailable: [
      { type: "Standard", price: 250, quantity: 5 },
      { type: "Suite", price: 400, quantity: 2 },
    ],
    featured: true,
  },
  {
    id: 11,
    name: "Lakeside Retreat",
    description: "A peaceful retreat overlooking a tranquil lake",
    location: "Lakefront",
    price: 180,
    availability: true,
    reviews: [
      {
        author: "Evelyn",
        comment: "Scenic views and comfortable accommodations",
      },
      {
        author: "Jackson",
        comment: "Friendly staff and great fishing spots nearby",
      },
    ],
    imageLocation: "https://picsum.photos/300/200?11",
    amenities: ["Boat rentals", "Fire pits", "Lakefront restaurant"],
    rating: 4.4,
    contact: {
      phone: "+1234567890",
      email: "info@lakesideretreat.com",
    },
    website: "https://www.lakesideretreat.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    nearbyAttractions: ["Hiking trails", "Water sports", "Wildlife sanctuary"],
    roomsAvailable: [
      { type: "Standard", price: 180, quantity: 8 },
      { type: "Lake view", price: 250, quantity: 3 },
    ],
    featured: false,
  },
  {
    id: 12,
    name: "Cozy Cabin",
    description: "A charming cabin surrounded by nature",
    location: "Woodland area",
    price: 150,
    availability: true,
    reviews: [
      { author: "Aiden", comment: "Peaceful atmosphere and cozy fireplace" },
      {
        author: "Abigail",
        comment: "Clean accommodations and beautiful hiking trails",
      },
    ],
    imageLocation: "https://picsum.photos/300/200?12",
    amenities: ["Fireplace", "Outdoor seating", "BBQ area"],
    rating: 4.6,
    contact: {
      phone: "+1234567890",
      email: "info@cozycabin.com",
    },
    website: "https://www.cozycabin.com",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    nearbyAttractions: [
      "Hiking trails",
      "Nature reserves",
      "Scenic viewpoints",
    ],
    roomsAvailable: [
      { type: "Standard", price: 150, quantity: 6 },
      { type: "Log cabin", price: 220, quantity: 4 },
    ],
    featured: true,
  },
];

type Data = {
  data: tRoom[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: roomList });
}

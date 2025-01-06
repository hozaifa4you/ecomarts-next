import { Icons } from "@/components/Icons";

const marqueeData = [
   "Limited time offer",
   "Gadget 30% Off",
   "10% of products for winter",
   "$5 Off Accessories",
   "50% off clearance sale",
   "Flash sales of up to 90%",
];

const categoryData = [
   { id: 1, category: "I Pad", count: "16 items", svg: Icons.Ipad },
   { id: 2, category: "Laptop", count: "22 items", svg: Icons.Laptop },
   { id: 3, category: "Gadgets", count: "230 items", svg: Icons.Gadgets },
   { id: 4, category: "Plug", count: "32 items", svg: Icons.Gadgets },
   { id: 5, category: "Phone", count: "105 items", svg: Icons.Phone },
   { id: 6, category: "Game", count: "73 items", svg: Icons.Game },
   { id: 7, category: "I Pad", count: "16 items", svg: Icons.Ipad },
   { id: 8, category: "Laptop", count: "22 items", svg: Icons.Laptop },
];

export type CategoryType = (typeof categoryData)[0];
export { categoryData, marqueeData };

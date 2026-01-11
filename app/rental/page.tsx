import { client } from "@/lib/sanity";
import RentalPageContent, { Vehicle } from "@/components/RentalPageContent";

async function getVehicles() {
  const query = `*[_type == "vehicle"] | order(_createdAt desc) {
    _id,
    name,
    type,
    image,
    year,
    transmission,
    fuel,
    seats,
    price,
    "priceOptions": pricing[] {
      label,
      price,
      unit
    }
  }`;

  try {
    const data = await client.fetch<Vehicle[]>(query);
    return data || [];
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    return [];
  }
}

export const revalidate = 0;

export default async function RentalPage() {
  const vehicles = await getVehicles();

  return <RentalPageContent vehicles={vehicles} />;
}
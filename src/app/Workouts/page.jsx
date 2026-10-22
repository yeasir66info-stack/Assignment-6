import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import { getAllProducts } from "@/library/api";

export default async function WorkoutPage() {
  const products = await getAllProducts();
  
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
        <Banner />
        <AllProducts products={products} />
    </div>
  );
}
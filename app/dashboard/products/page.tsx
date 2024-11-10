import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Product } from "@/entities";
import FilteredCards from "./_components/FilteredCard";

const ProductsPage = async () => {
    const response = await fetch(`${API_URL}/products`, {
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: ["dashboard:products"]
        }
    });
    const products: Product[] = await response.json();
    return (
        <div className="h-[90vh] w-full">
            <div className="w-4/12">
                <FilteredCards products={products} />
            </div>
        </div>
    )
}

export default ProductsPage;
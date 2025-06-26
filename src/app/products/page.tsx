import Link from "next/link";

export default function Products(){
    const productId = 100;
    return (
        <>
            <Link href='/'>Home</Link>
            <h1>Products</h1>
            <Link href={`/products/${productId}`}><h2>Product {productId}</h2></Link>
        </>
    );

}
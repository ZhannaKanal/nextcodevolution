// import { Metadata } from "next";

// type Props = {
//     params: Promise <{productId: string}>;
// };

// export const generateMetaData = async ({params}: Props): Promise<Metadata> => {
//     const id = (await params).productId;
//     return{
//         title: `Product ${id}`,
//     };
// };

// export default async function ProductDetails({params}: Props ){
//     const productId= (await params).productId;
//     return <h1>Details about {productId}</h1>;
// }

import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

// ✅ Dynamic page title using `generateMetadata`
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = params.productId;
  const title = await new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(`Iphone ${id}`)
    }, 100)
  })
  return {
    title: `Product ${id}`,
  };
};

// ✅ Page Component
export default async function ProductDetails({ params }: Props) {
  const productId = params.productId;
  return <h1>Details about {productId}</h1>;
}

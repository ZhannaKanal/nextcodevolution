'use client'

import { useRouter } from "next/navigation";
import '../globals.css'

export default function OrderProduct() {
    const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push('/')
  };
  return (
    <div className="mt-[50px]">
      <h1 className='text-center'>Order Product</h1>
      <button onClick={handleClick} className="ml-[685px] border-[1px] border-solid border-[orange] rounded-[12px] text-[#f5a700] px-[30px] py-[10px] my-[20px]">Place order</button>
    </div>
  );
}

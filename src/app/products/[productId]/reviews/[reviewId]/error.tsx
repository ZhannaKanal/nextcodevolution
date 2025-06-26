"use client";
import "../../../../globals.css";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
    const router =useRouter();
    const reload = ()=> {startTransition(()=>{
        router.refresh();
        reset();
    })}
  return (
    <div>
      {error.message} <br />
      <button onClick={() => reload()} className="bg-[orange] text-[white] rounded-[8px] px-[20px] py-[5px] my-[10px]">
        Try again
      </button>
    </div>
  );
}

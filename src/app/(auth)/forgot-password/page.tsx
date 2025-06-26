import "../../globals.css";

export default function ForgotPassword() {
  return (
    <div className="my-[50px]">
      <hr className="h-[0.5px] w-1/2 mx-auto border-t border-dashed border-[grey] my-[20px]" />
      <div className="max-w-[1300px] w-full mx-auto ">
        <h1 className="text-[36px] text-[grey] font-[bold] text-center">
          Did you forgot your password?
        </h1>
        <div className="max-w-[200px] w-full mx-auto">
          <label htmlFor="">
            <input
              type="text"
              className="w- p-[6px] px-[30px] border-[red] border-[1px] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[pink] text-[grey]"
              placeholder="Write your email"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

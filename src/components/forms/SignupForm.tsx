export default function SignupForm()
{
    return <div className={"flex flex-col gap-7 justify-center items-center"}>
        <div className={"text-white text-4xl font-black"}>SIGN UP</div>
        <label htmlFor="" className={"flex flex-col gap-3"}>
            <span>email</span>
            <input type="email" className={"w-auto h-[35px] rounded-3xl"}/>
        </label>
        <label htmlFor="" className={"flex flex-col gap-3"}>
            <span>user name</span>
            <input type="text" className={"w-auto h-[35px] rounded-3xl"}/>
        </label>
        <label htmlFor="" className={"flex flex-col gap-3"}>
            <span>password</span>
            <input type="text" className={"w-auto h-[35px] rounded-3xl"}/>
        </label>
        <label htmlFor="" className={"flex flex-col gap-3"}>
            <span>re-password</span>
            <input type="text" className={"w-auto h-[35px] rounded-3xl"}/>
        </label>

        <div className={"text-[10px] text-white"}>user police</div>

        <div className={"flex gap-3 w-full"}>
            <button className={"bg-white text-black w-full h-[35px] rounded-3xl"}>
                login
            </button>
            <button className={"bg-white text-black w-full h-[35px] rounded-3xl"}>
                sign up
            </button>
        </div>
    </div>;
}
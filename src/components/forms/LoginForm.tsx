import TextField from "@mui/material/TextField"

export default function LoginForm()
{
    return <div className={"flex flex-col gap-10 justify-center items-center"}>
        <div className={"text-white text-4xl font-black"}>LOGIN</div>
        <label htmlFor="" className={"flex flex-col gap-3"}>
            <span>user name</span>
            <input type="text" className={"w-auto h-[35px] rounded-3xl"}/>
        </label>
        <label htmlFor="" className={"flex flex-col gap-3"}>
            <span>password</span>
            <input type="text" className={"w-auto h-[35px] rounded-3xl"}/>
        </label>

        <div className={"text-[10px] text-white"}>forgot you pass?</div>

        <div className={"flex gap-3 w-full"}>
            <button className={"bg-white text-black w-full h-[35px] rounded-3xl"}>
                sign up
            </button>
            <button className={"bg-white text-black w-full h-[35px] rounded-3xl"}>
                login
            </button>
        </div>
    </div>;
}
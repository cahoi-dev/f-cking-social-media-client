import CommentContainer from "containers/CommentContainer";
import Post from "../components/Post";
import Avatar from "@mui/material/Avatar";

export default function CommentSection()
{
    return <div className={"p-4 flex flex-col gap-7"}>
        <div className={"flex items-center gap-3"}>
            <Avatar sx={{width: 30, height: 30}} alt="vu_pham" src="/static/images/avatar/1.jpg" />
            <label className={"w-full flex py-3 px-6 gap-3 bg-white rounded-3xl text-black"} htmlFor="">
                <input className={"w-full border-none outline-none"} type="text"/>
                <button>Send</button>
            </label>
        </div>
        <div>
            <span className={"font-black text-white"}>vu_pham: </span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores blanditiis commodi consectetur, eveniet facilis harum, ipsa ipsam, iste natus nulla odit sed unde ut voluptatibus? Architecto cupiditate nihil ullam?
        </div>
        <CommentContainer/>
    </div>;
}
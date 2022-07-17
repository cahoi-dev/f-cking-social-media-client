import Avatar from "@mui/material/Avatar";

import {FiMoreHorizontal} from "react-icons/fi";
import {MdFavoriteBorder} from "react-icons/md";
import {MdOutlineModeComment} from "react-icons/md";
import {AiOutlineSend} from "react-icons/ai";
import {BsBookmark} from "react-icons/bs";

export default function Post(props: any)
{
    const onLove = () =>
    {
        console.log("love it")
    }

    return <div>
        <div className={"p-3 flex justify-between items-center"}>
            <div className={"flex items-center gap-2"}>
                <Avatar sx={{width: 30, height: 30}} alt="vu_pham" src="/static/images/avatar/1.jpg" />
                <span className={"font-black text-white"}>vu_pham</span>
            </div>
            <FiMoreHorizontal/>
        </div>
        <div>
            <img
                src="https://images.unsplash.com/photo-1618436917286-e1981a738a44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                alt=""/>
        </div>
        <div className={"p-3 flex flex-col gap-3"}>
            <div className={"flex justify-between items-center text-3xl"}>
                <ul className={"flex justify-between items-center gap-5"}>
                    <li><MdFavoriteBorder onClick={()=>onLove()}/></li>
                    <li><MdOutlineModeComment/></li>
                    <li><AiOutlineSend/></li>
                </ul>
                <div>
                    <BsBookmark/>
                </div>
            </div>
            <div className={""}>
                1,032,324 likes
            </div>
            <div className={"post-content"}>
                <span className={"font-black text-white"}>vupham: </span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid commodi expedita, ipsam iste nisi sapiente vitae voluptatibus! Architecto cumque labore similique? Aliquid dolorem ea, et maxime natus suscipit vero?
            </div>
        </div>
    </div>;
}
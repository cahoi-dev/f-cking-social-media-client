import {RiHomeLine} from  "react-icons/ri"
import {TbMessageCircle2, TbNotification} from "react-icons/tb";
import {AiOutlineUser} from "react-icons/ai";

export default function Navigation(props: any)
{
    return <ul className={"flex justify-around text-3xl fixed bottom-0 w-full py-3 border-0 border-t border-t-white bg-black"}>
        <li><RiHomeLine/></li>
        <li><TbMessageCircle2/></li>
        <li><TbNotification/></li>
        <li><AiOutlineUser/></li>
    </ul>;
}
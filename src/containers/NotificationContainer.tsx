import Notification from "../components/Notification";
import Post from "../components/Post";

export default function NotificationContainer()
{
    return <div className={"flex flex-col p-3"}>
        {(new Array(100)).fill(null).map((value: any, index: number) => {
            return <div>
                <div><Notification/></div>
                <div className={"w-full h-[1px] bg-gray-500 my-4"}></div>
            </div>;
        })}
    </div>;
}
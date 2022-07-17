import Comment from "components/Comment";
import Notification from "components/Notification";

export default function CommentContainer()
{
    return <div className={"flex flex-col"}>
        {(new Array(100)).fill(null).map((value: any, index: number) => {
            return <div>
                <Comment/>
                <div className={"w-full h-[1px] bg-gray-500 my-5"}></div>
            </div>;
        })}
    </div>;
}
import Post from "components/Post";

export default function PostContainer(props: any)
{
    return <div className={"flex flex-col gap-5"}>
        {(new Array(100)).fill(null).map((value: any, index: number) => {
            return <Post/>
        })}
    </div>
}
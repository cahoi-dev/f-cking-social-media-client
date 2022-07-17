import Avatar from "@mui/material/Avatar";

export default function Comment()
{
    return <div className={"flex gap-3"}>
        <Avatar sx={{width: 30, height: 30}} alt="vu_pham" src="/static/images/avatar/1.jpg" />
        <div>
            <span className={"font-black text-white"}>vu_pham</span> consectetur adipisicing elit. Ab ducimus eius enim et hic, iste temporibus unde veritatis
            <div className={"text-sm font-black text-gray-300"}>----- Thu 9, 2022</div>
        </div>
    </div>;
}
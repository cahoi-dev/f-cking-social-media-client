import Avatar from "@mui/material/Avatar";

export default function Notification()
{
    return <div className={"flex gap-3"}>
        <Avatar sx={{width: 30, height: 30}} alt="vu_pham" src="/static/images/avatar/1.jpg" />
        <div>
            <span className={"font-black text-white"}>vu_pham</span> consectetur adipisicing elit. Ab ducimus eius enim et hic, iste temporibus unde veritatis
            <div className={"inline-flex text-sm font-black"}>----- Thu 9, 2022</div>
        </div>
    </div>
}
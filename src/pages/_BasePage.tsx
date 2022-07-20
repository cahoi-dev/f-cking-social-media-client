import Navigation from "components/Navigation";
import Feeds from "pages/Feeds";
import MyNotification from "pages/MyNotification";
import CommentSection from "pages/CommentSection";
import Login from "./Login";
import Signup from "./Signup";


export default function _BasePage(props: any)
{
    return <div>
        <Signup/>
        {/*<Login/>*/}
        {/*<MyNotification/>*/}
        {/*<Feeds/>*/}
        {/*<CommentSection/>*/}
        {/*<Navigation/>*/}
    </div>;
}
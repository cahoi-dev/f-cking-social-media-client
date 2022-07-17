import Navigation from "components/Navigation";
import Feeds from "pages/Feeds";
import MyNotification from "pages/MyNotification";
import CommentSection from "pages/CommentSection";


export default function _BasePage(props: any)
{
    return <div>
        {/*<MyNotification/>*/}
        <Feeds/>
        {/*<CommentSection/>*/}
        <Navigation/>
    </div>;
}
import Studentpannelwrapper from '../Studentpannel/Studentpannelwrapper/Studentpannelwrapper';
import Studentcustomtab from "../Studentpannel/Studentcustomtab/Studentcustomtab";
import Activehomework from "./Activehomework";
import Inactivehomework from "./Inactivehomework";

const tabsData = [
    { key: "unsubmitted-homework", title: "Unsubmitted Homework", content: <Activehomework /> },
    { key: "submitted-homework", title: "Submitted Homework", content: <Inactivehomework /> },

];



const Homeworkhome = () => {
    return (
        <Studentpannelwrapper studentpannelHeading="Homework">
            <div>
                <Studentcustomtab tabs={tabsData} />
            </div>
        </Studentpannelwrapper>
    )
}

export default Homeworkhome

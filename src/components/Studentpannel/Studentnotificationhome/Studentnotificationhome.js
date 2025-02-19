import Studentcustomtab from "../Studentcustomtab/Studentcustomtab";
import Studentpannelwrapper from "../Studentpannelwrapper/Studentpannelwrapper"
import Studentnotifydata from "./Studentnotifydata";


const tabsData = [
    { key: "student-notification", title: "Notification", content: <Studentnotifydata /> },
];


const Studentnotificationhome = () => {
    return (
        <Studentpannelwrapper studentpannelHeading="Notification">
            <div>
                <Studentcustomtab tabs={tabsData} />
            </div>
        </Studentpannelwrapper>
    )
}

export default Studentnotificationhome;

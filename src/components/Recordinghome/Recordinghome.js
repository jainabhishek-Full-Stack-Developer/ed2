import Studentpannelwrapper from "../Studentpannel/Studentpannelwrapper/Studentpannelwrapper";
import Studentcustomtab from "../Studentpannel/Studentcustomtab/Studentcustomtab";
import Allrecordings from "./Allrecordings";



const tabsData = [
    { key: "class-recordings", title: "Recordings", content: <Allrecordings /> },


];


const Recordinghome = () => {
    return (
        <Studentpannelwrapper studentpannelHeading="Recordings">
            <div>
                <Studentcustomtab tabs={tabsData} />
            </div>
        </Studentpannelwrapper>
    )
}

export default Recordinghome;

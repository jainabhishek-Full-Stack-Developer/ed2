import Studentcustomtab from "../Studentcustomtab/Studentcustomtab";
import Studentpannelwrapper from "../Studentpannelwrapper/Studentpannelwrapper";
import Studentgivereview from "./Studentgivereview";


const tabsData = [
    { key: "student-give-review", title: "Review", content: <Studentgivereview /> },
 
];

const Studentreviewhome = () => {
    return (
        <Studentpannelwrapper studentpannelHeading="Review">
            <div>
                <Studentcustomtab tabs={tabsData} />
            </div>
        </Studentpannelwrapper>
    )
}

export default Studentreviewhome;

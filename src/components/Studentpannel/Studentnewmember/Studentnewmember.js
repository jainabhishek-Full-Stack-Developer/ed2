import Studentcustomtab from '../Studentcustomtab/Studentcustomtab';
import Studentpannelwrapper from '../Studentpannelwrapper/Studentpannelwrapper'
import Addmember from './Addmember';
import Allmemberhome from './Allmemberhome';

const tabsData = [
    { key: "all-member", title: "All Member", content: <Allmemberhome /> },
    { key: "add-member", title: "Add Member", content: <Addmember /> },

];

const Studentnewmember = () => {
    return (
        <Studentpannelwrapper studentpannelHeading="Members">
            <div>
                <Studentcustomtab tabs={tabsData} />
            </div>
        </Studentpannelwrapper>
    )
}

export default Studentnewmember;

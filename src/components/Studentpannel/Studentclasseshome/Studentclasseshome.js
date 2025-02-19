import Studentcustomtab from '../Studentcustomtab/Studentcustomtab';
import StudentpanneldashboardCard from '../StudentpanneldashboardCard/StudentpanneldashboardCard';
import Studentpannelwrapper from '../Studentpannelwrapper/Studentpannelwrapper'
import { SiCoursera } from "react-icons/si";
import Studentallclasses from './Studentallclasses';
import Studenttodayclasses from './Studenttodayclasses';


const tabsData = [
    { key: "student-allclasses", title: "Upcomming Classes", content: <Studentallclasses /> },
    { key: "student-todayclasses", title: "Past Classes", content: <Studenttodayclasses /> },

];


const Studentclasseshome = () => {
    return (
        <Studentpannelwrapper studentpannelHeading="My Classes">
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <StudentpanneldashboardCard
                    title="Upcomming Classes"
                    value={10}
                    icon={<SiCoursera size={20} />}
                />
                <StudentpanneldashboardCard
                    title="Past Classes"
                    value={6}
                    icon={<SiCoursera size={20} />}
                />
            </div>
            <div>
                <Studentcustomtab tabs={tabsData} />
            </div>
        </Studentpannelwrapper>
    )
}

export default Studentclasseshome;

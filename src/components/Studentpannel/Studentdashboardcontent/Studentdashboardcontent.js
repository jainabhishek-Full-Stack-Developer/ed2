import styles from "./page.module.css";
import StudentpanneldashboardCard from "../StudentpanneldashboardCard/StudentpanneldashboardCard";
import Studentpannelwrapper from "../Studentpannelwrapper/Studentpannelwrapper";
import { FaChalkboardTeacher, FaBook, FaClock } from "react-icons/fa";
import Refercard from "@/components/Referearnhome/Refercard";
import Upcommingclasseshome from "@/components/Upcommingclasseshome/Upcommingclasseshome";

import Leaderboardcard from "@/components/Leaderboardhome/Leaderboardcard";

const Studentdashboardcontent = () => {
    return (
        <Studentpannelwrapper studentpannelHeading="Dashboard">
                 <Refercard />
            <div className={styles.dashboard}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    <StudentpanneldashboardCard
                        title="Total Enrolled Courses"
                        value={8}
                        icon={<FaBook size={25} />}
                        bgcolor="#fdfa72"
                        iconColor="#8B8000"
                    />
                    <StudentpanneldashboardCard
                        title="Completed Classes"
                        value={24}
                        icon={<FaChalkboardTeacher size={25} />}
                        bgcolor="#ADD8E6"
                        iconColor="#1E3A8A"
                    />
                    <StudentpanneldashboardCard
                        title="Pending Classes"
                        value={3}
                        icon={<FaChalkboardTeacher size={25} />}
                        bgcolor="#FFB6C1"
                        iconColor="#8B0000"
                    />
                    <StudentpanneldashboardCard
                        title="Upcoming Classes Today"
                        value={2}
                        icon={<FaClock size={25} />}
                        bgcolor="#98FB98"
                        iconColor="#006400"
                    />
                </div>          
               
            </div>
            <Upcommingclasseshome />
            <Leaderboardcard/>
         
        
        </Studentpannelwrapper>
    )
}

export default Studentdashboardcontent;

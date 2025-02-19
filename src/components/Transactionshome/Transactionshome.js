import Studentpannelwrapper from '../Studentpannel/Studentpannelwrapper/Studentpannelwrapper';
import Studentcustomtab from "../Studentpannel/Studentcustomtab/Studentcustomtab";
import Bookedtransaction from './Bookedtransaction';
import Attendedtransaction from './Attendedtransaction';
import Pendingtransaction from './Pendingtransaction';
import Missedtransaction from './Missedtransaction';
import Cancelledtransaction from './Cancelledtransaction';
import StudentpanneldashboardCard from '../Studentpannel/StudentpanneldashboardCard/StudentpanneldashboardCard';
import { IoCard } from "react-icons/io5";




const tabsData = [
    { key: "booked-transactions", title: "Booked", content: <Bookedtransaction /> },
    { key: "attended-transactions", title: "Attended", content: <Attendedtransaction /> },
    { key: "pending-transactions", title: "Pending", content: <Pendingtransaction /> },
    { key: "missed-transactions", title: "Missed", content: <Missedtransaction /> },
    { key: "cancelled-transactions", title: "Cancelled", content: <Cancelledtransaction /> },
    

];


const Transactionshome = () => {
    return (
        <Studentpannelwrapper>
             <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <StudentpanneldashboardCard
                    title="Booked"
                    value={10}
                    icon={<IoCard size={20} />}

                />
                <StudentpanneldashboardCard
                    title="Attended"
                    value={6}
                    icon={<IoCard size={20} />}
                />
                <StudentpanneldashboardCard
                    title="Pending"
                    value={6}
                    icon={<IoCard size={20} />}
                />
                <StudentpanneldashboardCard
                    title="Missed"
                    value={6}
                    icon={<IoCard size={20} />}
                />
                  <StudentpanneldashboardCard
                    title="Cancelled"
                    value={6}
                    icon={<IoCard size={20} />}
                />
            </div>
             <div>
                <Studentcustomtab tabs={tabsData} />
            </div>
        </Studentpannelwrapper>
    )
}

export default Transactionshome

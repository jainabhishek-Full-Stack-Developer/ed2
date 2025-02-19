import Studentcustomtab from '../Studentcustomtab/Studentcustomtab';
import Studentpannelwrapper from '../Studentpannelwrapper/Studentpannelwrapper';

import Newsupport from './Newsupport';
import Solvedticket from './Solvedticket';

const tabsData = [
    { key: "new-ticket", title: "New Ticket", content: <Newsupport /> },
    { key: "solved-ticket", title: "Solved Ticket", content: <Solvedticket /> },

];

const Studentsupporthome = () => {
    return (
        <>
            <Studentpannelwrapper studentpannelHeading="Support">
                <div>
                    <Studentcustomtab tabs={tabsData} />
                </div>
            </Studentpannelwrapper>

        </>
    )
}

export default Studentsupporthome;

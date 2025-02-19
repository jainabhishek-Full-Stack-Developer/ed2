import PastBookingcard from '../PastBookingcard/PastBookingcard';
import localStyles from './page.module.css';

const Upcommingclasseshome = () => {
    return (
        <section>
            <div className={localStyles.container}>
                <h2 className={localStyles.heading}>Upcoming Classes</h2>

            </div>
            <div className={localStyles.allClassesFilter}>
                <div>
                    <input type="date" />
                </div>
                <div>
                    <button type="button">Filter</button>
                </div>
            </div>
            <div className={localStyles.pastBookingCardBox}>
                <PastBookingcard
                    courseName="Math 101"
                    date="2025-02-18"
                    time="10:00 AM"
                    studentName="John Doe"
                    parentOrTeacher="Parent: Jane Doe"
                    bookingStatus="Booked"
                />
                <PastBookingcard
                    courseName="Science 202"
                    date="2025-02-17"
                    time="2:00 PM"
                    studentName="Emily Smith"
                    parentOrTeacher="Teacher: Mr. Miller"
                    bookingStatus="Cancelled"
                />
                <PastBookingcard
                    courseName="Science 202"
                    date="2025-02-17"
                    time="2:00 PM"
                    studentName="Emily Smith"
                    parentOrTeacher="Teacher: Mr. Miller"
                    bookingStatus="Cancelled"
                />
            </div>
        </section>
    );
};

export default Upcommingclasseshome;

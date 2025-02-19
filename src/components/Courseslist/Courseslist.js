import Faqcontent from "../Faqcontent/Faqcontent";
import Joinnowcontent from "../Joinnowcontent/Joinnowcontent";
import Mainstudentwrapper from "../Mainstudentwrapper/Mainstudentwrapper";
import Testimonial from "../Testimonial/Testimonial";
import Allcoursecontent from "./Allcoursecontent";
import Courseherosection from "./Courseherosection";
import Whythiscourse from "./Whythiscourse";

const Courseslist = () => {
    return (
        <Mainstudentwrapper>
            <Courseherosection />
            <Allcoursecontent />
            <Whythiscourse />
            <Joinnowcontent />
            <Testimonial />
            <Faqcontent />
        </Mainstudentwrapper>
    )
}

export default Courseslist

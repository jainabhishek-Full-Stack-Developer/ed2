import Coursescontent from "../Coursescontent/Coursescontent";
import Faqcontent from "../Faqcontent/Faqcontent";
// import Herohome from "../Herohome/Herohome";
import Herosection from "../Herosection/Herosection";
import Joinnowcontent from "../Joinnowcontent/Joinnowcontent";
import Mainstudentwrapper from "../Mainstudentwrapper/Mainstudentwrapper";
import Pricinghome from "../Pricinghome/Pricinghome";
import Testimonial from "../Testimonial/Testimonial";
import Whychooseus from "../Whychooseus/Whychooseus";


const Homecontent = () => {
    return (
        <>

            <Mainstudentwrapper>
                {/* <Herohome /> */}
                <Herosection />
                <Coursescontent />
                <Whychooseus />
                <Pricinghome />
                <Testimonial />
                <Joinnowcontent />
                <Faqcontent />
            </Mainstudentwrapper>
        </>
    )
}

export default Homecontent;

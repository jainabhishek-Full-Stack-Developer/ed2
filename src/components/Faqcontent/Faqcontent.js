"use client";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css'; // Ensure the CSS is properly imported
import styles from "./page.module.css";

const Faqcontent = () => {
    return (
        <section>
            <div>
                <h1 className={styles.faqSectionHeading}>Frequently Asked Questions</h1>
                <p className={styles.faqSectionText}>Get answers to common questions about our courses and certifications.Need more help? Contact our support team.</p>
            </div>
            <div className={styles.faqSectionWrapper}>
                <Accordion allowZeroExpanded> {/* allowZeroExpanded allows multiple panels to be open */}
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What harsh truths do you prefer to ignore?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Is free will real or just an illusion?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur
                                ea in ut nostrud velit in irure cillum tempor laboris
                                sed adipisicing eu esse duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}

export default Faqcontent;

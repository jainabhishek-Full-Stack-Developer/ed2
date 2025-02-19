"use client";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import styles from "./page.module.css";
import { useState } from "react";

const Studentsupportcard = () => {
    
    const [messages, setMessages] = useState([
        { text: "Hello! How are you?", type: "received", time: "10:30 AM | 09 Feb" },
        { text: "I'm good, thanks! How about you?", type: "sent", time: "10:32 AM | 09 Feb" },
    ]);

    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;

        const newMessage = {
            text: input,
            type: "sent",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " | " + new Date().toLocaleDateString()
        };

        setMessages([...messages, newMessage]);
        setInput("");
    };


    return (
        <>
            <div className={styles.supportCardContainer}>
                <div className={styles.supportLeftSide}>
                    <div>
                        <BiSolidMessageSquareDots className={styles.supportLeftIcon} />
                    </div>
                    <div className={styles.supportLeftItem}>
                        <p>ID Ticket</p>
                        <span>#1256</span>
                    </div>
                    <div className={styles.supportLeftItem}>
                        <p>Subject to appeal</p>
                        <span>Problem with Session</span>
                    </div>
                    <div className={styles.supportLeftItem}>
                        <p>Last Update</p>
                        <span>11.03.2025 12:45PM</span>
                    </div>
                </div>
                <div>
                    <IoIosArrowDown className={styles.supportRightIcon} />
                </div>
            </div>
            {/* chat box */}
            <div className={styles.chatContainer}>
                <div className={styles.chatBox}>
                    <div className={styles.chatMessages}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`${styles.message} ${styles[msg.type]}`}>
                                <p>{msg.text}</p>
                                <span className={styles.timestamp}>{msg.time}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.chatInput}>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Studentsupportcard;

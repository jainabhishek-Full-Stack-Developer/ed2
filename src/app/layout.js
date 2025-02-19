import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";


export const metadata = {
  title: "CourseHive: Interactive Courses & Expert-Led Lessons",
  description: "CourseHive is an all-in-one education platform offering interactive courses, expert-led lessons, and career-enhancing skills for learners worldwide.",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <ToastContainer />
          {children}
      </body>
    </html>
  );
}

import React, { createContext, useContext, useState } from "react";
import coursesData from "../Data/courses.json";

const CoursesContext = createContext();

export function CoursesProvider({ children }) {
    const [courses, setCourses] = useState(coursesData);
    const learnCourse = id => {
        setCourses(courses.map(course => 
            course.id === id ? {...course, dueCards: 0} : course));
    };
    const getCourse = id => {
        return courses.find(course =>                 
            course.id === id
            );
    };
    return (
        <CoursesContext.Provider value={{ courses, learnCourse, getCourse }}>
            {children}
        </CoursesContext.Provider>
    );
};

export const useCourses = () => useContext(CoursesContext);
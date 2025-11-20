import React from "react";

const Courses = () => {
    
    const courses = [
        {"name": "Craigmillar Park", "totalYardage": 5615, "par": 70, "bestScore": 95},
        {"name":"Portobello", "totalYardage": 5132, "par": 64, "bestScore": 83},
        {"name":"Carrick Knowe", "totalYardage": 5664, "par": 70, "bestScore": 98},
        {"name":"Melville", "totalYardage": 4604, "par": 66, "bestScore": 78},
        {"name":"Wee Braids", "totalYardage": 4298, "par": 66, "bestScore": 90},
    ]

    return (
         <>
        {courses.map((course) => 
        <div>
            <span>{course.name} * {course.totalYardage} * {course.par} * {course.bestScore}</span>
        </div>)}
        </>
    );
}

export default Courses;
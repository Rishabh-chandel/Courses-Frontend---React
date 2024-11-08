import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
    const[likedcourse , setlikecourse] = useState([]);
    let category = props.category;
    let courses = props.courses;  
    console.log(courses);
    //for using map we need an arr , but from api we are getting an object with kry value pair so we will convert data to array by using .value function then use foreach loop to iteratate in arr then another foreach loop to iterate in every opbect of an arr
    function getcourses() {
        if(category === "All") {
            let allCourses = [];
            Object.values(courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        }
        else {
            return courses[category];
        }
    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getcourses().map( (course) => (
                    <Card key={course.id} course={course} likedcourse = {likedcourse} setlikecourse = {setlikecourse} />
                ))
            }
        </div>
    );
}

export default Cards;
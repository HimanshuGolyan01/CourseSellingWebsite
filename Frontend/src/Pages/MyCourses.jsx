import React, { useEffect, useState } from 'react';
import MyCoursesCard from '../Components/MyCoursesCard';
import axios from 'axios';

const MyCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchMyCourses = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/admin/course/bulk", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                });
                setCourses(response.data.courses); 
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching courses:", error.response.data);
            }
        };

        fetchMyCourses();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {courses.length > 0 ? (
                courses.map(course => (
                    <MyCoursesCard 
                        key={course._id} // Ensure each card has a unique key
                        imageUrl={course.imageUrl} // Assuming imageUrl is a field in your course
                        title={course.title} // Assuming title is a field in your course
                        description={course.description} // Assuming description is a field in your course
                        price={course.price} // Assuming price is a field in your course
                    />
                ))
            ) : (
                <p>No courses found.</p> // Message if no courses are returned
            )}
        </div>
    );
};

export default MyCourses;

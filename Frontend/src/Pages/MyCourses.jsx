import React, { useEffect, useState } from 'react';
import MyCoursesCard from '../Components/MyCoursesCard';
import axios from 'axios';

const MyCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchMyCourses = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/admin/mycourse", {
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
                        key={course._id} 
                        imageUrl={course.imageUrl} 
                        title={course.title} 
                        description={course.description} 
                        price={course.price} 
                    />
                ))
            ) : (
                <p>No courses found.</p> 
            )}
        </div>
    );
};

export default MyCourses;

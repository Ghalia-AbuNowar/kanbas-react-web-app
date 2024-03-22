import { Link, Navigate, Route, Routes } from "react-router-dom";
import Nav from "../Nav";
import { KanbasNavigation, KanbasNavigationHorizantal } from "./Navigation";
import "./index.css";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { courses } from "./Database";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";


function Kanbas() {
    const [s_courses, setCourses] = useState(courses);
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg"
    });
    const deleteCourse = (courseId: string) => {
        setCourses(s_courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    const addNewCourse = () => {
        const newCourse = {
            ...course,
            _id: new Date().getTime().toString()
        };
        setCourses([...s_courses, { ...course, ...newCourse }]);
    };



    return (
        <Provider store={store}>
            <div>
                <div className="wd-kanbas-nav">
                    <Nav />
                </div>

                <div className="row" style={{ paddingTop: '50px' }}>
                    <div className="col-12 d-sm-block d-md-none wd-kanbas-navigation-horizantal">
                        <KanbasNavigationHorizantal />
                    </div>

                    <div className="col-md-1 d-none d-md-block">
                        <div className="wd-pos-fixed-nav">
                            <KanbasNavigation />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-10">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard" />} />
                            <Route path="Account" element={<h1>Account</h1>} />
                            <Route path="Dashboard" element={
                                <Dashboard
                                    courses={s_courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse} />
                            } />

                            <Route path="Courses/:courseId/*" element={
                                <Courses courses={s_courses} />} />

                            <Route path="Calendar" element={<h1>Calendar</h1>} />
                            <Route path="Inbox" element={<h1>Inbox</h1>} />
                            <Route path="History" element={<h1>History</h1>} />
                            <Route path="Studio" element={<h1>Studio</h1>} />
                            <Route path="Commons" element={<h1>Commons</h1>} />
                        </Routes>

                    </div>
                </div>
            </div>


        </Provider>
    );

}
export default Kanbas


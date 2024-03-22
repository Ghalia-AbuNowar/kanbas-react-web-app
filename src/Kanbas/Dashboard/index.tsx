import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";


function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
            courses: any[]; course: any; setCourse: (course: any) => void;
            addNewCourse: () => void; deleteCourse: (course: any) => void;
            updateCourse: () => void;
        }) {

    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <hr />

            <h2>Published Courses</h2>
            <hr />

            <div className="d-flex container-fluid justify-content-between">
                <div>
                    <h5>Course Editor</h5>
                </div>

                <div>
                    <button className="btn btn-primary wd-button-red " onClick={addNewCourse} >
                        Add
                    </button>
                    <button className="btn btn-primary wd-button-grey" onClick={updateCourse} >
                        Update
                    </button>
                </div>
            </div>

            <input value={course.name} placeholder={"Course Name"} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} placeholder={"Course NUmber"} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} title={"Course Start Date"} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control" title={"Course End Date"} type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-3">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 310 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top"
                                    style={{ height: 150 }} />
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.name}

                                        <button className="btn btn-primary wd-button-red" onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>
                                            Delete
                                        </button>

                                        <button className="btn btn-primary wd-button-grey" onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>
                                            Edit
                                        </button>


                                    </Link>
                                    <p className="card-text">{course.name}</p>
                                    <div className="d-fex">
                                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary wd-button-green">
                                            Go </Link>


                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;


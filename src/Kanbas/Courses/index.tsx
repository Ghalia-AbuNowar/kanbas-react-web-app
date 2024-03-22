import { courses } from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import "./index.css";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";




function Courses({ courses }: { courses: any[]; }) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    console.log(pathname);
    const routeName = pathname.split('/').pop() || 'Home';;
    return (
        <div>
            <div className="d-flex wd-breadcrumb-icon  mt-3">
                <div className="mt-0.5">
                    <HiMiniBars3 />
                </div>
                <nav aria-label="breadcrumb" className="custom-breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item "><Link to="/"></Link></li>
                        {course && (
                            <li className="breadcrumb-item">
                                <Link to={`/Kanbas/Courses/${courseId}`}>{course.name}</Link>
                            </li>
                        )}
                        <li className="breadcrumb-item active" aria-current="page">{routeName}</li>
                    </ol>
                </nav>
            </div>

            <div>
                <hr />
            </div>

            <div>
                <div className="d-flex ">

                    <div className="wd-pos-fixed-courses d-none d-md-block">
                        <CourseNavigation />
                    </div>



                    <div className="flex-fill p-4">
                        <div className=" bottom-0 end-0"
                            style={{ top: "150px", left: "350px" }} >
                            <Routes>
                                <Route path="/" element={<Navigate to="Home" />} />
                                <Route path="Home" element={<Home />} />
                                <Route path="Modules" element={<Modules />} />
                                <Route path="Piazza" element={<h1>Piazza</h1>} />
                                <Route path="Zoom" element={<h1>Zoom Meeting</h1>} />
                                <Route path="Assignments" element={<Assignments />} />
                                <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                                <Route path="Grades" element={<Grades />} />
                                <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                                <Route path="People" element={<h1>People</h1>} />
                                <Route path="panopto" element={<h1>Panopto Video</h1>} />
                                <Route path="Discussions" element={<h1>Discussions</h1>} />
                                <Route path="Announcements" element={<h1>Announcements</h1>} />
                                <Route path="Pages" element={<h1>Pages</h1>} />
                                <Route path="Files" element={<h1>Files</h1>} />
                                <Route path="Rubric" element={<h1>Rubric</h1>} />
                                <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                                <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                            </Routes>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Courses;
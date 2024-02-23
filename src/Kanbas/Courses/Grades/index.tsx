import { assignments, enrollments, grades, users } from "../../Database";
import { FaFileImport, FaFileExport, FaCog } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "./index.css";

function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>

            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-primary wd-button-grey-grades me-2"> <FaFileImport /> Import</button>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle  wd-button-grey-grades me-2" type="button"
                        data-toggle="dropdown" aria-expanded="false">
                        <FaFileExport /> Export
                    </button>
                </div>
                <button className="btn btn-primary wd-button-grey-grades me-2"> <FaCog /></button>
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-sm-6">
                        <label htmlFor="name" className="form-label fw-bold">Student Names</label>
                        <input type="text" className="form-control" id="name" placeholder="Search Students"/>
                    </div>

                    <div className="col-sm-6">
                        <label htmlFor="assignment" className="form-label fw-bold">Assignment Names</label>
                        <input type="text" className="form-control" id="assignment" placeholder="Search Assignments"/>
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <button className="btn btn-primary wd-button-grey-grades me-2"> <i className="fa-solid fa-filter"></i> Apply
                    Filters</button>
            </div>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <th>Student Name</th>
                        {as.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user?.firstName} {user?.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;


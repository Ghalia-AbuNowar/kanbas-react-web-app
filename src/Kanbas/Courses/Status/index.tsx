
import { FaBan, FaCheckCircle, FaExclamation } from 'react-icons/fa';
import './index.css';
import { Link, useParams } from 'react-router-dom';

import { assignments } from "../../Database";

function Status() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="wd-status">
            <h3>Course Status</h3>
            <div className="d-flex mb-3">
                <button className="btn btn-primary wd-button-grey-status me-1">
                    <FaBan /> Unpublished
                </button>
                <button className="btn btn-primary wd-button-green-status me-1">
                    <FaCheckCircle /> Published
                </button>
            </div>


            <div className="mt-5">
                <h4>To Do</h4>
                <hr />
                <div>
                    <ul className="list-group ">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item wd-link-status">
                                <FaExclamation className="wd-link-icon" />
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                            </li>))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Status;
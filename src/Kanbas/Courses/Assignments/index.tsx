import React, { useState } from "react";
import "./index.css";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, setAssignment } from "./reducer";


function Assignments() {
    const navigate = useNavigate();
    const { courseId } = useParams();

    const [selectedAssignmentId, setSelectedAssignmentId] = useState(null);
    const s_assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const s_assignment = useSelector((state: any) => state.assignmentReducer.assignment);
    
    const [localAssignment, setLocalAssignment] = useState({
        title: "New assignment",
        points: 100,
        description: "Assignment Description",
        _id: new Date().getTime().toString()
    });


    const dispatch = useDispatch();
    const assignmentList = s_assignments.filter(
        (a: any) => a.course === courseId);

    const handleAdd = () => {
       
        // dispatch(addAssignment({ ...s_assignment, course: courseId }))
        // console.log({ latest })
        navigate(`/Kanbas/Courses/${courseId}/Assignments/${localAssignment._id}`);
    }

    const handleDelete = () => {

        dispatch(deleteAssignment(selectedAssignmentId))
        setSelectedAssignmentId(null)

    };








    return (
        <>
            {/* setting up dialog box */}
            <div className="modal fade" id="confirmationModal" aria-labelledby="confirmationModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="confirmationModalLabel">Delete Assignment</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                                handleDelete()
                            }}> Yes</button>
                        </div>
                    </div>
                </div>
            </div>





            <div className="row mb-10">
                <div className="col-sm-5 col-md-8">
                    <input type="text" placeholder="Search Assignments" className="form-control w-25" />
                </div>

                <div className="col-sm-7 col-md-4  d-flex justify-content-end">
                    <button className="btn btn-primary wd-button-grey me-1">+ Group</button>
                    <button className="btn btn-primary wd-button-red me-1" onClick={handleAdd}>+ Assignment </button>
                    <button className="btn btn-primary wd-button-grey me-1"> <FaEllipsisV /></button>
                </div>
            </div>
            <hr />



            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment: any) => (
                            <li className="list-group-item">

                                <FaEllipsisV className="me-2" />
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                <span className="float-end">
                                    <button className="btn btn-primary wd-button-red btn-sm me-2" data-bs-toggle="modal" data-bs-target="#confirmationModal"
                                        onClick={() => setSelectedAssignmentId(assignment._id)}>
                                        Delete
                                    </button>

                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;
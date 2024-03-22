import React, { useState } from "react";
import { addAssignment, setAssignment } from "../reducer";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const s_assignments = useSelector((state: any) => state.assignmentReducer.assignments);
  const dispatch = useDispatch();
  const assignment = s_assignments.find((a: any) => a._id === assignmentId);

  // Initialize localAssignment state
  const [localAssignment, setLocalAssignment] = useState(assignment || {
    title: "New assignment",
    points: 100,
    description: "Assignment Description",
    _id: new Date().getTime().toString()
  });


  const handleTitleChange = (e: any) => {
    setLocalAssignment((prevAssignment: any) => ({
      ...prevAssignment,
      title: e.target.value
    }));
  };


  const handleDescriptionChange = (e: any) => {
    setLocalAssignment((prevAssignment: any) => ({
      ...prevAssignment,
      description: e.target.value
    }));
  };

  const handlePointChange = (e: any) => {
    setLocalAssignment((prevAssignment: any) => ({
      ...prevAssignment,
      points: e.target.value
    }));
  };


  const handleDueDateChange = (e: any) => {
    setLocalAssignment((prevAssignment: any) => ({
      ...prevAssignment,
      dueDate: e.target.value
    }));
  };

  const handleUntilDateChange = (e: any) => {
    setLocalAssignment((prevAssignment: any) => ({
      ...prevAssignment,
      untilDate: e.target.value
    }));
  };

  const handleAvailableFromDateChange = (e: any) => {
    setLocalAssignment((prevAssignment: any) => ({
      ...prevAssignment,
      availableFromDate: e.target.value
    }));
  };


  const handleSave = () => {
    if (!assignment) {
      dispatch(addAssignment({
        ...localAssignment,
        course: courseId, 
      }));
    } else {
      dispatch(setAssignment({
        _id: assignmentId,
        changes: localAssignment
      }));
    }

    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };




  // console.log("Found assignment:", assignment);

  const { courseId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-2">
        <label>Assignment Name</label>
        <input className="form-control mb-2"
          value={localAssignment.title}
          placeholder="Assignment title"
          onChange={handleTitleChange}
        />
      </div>

      <div className="mb-2">
        <label>Assignment Description</label>
        <input className="form-control mb-2"
          value={localAssignment.description}
          placeholder="Assignment description"
          onChange={handleDescriptionChange}
        />
      </div>

      <div className="mb-2">
        <label>Points</label>
        <input className="form-control mb-2"
          value={localAssignment.points}
          placeholder="Assignment points"
          onChange={handlePointChange}
        />
      </div>

      <div className="mb-2 d-flex">
        <label>
          Assignment Group</label>
        <select className="form-select me-1">
          <option>ASSIGNMENT</option>
          <option>QUIZ</option>
          <option>EXAM</option>
          <option>PROJECT</option>
        </select>
      </div>

      <div className="mb-2 d-flex">
        <label>
          Display Grade as</label>
        <select className="form-select me-1">
          <option> Percentage</option>
          <option> Points</option>
        </select>
      </div>

      <div className="row m-3">
        <div className="col-sm-8 offset-sm-2">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="r6" />
            <label>
              Do not count this assignment towards the final grade</label>
          </div>
        </div>
      </div>


      <div className="d-flex container-fluid">
        <div className="me-5">
          <form id="Assign">
            <label>Assign To:</label>
          </form>
        </div>

        <div >
          <label> Due Date</label><br />
          <input type="date" value={localAssignment.dueDate}
            onChange={handleDueDateChange} /><br />

          <label> Available from </label><br />
          <input type="date" value={localAssignment.availableFromDate}
            onChange={handleAvailableFromDateChange} /><br />


          <label> Until </label><br />
          <input type="date" value={localAssignment.untilDate}
            onChange={handleUntilDateChange} /><br />

        </div>
      </div>
      <hr />




      <button className="btn btn-success ms-2 float-end" onClick={handleSave}>save</button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger float-end">
        Cancel
      </Link>




    </div>
  );
}
export default AssignmentEditor;
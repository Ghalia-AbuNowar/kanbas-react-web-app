import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="mb-2">
        <label>Assignment Name</label>
        <input value={assignment?.title}
          className="form-control mb-2" />
      </div>

      <div className="mb-2">
        <label>Assignment Description</label>
        <textarea className="form-control" id="textarea1" value={assignment?.title}></textarea>
      </div>

      <div className="mb-2">
        <label> Points</label>
        <input value={assignment?.points} />
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

      <hr />




      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger float-end">
        Cancel
      </Link>




    </div>
  );
}
export default AssignmentEditor;
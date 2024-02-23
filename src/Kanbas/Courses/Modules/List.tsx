import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
        
            <div className="d-flex justify-content-end wd-button-padding">

                <button className="btn btn-primary wd-button-grey me-1">Collapse All</button>
                <button className="btn btn-primary wd-button-grey me-1">Expand All</button>
                <button className="btn btn-primary wd-button-grey me-1">View Progress</button>


                <select className="form-select wd-dropdown wd-dropdown-select me-1">
                    <option>Publish All</option>
                    <option>Unpublish All</option>
                    <option>Unpublish All</option>
                </select>
                <button className="btn btn-primary wd-button-red me-1">+ Module</button>
                <button className="btn btn-primary wd-button-grey me-1"> <FaEllipsisV/></button>

            </div>
            <hr />

            
            <ul className="list-group wd-modules">
                {modulesList.map((module, index) => (
                    <li key={index}
                        className="list-group-item"
                        onClick={() => setSelectedModule(module)}>
                        <div>
                            <FaEllipsisV className="me-2" />
                            {module.name}
                            <span className="float-end">
                                <FaCheckCircle className="wd-fa-color-green" />
                                <FaPlusCircle className="ms-2" />
                                <FaEllipsisV className=" ms-2" />
                            </span>
                        </div>
                        {selectedModule._id === module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson, index) => (
                                    <li className="list-group-item" key={index}>
                                        <FaEllipsisV className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                                            <FaCheckCircle className="wd-fa-color-green" />
                                            <FaEllipsisV className="ms-2" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;
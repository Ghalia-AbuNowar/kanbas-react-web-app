import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);

    const [localModul, setLocalModul] = useState(module)

    const dispatch = useDispatch();

    const handleTitleChange = (e: any) => {
        setLocalModul((prevModul: any) => ({
            ...prevModul,
            name: e.target.value
        }));
    };


    const handleDescriptionChange = (e: any) => {
        setLocalModul((prevModul: any) => ({
            ...prevModul,
            description: e.target.value
        }));
    };

    const handleAdd = () => {
        dispatch(addModule({ ...localModul, course: courseId }))
    };

    const handleUpdate = () => {
        if (localModul && localModul._id) {
            const { _id, ...changes } = localModul;
            dispatch(updateModule({
                _id: _id,
                changes: changes
            }));
            setLocalModul(module)
        }
    };

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
                <button className="btn btn-primary wd-button-grey me-1"> <FaEllipsisV /></button>

            </div>
            <hr />
            <div className="d-flex container-fluid justify-content-between">
                <div className="d-flex">
                    <input
                        value={localModul.name}
                        placeholder="Module Name"
                        onChange={handleTitleChange} />
                    <textarea
                        value={localModul.description}
                        placeholder="Module description"
                        onChange={handleDescriptionChange}
                    />

                </div>

                <div>
                    <button className="btn btn-primary wd-button-green me-2"
                        onClick={() => handleAdd()}>
                        Add
                    </button>

                    <button className="btn btn-primary wd-button-grey"
                        onClick={() => handleUpdate()}>
                        Update
                    </button>

                </div>

            </div>


            <ul className="list-group wd-modules">


                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index}
                            className="list-group-item"
                        >

                            <div>
                                <FaEllipsisV className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <button className="btn btn-primary wd-button-green btn-sm me-2"
                                        onClick={() => {
                                            setLocalModul(module);
                                        }}>
                                        Edit
                                    </button>


                                    <button className="btn btn-primary wd-button-red btn-sm me-2"
                                        onClick={() => dispatch(deleteModule(module._id))}>
                                        Delete
                                    </button>


                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className=" ms-2" />
                                </span>
                            </div>

                            <ul className="list-group">
                                {module.lessons?.map((lesson: any, index: number) => (
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

                        </li>
                    ))}
            </ul >
        </>
    );
}
export default ModuleList;
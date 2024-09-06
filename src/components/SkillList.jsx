import React from "react";

function createSkillItem(skill){
    return <li><div className="list-item"><img src={skill.url} alt="" /><p>{skill.technology}</p></div></li>
}

function SkillList(props){ 
    return (
        <ul>
            {props.list.map(createSkillItem)}
        </ul>
    )
}

export default SkillList;
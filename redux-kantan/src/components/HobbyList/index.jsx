import React from "react";
import PropTypes from 'prop-types'
import './HobbyList.css'

HobbyList.propTypes={
  hobbylist : PropTypes.array,
  activeId: PropTypes.number,
  onHobbyOnClick : PropTypes.func,
}
HobbyList.defaultProps={
  hobbylist :[],
  activeId:null,
  onHobbyOnClick:null,
}

function HobbyList(props) {
  const { hobbylist ,activeId , onHobbyOnClick } = props;
 
  function handleOnClick(hobby){
    if(!hobby) return;
    if(!onHobbyOnClick) return;
    onHobbyOnClick(hobby);
    
  }

  return (
    <ul className="list-hobby">
      {hobbylist.map((hobby) => (
        <li key = {hobby.id}
          onClick={()=>handleOnClick(hobby)}
          className= { hobby.active&&'active'  }
        >
          {hobby.title} 
        </li>
      ))}
    </ul>
  );
}

export default HobbyList;

import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import casual from "casual-browserify";
import { addNewHobby, setActiveHobby } from "../actions/hobby";
import HobbyList from '../components/HobbyList/'

const HomePage = (props) => {
  //get State (from provider)

  // STRICT COMPARISON
  // When ever STORE changes then  useSelector run and return a state
  // it check newState vs old state if (===) dont triggers render()
  // in this case , if( hbList n activeId Changes) just triggers render () once time

  // Should do this way 
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);

  //other way
  // SHALLOW COMPAIRISON
  // const hobby = useSelector((state) => ({
  //   list: state.hobby.list,
  //   activeId: state.hobby.activeId,
  // }) ,shallowEqual);
  // shallowEqual or useMemo
  //

  const dispatch = useDispatch();

  function handleAddHobbyClick() {
    // Random a hobby obj

    const newHobby = {
      id: casual.uuid,
      title: casual.title,
      active :false,
    };

    // Dispatch action to add new Hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  }
  
  function onHobbyOnClick (hobby){
    
    const action = setActiveHobby(hobby)
    dispatch(action)

  }

  return (
    <div className="home-page">
      <h1> Hello Redux -Hompage</h1>
      <button onClick={handleAddHobbyClick}> Randoml hobby </button>
      <HobbyList hobbylist={hobbyList} activeId ={activeId} onHobbyOnClick ={onHobbyOnClick }/>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;

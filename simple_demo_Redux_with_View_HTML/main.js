console.log(window.Redux);

const { createStore } = window.Redux;

//state
//reducer
//store

// CREATE REDUX STORE
const initState = JSON.parse(localStorage.getItem('hobby_list'))||["listen to music"];

// Create reducer
const hobbyReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      const newList = [...state];
      newList.push(action.payload);
      return newList;
    }
    default:
      return state;
  }
};

// Create Store .
const store = createStore(hobbyReducer);

//---------------------------
// RENDER REDUX HOBBY LIST

const renderHobbyList = (hobbyList) => {
  if (!Array.isArray(hobbyList) || renderHobbyList.length === 0) return;
  const ulElement = document.querySelector("#hobbyList");
  if (!ulElement) return;

  // reset previos content in ul
  ulElement.innerHTML = "";

  //render list
  for (let hobby of hobbyList) {
    let liElement = document.createElement("li");
    liElement.textContent = hobby;
    ulElement.appendChild(liElement);
  }
};

//RENDER INITIAL HOBBY LIST
const initialHobbyList = store.getState();
// console.log(initialHobbyList);

//Render with state
renderHobbyList(initialHobbyList);

//HANDLE FORM SUBMIT
const hobbyFormElement = document.querySelector("#hobbyForm");
if (hobbyFormElement) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let hobbyTextElement = hobbyFormElement.querySelector("#hobbyText");
    if (!hobbyTextElement) return;

    //Action
    const action = {
      type: "ADD_HOBBY",
      payload: hobbyTextElement.value,
    };

    console.log("mutate state with DISPATCH");
    // DISPATCH ACTION
    store.dispatch(action);

    //ResetForm.
    hobbyTextElement.value = "";
  };
  hobbyFormElement.addEventListener("submit", handleSubmit);
}

//SUBSCRIBE  a FUNCT as (Callback) in MIDDLEWARE.
store.subscribe(() => {
  console.log("STATE UPDATE :", store.getState());

  //Rerender View
  console.log("view Render");
  const newHobby = store.getState();
  renderHobbyList(newHobby);
  
  // Save into LocalStore
  localStorage.setItem('hobby_list', JSON.stringify(newHobby));

});

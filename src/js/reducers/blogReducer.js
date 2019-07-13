export default function reducer(state = {
    users : "",
    allposts:"",
    posts:"",
    comments:"",
    delete:""
}, action){
    switch(action.type){
        case "USERS" : {
            return { ...state, users : action.payload }
        }
        case "ALL_POST" : {
            return { ...state, allposts : action.payload }
        }
        case "POST" : {
            return { ...state, posts : action.payload }
        }
        case "COMMENTS" : {
            return { ...state, comments : action.payload }
        }
        case "DELETE" : {
            return { ...state, delete : action.payload }
        }
        default : {}
    }

    return state;
}
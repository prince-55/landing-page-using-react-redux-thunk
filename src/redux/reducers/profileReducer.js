import {
    OPEN_PROFILE,
    CLOSE_PROFILE
} from '../constants/profileConstants'
export const profileReducer = (state = {open:false, user:" "}, action)=>{
    switch(action.type){
        case OPEN_PROFILE : 
        return { 
            open:true,
            user:action.payload,
        }
        case CLOSE_PROFILE :
            return { open:false }
        default:
                return state
    }
}

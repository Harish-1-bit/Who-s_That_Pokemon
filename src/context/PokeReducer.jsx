export const PokeReducer = (state, action) => {

    switch (action.type) {

        case "GET_POKEMON":
            return {
                ...state,
                pokemon: action.payload,

            }
            
            
            case "incerse":
                return{
                    ...state,
                    score:state.score+100,

                }
                case "decrease":
                    return{
                        ...state,
                        life:state.life-1,

            }

        case "visible":{
            return{
                ...state,
                visible:state.visible?false:true
            }
        }

        case "Change_theme":{
            return{
                ...state,
                theme:state.theme?false:true
            }
        }
        default:
            return state;
    }


}
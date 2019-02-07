import slugs from '../../Constraints/User';

export default (state = slugs.updateUser.init(), {type, payload})=>{
    switch(type){
        case slugs.updateUser.slug:
                console.log("New updated user...");
                return payload;
            break;
    }
    console.log("Default updated user...");
    return state;
};

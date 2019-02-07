import AlertSlugs from '../../Constraints/Alert';

//Alert Info...
export default (state = AlertSlugs.init, {type, payload})=>{
    console.log("Reducer Alert Invoke...");
    console.log("Alert state => ", state);
    console.log("Alert type => ", type);
    console.log("Alert payload => ", payload);
    switch(type){
        case AlertSlugs.slug:
            return payload;
        default:
            console.log("Alert ignored, try to set default vals => ");
            break;
    }
    return state;
};


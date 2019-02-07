import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import User_Reducer from '../Reducers/Update_User';
import Page_Reducer from '../Reducers/Page_Data';
import Alert_Reducer from '../Reducers/Page_Alert';

export default history => combineReducers({
    router: connectRouter(history),
    user: User_Reducer,
    page: Page_Reducer,
    alert_info: Alert_Reducer,
});

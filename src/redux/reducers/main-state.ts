import { handleActions } from 'redux-actions';
import * as mainStateUpdaters from './main-state-updaters';

const actionHandler = {
};

export default handleActions<MainState, {}>(actionHandler, mainStateUpdaters.INITIAL_MAIN_STATE);

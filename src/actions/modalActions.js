import { SHOW_MODAL, HIDE_MODAL }  from './types';

export const showModal = () => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    payload: true
  });
}

export const hideModal = () => (dispatch) => {
  dispatch({
    type: HIDE_MODAL,
    payload: false
  });
}

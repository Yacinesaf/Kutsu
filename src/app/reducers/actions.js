export const setSelectedShoe = (shoe) => dispatch => {
  dispatch({ action: 'SET_SELECTED_SHOE', payload: shoe})
}
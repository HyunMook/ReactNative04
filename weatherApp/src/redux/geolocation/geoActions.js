/**
 * 액션 타입
 */
export const SET_GEOLOCATION = 'SET_GEOLOCATION';

/**
 * 액션 생성자
 */
export function setGeolocation(latitude, longitude) {
  console.log('setGeolocation', [latitude, longitude]);
  return { type: SET_GEOLOCATION, payload: { latitude, longitude } };
}
export function autoGeolocation() {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(
          setGeolocation(position.coords.latitude, position.coords.longitude),
        );
      },
      (err) => {
        // Error Action...
      },
    );
  };
}
export function changeGeolocation(lat, long) {
  return (dispatch) => {
    return dispatch(setGeolocation(lat, long));
  };
}

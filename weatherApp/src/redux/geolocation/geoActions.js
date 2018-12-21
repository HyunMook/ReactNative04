import weatherCases from '../weather/weatherCases';

/**
 * GET_GEOLOCATION
 * --> SET_GEOLOCATION/ERR_GEOLOCATION
 */
export const GET_GEOLOCATION = 'GET_GEOLOCATION';
export const SET_GEOLOCATION = 'SET_GEOLOCATION';
export const ERR_GEOLOCATION = 'ERR_GEOLOCATION';

export function getCurrentPositionPromise() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    });
  });
}

export function autoGeolocation() {
  return async (dispatch) => {
    dispatch({ type: GET_GEOLOCATION });
    /**
     * async/await을 쓰는데 왜 Promise를 또 써야하는가??
     * navigator.geolocation.getCurrentPosition()도 Promise인데, new Promise()로 감싸지 않고 사용할 수 없는가?
     * 왜 navigator.geolocation.getCurrentPosition()의 콜백함수를 이용하면 제대로(원하는 순서대로) 동작하지 않는가??
     */
    await getCurrentPositionPromise().then(
      (position) => {
        const { latitude, longitude } = position.coords;
        dispatch(setGeolocation(latitude, longitude));
      },
      (err) => {
        dispatch({ type: ERR_GEOLOCATION, payload: err });
        throw new Error('getCurrentPosition Error!');
      },
    );
  };
}

export function changeGeolocation(inputText) {
  return (dispatch) => {
    let ret = inputText.replace(/\s/gi, '').split(',');
    if (ret.length == 2) {
      const lat = parseFloat(ret[0]);
      const long = parseFloat(ret[1]);
      if (lat > -90 && lat < 90 && long > -180 && long < 180) {
        dispatch({ type: GET_GEOLOCATION });
        dispatch(setGeolocation(lat, long));
      } else {
        dispatch({
          type: ERR_GEOLOCATION,
          payload: 'Wrong latitude/longitude data input.',
        });
        throw new Error('Wrong latitude/longitude data input.');
      }
    } else {
      dispatch({
        type: ERR_GEOLOCATION,
        payload: 'Please type in the correct format.',
      });
      throw new Error('Please type in the correct format.');
    }
  };
}

// export function changeGeolocation(lat, long) {
//   return (dispatch) => {
//     dispatch({ type: GET_GEOLOCATION });
//     return dispatch(setGeolocation(lat, long));
//   };
// }

export function setGeolocation(latitude, longitude) {
  return { type: SET_GEOLOCATION, payload: { latitude, longitude } };
}

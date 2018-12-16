import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import WeatherContainer from './src/redux/weather/weatherContainer';
import GeoContainer from './src/redux/geolocation/geoContainer';

/**
 * Ref: https://wix.github.io/react-native-navigation/#/docs/layout-types
 */
const WEATHER_SCREEN = 'WEATHER_SCREEN';
const GEOLOCATION_SCREEN = 'GEOLOCATION_SCREEN';

Navigation.registerComponentWithRedux(
  WEATHER_SCREEN,
  () => WeatherContainer,
  Provider,
  store,
);
Navigation.registerComponentWithRedux(
  GEOLOCATION_SCREEN,
  () => GeoContainer,
  Provider,
  store,
);

Navigation.events().registerAppLaunchedListener(() => {
  const _naviComponent = (name, options = {}, passProps = {}) => {
    return {
      // [id] is Optional, Auto generated if empty
      name,
      options,
      passProps,
    };
  };
  const _naviStack = (components = [], options = {}) => {
    return {
      children: components,
      options,
    };
  };

  const stackType = {
    stack: {
      children: [
        {
          component: {
            name: WEATHER_SCREEN,
            passProps: {
              geolocationNaviComponent: _naviComponent(GEOLOCATION_SCREEN, {
                topBar: { title: { text: 'Change Location' } },
              }),
            },
            options: { topBar: { visible: false } },
          },
        },
      ],
      options: {},
    },
  };
  const sideMenuType = {
    sideMenu: {
      left: {
        component: {
          name: GEOLOCATION_SCREEN,
          passProps: {
            text: 'This is a left side menu screen',
          },
        },
      },
      center: {
        component: {
          name: WEATHER_SCREEN,
        },
      },
      right: {
        component: {
          name: GEOLOCATION_SCREEN,
          passProps: {
            text: 'This is a right side menu screen',
          },
        },
      },
    },
  };
  const bottomTabsType = {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: WEATHER_SCREEN,
                  passProps: { text: 'Weather Tab#1' },
                },
              },
            ],
            options: {
              bottomTab: { text: 'Tab#1' },
              topBar: { visible: false },
            },
          },
        },
        {
          component: {
            name: GEOLOCATION_SCREEN,
            passProps: { text: 'Geolocation Tab#2' },
            options: {
              bottomTab: { text: 'Tab#2' },
              topBar: { title: { text: 'Geolocation' } },
            },
          },
        },
      ],
    },
  };
  Navigation.setRoot({
    root: stackType,
  });
});

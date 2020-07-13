import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../Containers/Home';
import DetailsScreen from '../Containers/Home/Details';

const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default Navigator;

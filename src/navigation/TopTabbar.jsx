import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Colors } from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
import { TabBarData } from '../data/TabbarData';
import CommunityScreen from '../screens/CommunityScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabbar = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: Colors.tertiary,
        tabBarInactiveTintColor: Colors.secondaryColor,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.tertiary,
        },
        tabBarStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })}>
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <VectorIcon
              type="FontAwesome"
              name="users"
              color={color}
              size={20}
            />
          ),
        }}
      />
      {TabBarData.map((tab) => (
        <Tab.Screen key={tab.id} name={tab.name} component={tab.route} />
      ))}
    </Tab.Navigator>
  );
};

export default TopTabbar;

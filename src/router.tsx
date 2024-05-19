import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';

const Drawer = createDrawerNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Hability from './screens/Hability';
import Education from './screens/Education';
import Experience from './screens/Experience';
import Aboutme from './screens/Aboutme';
import Contact from './screens/Contact';


const Drawer = createDrawerNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Hability" component={Hability} />
                <Drawer.Screen name="Education" component={Education} />
                <Drawer.Screen name="Experience" component={Experience} />
                <Drawer.Screen name="Aboutme" component={Aboutme} />
                <Drawer.Screen name="Contact" component={Contact} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

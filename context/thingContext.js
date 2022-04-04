
import { createContext, useContext, useState } from 'react'

const ThingsContext = createContext({});

//highOrder
export default function ThingsHOC(Component) {
	return function(props) {
        const {children} = props

        const [data, setData] = useState({firstName:'Huu', lastName:'Nguyen'});
        const value = {data, setData}

        return(
            <ThingsContext.Provider value={value}>
                <Component>{children}</Component>
	        </ThingsContext.Provider>
        )
    }
}

// Export useContext Hook.
function useThingsContext() {
	return useContext(ThingsContext);
}

export {useThingsContext};


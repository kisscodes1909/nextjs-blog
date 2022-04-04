import {useThingsContext} from '../context/thingContext';

export default function List() {

    const { data, setData} = useThingsContext();

    return <>        {data.firstName}
    </>
}
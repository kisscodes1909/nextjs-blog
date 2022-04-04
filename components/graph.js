import {useThingsContext} from '../context/thingContext';


export default function Graph() {

    const { data, setData} = useThingsContext();

    console.log(data);

    function changeContext() {
        setData({firstName:'Huu1', lastName:'Nguyen2'})
    }

    return <>
        {data.firstName}
        <button onClick={()=>changeContext()}>Change context</button>
    </>
}
import { useSelector } from "react-redux"
import './style.css'
const DigimonList = () => {
    const { digimons } = useSelector((state) => state);
    return (
        <div className='card'>
            <ul>
                {digimons.map((item, i) => (
                    <li key={i}>
                        <img src={item.img} alt="" />
                        <h2>{item.name}</h2>
                        <h4>{item.level}</h4>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default DigimonList

import { useState } from "react";
import { useDispatch } from 'react-redux'
import { addDigimonsThunk } from '../../store/modules/digimons/thunks.js'
const Search = () => {

    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const dispatch = useDispatch()
    const handle = () => {
        setError(false);
        dispatch(addDigimonsThunk(input, setError));
        setInput('');
    };
    return (
        <div>
            <h2>Procure pelo seu Digimon!</h2>
            <div>
                <input
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Procure seu Digimon"
                ></input>
                <button onClick={() => handle()}>Pesquisar</button>
            </div>
        </div >
    );
};

export default Search
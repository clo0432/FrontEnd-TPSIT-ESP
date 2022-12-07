import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs(values => ({...values, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputs["scuola"] && inputs["piano"])
            navigate(
                "maps", 
                {
                    state: inputs
                }
            );
        else
            console.log("dirty form");
    };

    return (
        <div>
            <main>
                <h1>Welcome</h1>
                <p>Breve descrizione</p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="scuola">Scuola:</label>
                    <select
                        id="scuola"
                        name="scuola"
                        onChange={handleChange}
                    >
                        <option value={""}></option>
                        <option value={"Alberghetti"}>Alberghetti</option>
                        <option value={"Scarabelli"}>Scarabelli</option>
                    </select>

                    <label htmlFor="piano">Piano:</label>
                    <select
                        id="piano"
                        name="piano"
                        onChange={handleChange}
                    >
                        <option value={""}></option>
                        <option value={1}>1</option>
                    </select>
                        
                    <button>Vai</button>
                </form>
            </main>
        </div>
    );
};

export default MainPage;
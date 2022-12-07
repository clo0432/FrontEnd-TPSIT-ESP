const MainPage = () => {
    return (
        <div>
            <nav>


                <button>Options</button>

            </nav>
            <main>
                <h1>Welcome</h1>
                <p>Breve descrizione</p>

                <form>
                    <label htmlFor="scuole">Scuola:</label>
                    <select id="scuole">
                        <option>Alberghetti</option>
                    </select>

                    <label htmlFor="piano">Piano:</label>
                    <select id="piano">
                        <option>1</option>
                    </select>

                    <button>Vai</button>
                </form>
            </main>
        </div>
    );
};

export default MainPage;
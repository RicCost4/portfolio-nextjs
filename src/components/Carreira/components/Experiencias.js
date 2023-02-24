import carreira from "../../../../pages/api/json-arquivos/api_carreira.json";

function Experiencias(){
    const texto = carreira

    return(
        <section>
            <h1>Experiências</h1>
            <p>
                {texto.experiencia.p1}
            </p>
            <p>
                {texto.experiencia.p2}
            </p>
        </section>
    )
}

export default Experiencias
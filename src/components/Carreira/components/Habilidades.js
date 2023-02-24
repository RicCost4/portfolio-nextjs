import carreira from "../../../../pages/api/json-arquivos/api_carreira.json";

function Habilidades(){
    const texto = carreira

    return(
        <section>
            <h1>Habilidades</h1>
            <p>
               <strong>{texto.habilidades.p1.strong}</strong>{texto.habilidades.p1.paragrafo}
            </p>
        </section>
    )
}

export default Habilidades
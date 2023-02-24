import styled from "styled-components"

 
 const Style404 = styled.section`
    display: grid;
    align-items: center;
    justify-content: center;

    h1{
        text-align: center;
        font-size: 2.5em;
    }

    p{
        text-align: center;
        font-size: 1.4em;
    }
 `

 function Page404(){

    return(
        <Style404>
            <h1> Pagina não encontrada!!</h1>
            <p>
                Que pena, não encontramos a Pagina solicitada, verifica a URL ou tente novamente depois.
            </p>
        </Style404>
    )
 }

 export default Page404
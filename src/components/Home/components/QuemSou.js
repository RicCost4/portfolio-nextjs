import Image from "next/image"
import React from "react";
import index from "../../../../pages/api/json-arquivos/api_index.json";

function QuemSou(){
    const captura = index
    const [texto, setTexto] = React.useState([])

    React.useEffect(()=> {
        setTexto(captura.quemsou.p2)
    }, [])

    return(
        <section>
            
            <h1>Quem Sou!</h1>
            <div className="perfil">
                <Image src={captura.img.perfil2} alt="Chad" width={300} height={300} className="perfilImg" />
                <div className="perfilTxt">
                    <p>
                        {captura.quemsou.p1}
                    </p>
                    {texto.map((e) => {
                        return(
                            <p key={e.id}>
                                <strong>{e.strong}</strong>{e.texto}
                            </p>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default QuemSou
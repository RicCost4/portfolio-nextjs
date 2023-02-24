import index from "../../../../pages/api/json-arquivos/api_index.json";


function Apresentacao(){
    const textos = index
    const anoNascimento = 1996

    function calcularIdade(){
        const captura = new Date()
        const ano = captura.getFullYear()

        if(captura.getMonth()+1 === 3 && captura.getDate() >= 11 || captura.getMonth()+1 > 3){
            const idade = Math.abs(ano - 1996)
            return idade
        } else{
            const idade = Math.abs((ano - anoNascimento)-1)
            return idade
        }
    }

    return(
        <section>
            <h1>Apresentação</h1>
            <p>
                Olá, meu nome é <strong>{textos.perfil.nome} {textos.perfil.sobrenome}</strong>, tenho {calcularIdade()} anos, moro atualmente em Contagem-MG, estudante de Ciências da Computação na Faculdade Estácio Belo Horizonte Prado, Noivo da &#x2764;&#xFE0F;<strong>Larissa David</strong>&#x2764;&#xFE0F;, atualmente faço estágio na Defensoria Pública de Minas Gerais no setor de desenvolvimento de projetos. Tenho formação como Técnico de Enfermagem no ano de 2015, e trabalho desde os 14 anos.
            </p>
        </section>
    )
}

export default Apresentacao
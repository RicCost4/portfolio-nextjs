/** @type {import('next').NextConfig} */

const nextConfig = {

    async redirects(){

        return [
            {
                source: '/Atividade',
                destination: '/',
                permanent: false
            },
            {
                source: '/Projetos',
                destination: '/',
                permanent: false
            },
            {
                source: '/Contatos',
                destination: '/',
                permanent: false
            }
        ]
    },
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true
    },
}

module.exports = nextConfig
import Projetos from '@/components/Projetos'

export const metadata = {
  title: 'Projetos'
}

export default function Page() {
  return (
    <main>
      <h1>Meus Projetos</h1>
      <Projetos />
    </main>
  )
}
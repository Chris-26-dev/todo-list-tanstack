import { db } from '@/db'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

const serverLoader = createServerFn({ method: "GET" }).handler(() => {
  return db.query.todos.findMany()
})

export const Route = createFileRoute('/')({
  component: App,
  loader: () => {
    return serverLoader()
  },
})

function App() {

  return (
   <div>

   </div>
  )
}

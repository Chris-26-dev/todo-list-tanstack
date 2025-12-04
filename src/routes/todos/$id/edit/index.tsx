import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/todos/$id/edit/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/todos/$id/edit/"!</div>
}

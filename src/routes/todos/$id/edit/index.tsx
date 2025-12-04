import { TodoForm } from '@/components/todo-form'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from '@/components/ui/card'
import { db } from '@/db'
import { todos } from '@/db/schema'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { eq } from 'drizzle-orm'
import { ArrowLeftIcon } from 'lucide-react'

const loaderFn = createServerFn({ method: "GET" })
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const todo = await db.query.todos.findFirst({
      where: eq(todos.id, data.id)
    })

    if (todo == null) throw notFound()

    return todo
  })

export const Route = createFileRoute('/todos/$id/edit/')({
  component: RouteComponent,
  loader: async ({ params }) => loaderFn({ data: params }),
})

function RouteComponent() {
  const todo = Route.useLoaderData()

  return (
    <div className='container space-y-2'>
      <Button
        asChild
        variant="ghost"
        size="sm"
        className='text-muted-foreground'
      >
        <Link to="/">
          <ArrowLeftIcon /> Todo List
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Edit Todo - {todo.name}</CardTitle>
          <CardDescription>
            Update the details of your todo item
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TodoForm todo={todo}/>
        </CardContent>
      </Card>
    </div>
  )
}

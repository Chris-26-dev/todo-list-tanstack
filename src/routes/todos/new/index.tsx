import { TodoForm } from '@/components/todo-form'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from '@/components/ui/card'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeftIcon } from 'lucide-react'

export const Route = createFileRoute('/todos/new/')({
  component: RouteComponent,
})

function RouteComponent() {
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
                <CardTitle>Add New Todo</CardTitle>
                <CardDescription>
                    Create a new task to add to your todo list
                </CardDescription>
            </CardHeader>
            <CardContent>
                <TodoForm />
            </CardContent>
        </Card>
    </div>
  )
}

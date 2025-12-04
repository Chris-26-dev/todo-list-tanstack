import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { createClientOnlyFn } from "@tanstack/react-start";

export function LocalCountButton() {
    return <ClientSection />
}

function ClientSection() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(loadCount())
    }, [])

    useEffect(() => {
        localStorage.setItem('count', count.toString())
    }, [count])

    return (
        <Button variant="outline" size="sm" onClick={() => setCount((c) => c + 1)}>
            {count}
        </Button>
    )
}


const loadCount = createClientOnlyFn(() => {
    const storedCount = localStorage.getItem('count')
    return storedCount ? parseInt(storedCount) : 0
})
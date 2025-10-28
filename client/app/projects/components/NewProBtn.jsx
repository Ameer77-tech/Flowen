import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

const NewProBtn = () => {
  return (
    <Button variant={"default"} size={"lg"}><Plus />New Project</Button>
  )
}

export default NewProBtn
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-4 animate-in fade-in zoom-in'>
      <div className='flex flex-col gap-4'>
        <Button variant='default'>Default</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='outline'>Outline</Button>
        <Button variant='destructive'>Destructive</Button>
        <Button variant='ghost'>Ghost</Button>
      </div>
    </div>
  )
}

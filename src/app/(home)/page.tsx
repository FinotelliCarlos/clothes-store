import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, ShoppingBag } from 'lucide-react'

const ButtonsList = () => {
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="text-sm font-semibold text-foreground border-foreground/50 h-8"
      >
        Camisas
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="text-sm font-semibold text-foreground border-foreground/50 h-8"
      >
        Calças
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="text-sm font-semibold text-foreground border-foreground/50 h-8"
      >
        Calçados
      </Button>
    </>
  )
}

const HeaderButtonsList = () => {
  return (
    <div className="flex flex-row space-x-2 items-center">
      <ul className="flex-row space-x-2 sm:block hidden">
        <ButtonsList />
      </ul>

      <Sheet>
        <SheetTrigger asChild className="sm:hidden block">
          <Button
            variant="outline"
            size="icon"
            className="font-semibold text-foreground border-foreground/50 size-8"
          >
            <Menu size={18} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="space-y-3 flex flex-col w-full pt-5">
            <ButtonsList />
          </div>
        </SheetContent>
      </Sheet>

      <Button
        variant="outline"
        size="icon"
        className="font-semibold text-foreground border-foreground/50 size-8"
      >
        <ShoppingBag size={18} />
      </Button>
    </div>
  )
}

export default function Home() {
  return (
    <main className="relative h-screen w-full">
      <header className="absolute top-0 w-full p-5 flex justify-between container mx-auto items-center left-0 right-0 z-10">
        <h1 className="italic font-bold text-base">Loja de Roupas</h1>

        <HeaderButtonsList />
      </header>

      <div className="h-full bg-foreground/20 flex flex-col bg-[url(https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] dark:bg-[url(https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover bg-no-repeat opacity-25">
        <div className="h-full w-full py-20" />
      </div>

      <footer className="flex items-center justify-center flex-col gap-3 p-5 container mx-auto w-full absolute bottom-0 left-0 right-0">
        <span className="text-xs font-bold">Loja virtual de roupas</span>
        <span className="text-xs font-light">
          © Todos os direitos reservados
        </span>
      </footer>
    </main>
  )
}

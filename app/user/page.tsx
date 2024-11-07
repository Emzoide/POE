'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Bell, Book, ChevronDown, GraduationCap, Layout, Library, Search, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function Component() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)

  const courseTopics = {
    matematicas: {
      primaria: {
        1: ["Números naturales", "Suma y resta", "Figuras geométricas básicas", "Medición básica"],
        2: ["Multiplicación básica", "División básica", "Fracciones simples", "Geometría básica"],
        3: ["Multiplicación avanzada", "División avanzada", "Fracciones", "Decimales"],
        4: ["Operaciones con fracciones", "Geometría", "Estadística básica", "Álgebra básica"],
        5: ["Porcentajes", "Geometría avanzada", "Estadística", "Pre-álgebra"],
        6: ["Álgebra elemental", "Geometría analítica básica", "Estadística y probabilidad", "Razones y proporciones"]
      },
      secundaria: {
        1: ["Álgebra básica", "Ecuaciones lineales", "Geometría plana", "Estadística descriptiva"],
        2: ["Álgebra intermedia", "Geometría analítica", "Trigonometría básica", "Probabilidad"],
        3: ["Funciones", "Trigonometría avanzada", "Geometría del espacio", "Estadística inferencial"],
        4: ["Cálculo diferencial", "Geometría analítica avanzada", "Probabilidad avanzada", "Matemática financiera"],
        5: ["Cálculo integral", "Matemática discreta", "Estadística aplicada", "Optimización"]
      }
    }
  }

  const suggestedBooks = [
    { title: "Álgebra de Baldor", editorial: "Patria" },
    { title: "Aritmética de Baldor", editorial: "Patria" },
    { title: "Comunicación 3° Primaria", editorial: "Santillana" },
    { title: "Ciencias Naturales 5° Primaria", editorial: "Corefo" },
    { title: "Matemática 2° Secundaria", editorial: "Santillana" },
    { title: "Historia del Perú 4° Secundaria", editorial: "Corefo" },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#0a192f]">
      <header className="flex h-16 items-center border-b border-[#172a46] px-4 lg:px-6">
        <Link className="flex items-center gap-2 font-semibold text-white" href="#">
          <div className="relative h-8 w-8">
            <Image
              src="/icono.jpg"
              alt="POE Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="text-xl">POE</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button size="icon" variant="ghost" className="text-white hover:bg-[#172a46]">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notificaciones</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost" className="text-white hover:bg-[#172a46]">
                <User className="h-5 w-5" />
                <span className="sr-only">Perfil</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#0a192f] text-white border-[#172a46]">
              <DropdownMenuItem className="hover:bg-[#172a46]">Perfil</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#172a46]">Configuración</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-[#172a46]">Cerrar sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 border-r border-[#172a46] hidden lg:block p-6">
          <nav className="flex flex-col gap-4">
            <Link className="flex items-center gap-2 text-lg font-semibold text-white hover:text-cyan-400" href="#">
              <Layout className="h-5 w-5" />
              Dashboard
            </Link>
            <Link className="flex items-center gap-2 text-lg font-semibold text-white hover:text-cyan-400" href="#">
              <Book className="h-5 w-5" />
              Cursos
            </Link>
            <Link className="flex items-center gap-2 text-lg font-semibold text-white hover:text-cyan-400" href="#">
              <Library className="h-5 w-5" />
              Biblioteca
            </Link>
            <Link className="flex items-center gap-2 text-lg font-semibold text-white hover:text-cyan-400" href="#">
              <GraduationCap className="h-5 w-5" />
              Tareas
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <Tabs defaultValue="primaria" className="text-white">
            <TabsList className="bg-[#172a46]">
              <TabsTrigger value="primaria" className="data-[state=active]:bg-cyan-600">Primaria</TabsTrigger>
              <TabsTrigger value="secundaria" className="data-[state=active]:bg-cyan-600">Secundaria</TabsTrigger>
              <TabsTrigger value="libros" className="data-[state=active]:bg-cyan-600" onClick={() => setSearchOpen(true)}>
                Buscar Libros
              </TabsTrigger>
            </TabsList>
            <TabsContent value="primaria">
              <div className="grid gap-6">
                <h1 className="text-3xl font-bold">Primaria</h1>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((grade) => (
                    <Card key={grade} className="bg-[#172a46] border-[#234567] text-white">
                      <CardHeader>
                        <CardTitle>{grade}° Grado</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-2">
                          <Collapsible
                            open={expandedCourse === `primaria-${grade}-matematicas`}
                            onOpenChange={() => setExpandedCourse(
                              expandedCourse === `primaria-${grade}-matematicas` ? null : `primaria-${grade}-matematicas`
                            )}
                          >
                            <CollapsibleTrigger asChild>
                              <Button variant="ghost" className="w-full justify-between text-left hover:bg-[#234567]">
                                Matemáticas
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pl-4 pt-2">
                              {courseTopics.matematicas.primaria[grade as keyof typeof courseTopics.matematicas.primaria].map((topic, index) => (
                                <Link
                                  key={index}
                                  href="#"
                                  className="block py-1 text-cyan-400 hover:text-cyan-300"
                                >
                                  {topic}
                                </Link>
                              ))}
                            </CollapsibleContent>
                          </Collapsible>
                          <Button variant="ghost" className="w-full justify-between text-left hover:bg-[#234567]">
                            Comunicación
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" className="w-full justify-between text-left hover:bg-[#234567]">
                            Ciencias
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" className="w-full justify-between text-left hover:bg-[#234567]">
                            Personal Social
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="secundaria">
              <div className="grid gap-6">
                <h1 className="text-3xl font-bold">Secundaria</h1>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5].map((grade) => (
                    <Card key={grade} className="bg-[#172a46] border-[#234567] text-white">
                      <CardHeader>
                        <CardTitle>{grade}° Año</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-2">
                          <Collapsible
                            open={expandedCourse === `secundaria-${grade}-matematicas`}
                            onOpenChange={() => setExpandedCourse(
                              expandedCourse === `secundaria-${grade}-matematicas` ? null : `secundaria-${grade}-matematicas`
                            )}
                          >
                            <CollapsibleTrigger asChild>
                              <Button variant="ghost" className="w-full justify-between text-left hover:bg-[#234567]">
                                Matemáticas
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pl-4 pt-2">
                              {courseTopics.matematicas.secundaria[grade as keyof typeof courseTopics.matematicas.secundaria].map((topic, index) => (
                                <Link
                                  key={index}
                                  href="#"
                                  className="block py-1 text-cyan-400 hover:text-cyan-300"
                                >
                                  {topic}
                                </Link>
                              ))}
                            </CollapsibleContent>
                          </Collapsible>
                          <Button variant="ghost" className="w-full justify-between text-left hover:bg-[#234567]">
                            Comunicación
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" className="w-full justify-between text-left hover:bg-[#234567]">
                            Ciencias
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" className="w-full justify-between text-left hover:bg-[#234567]">
                            Historia
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="bg-[#0a192f] text-white border-[#172a46] sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Buscar Libros</DialogTitle>
            <DialogDescription className="text-gray-400">
              Encuentra libros por título, autor o editorial
            </DialogDescription>
          </DialogHeader>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              className="pl-8 bg-[#172a46] border-[#234567] text-white placeholder-gray-400"
              placeholder="Buscar libros..."
              type="search"
            />
          </div>
          <div className="mt-4">
            <h4 className="mb-2 text-sm font-medium text-gray-400">Sugerencias</h4>
            <div className="grid gap-2">
              {suggestedBooks.map((book, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-left hover:bg-[#172a46]"
                >
                  <Book className="mr-2 h-4 w-4" />
                  {book.title}
                  <span className="ml-2 text-sm text-gray-400">- {book.editorial}</span>
                </Button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
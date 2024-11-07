'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Book, GraduationCap, Library, Music, Palette, Search } from "lucide-react"

export default function Component() {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-[#0a192f] text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-[#172a46]">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/icono.jpg"
            alt="POE Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="ml-2 text-2xl font-bold text-cyan-400">POE</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-cyan-400" href="/user">
            Inicio
          </Link>
          <Link className="text-sm font-medium hover:text-cyan-400" href="#">
            Niveles
          </Link>
          <Link className="text-sm font-medium hover:text-cyan-400" href="#">
            Actividades
          </Link>
          <Link className="text-sm font-medium hover:text-cyan-400" href="#">
            Tareas
          </Link>
          <Link className="text-sm font-medium hover:text-cyan-400" href="#">
            Inglés
          </Link>
          <Link className="text-sm font-medium hover:text-cyan-400" href="#">
            Emprendimientos
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Bienvenidos a POE
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Plataforma Online Interactiva para el aprendizaje integral de nuestros estudiantes.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-[#172a46] border-[#234567] text-white"
                    placeholder="Buscar cursos, libros, recursos..."
                    type="search"
                  />
                  <Button type="submit" className="bg-cyan-600 text-white hover:bg-cyan-700">
                    <Search className="h-4 w-4 mr-2" />
                    Buscar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0d2238]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-cyan-400 sm:text-4xl md:text-5xl mb-8">Nuestros Niveles</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-[#172a46] border-[#234567] text-white">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Primaria</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>En nuestro nivel primario, los estudiantes desarrollan habilidades académicas sólidas, fomentando la curiosidad, el pensamiento crítico y el amor por el aprendizaje.</p>
                </CardContent>
              </Card>
              <Card className="bg-[#172a46] border-[#234567] text-white">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Secundaria</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Nuestro nivel secundario prepara a los estudiantes para enfrentar los desafíos del mundo moderno, desarrollando habilidades académicas, sociales y de liderazgo.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-cyan-400 sm:text-4xl md:text-5xl mb-8">Actividades Extracurriculares</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="bg-[#172a46] border-[#234567] text-white">
                <CardHeader>
                  <Music className="h-8 w-8 mb-2 text-cyan-400" />
                  <CardTitle>Música</CardTitle>
                  <CardDescription className="text-gray-400">Clases de música, coro, banda y más.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-[#172a46] border-[#234567] text-white">
                <CardHeader>
                  <GraduationCap className="h-8 w-8 mb-2 text-cyan-400" />
                  <CardTitle>Deportes</CardTitle>
                  <CardDescription className="text-gray-400">Fútbol, baloncesto, natación y atletismo.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-[#172a46] border-[#234567] text-white">
                <CardHeader>
                  <Palette className="h-8 w-8 mb-2 text-cyan-400" />
                  <CardTitle>Artes</CardTitle>
                  <CardDescription className="text-gray-400">Pintura, dibujo, escultura y más.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0d2238]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-cyan-400 sm:text-4xl md:text-5xl">Nuestra Biblioteca Digital</h2>
                <p className="text-gray-400 md:text-xl">Accede a una amplia colección de libros digitales, recursos educativos y material de investigación.</p>
                <Dialog open={isLibraryOpen} onOpenChange={setIsLibraryOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-cyan-600 text-white hover:bg-cyan-700">
                      <Library className="mr-2 h-4 w-4" /> Explorar Biblioteca
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-[#0a192f] text-white border-[#234567]">
                    <DialogHeader>
                      <DialogTitle className="text-cyan-400">Biblioteca Digital POE</DialogTitle>
                      <DialogDescription className="text-gray-400">
                        Explora nuestra colección de recursos educativos digitales.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Input id="search" placeholder="Buscar recursos..." className="col-span-4 bg-[#172a46] border-[#234567] text-white" />
                      </div>
                      <div className="grid gap-2">
                        <h4 className="font-medium text-cyan-400">Categorías Populares</h4>
                        <Button variant="outline" className="justify-start bg-cyan-600 text-[#0a192f] border-cyan-600 hover:bg-[#0a192f] hover:text-cyan-600 hover:border-cyan-600">
                          <Book className="mr-2 h-4 w-4" />
                          Libros de Texto
                        </Button>
                        <Button variant="outline" className="justify-start bg-cyan-600 text-[#0a192f] border-cyan-600 hover:bg-[#0a192f] hover:text-cyan-600 hover:border-cyan-600">
                          <GraduationCap className="mr-2 h-4 w-4" />
                          Material de Estudio
                        </Button>
                        <Button variant="outline" className="justify-start bg-cyan-600 text-[#0a192f] border-cyan-600 hover:bg-[#0a192f] hover:text-cyan-600 hover:border-cyan-600">
                          <Library className="mr-2 h-4 w-4" />
                          Recursos Multimedia
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="Biblioteca Digital"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-cyan-400 sm:text-4xl md:text-5xl mb-8">Recursos Destacados</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="bg-[#172a46] border-[#234567] text-white">
                <CardHeader>
                  <Book className="h-8 w-8 mb-2 text-cyan-400" />
                  <CardTitle>Libros Digitales</CardTitle>
                  <CardDescription className="text-gray-400">Accede a nuestra colección de libros digitales y recursos educativos.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-[#172a46] border-[#234567] text-white">
                <CardHeader>
                  <GraduationCap className="h-8 w-8 mb-2 text-cyan-400" />
                  <CardTitle>Tareas Interactivas</CardTitle>
                  <CardDescription className="text-gray-400">Realiza y entrega tus tareas de forma interactiva y recibe retroalimentación inmediata.</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-[#172a46] border-[#234567] text-white">
                <CardHeader>
                  <Library className="h-8 w-8 mb-2 text-cyan-400" />
                  <CardTitle>Material Complementario</CardTitle>
                  <CardDescription className="text-gray-400">Encuentra recursos adicionales para reforzar tu aprendizaje en todas las materias.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#234567]">
        <p className="text-xs text-gray-400">© 2024 POE. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}
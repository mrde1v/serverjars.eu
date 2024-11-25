'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BlocksIcon as GrassBlock, Server, Boxes, Box, Download, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const categories = [
  {
    id: "servers",
    title: "Servers",
    icon: <Server className="size-6" />,
    items: [
      { 
        name: "Paper", 
        versions: ["1.20.4", "1.20.2", "1.19.4", "1.18.2"],
        recommended: true 
      },
      { 
        name: "Purpur", 
        versions: ["1.20.4", "1.20.2", "1.19.4", "1.18.2"] 
      },
      { 
        name: "Vanilla", 
        versions: ["1.20.4", "1.20.2", "1.19.4", "1.18.2"] 
      },
    ],
  },
  {
    id: "proxies",
    title: "Proxies",
    icon: <Boxes className="size-6" />,
    items: [
      { 
        name: "BungeeCord", 
        versions: ["1.20", "1.19", "1.18", "1.17"],
        recommended: true 
      },
      { 
        name: "Velocity", 
        versions: ["3.2.0", "3.1.2", "3.1.1", "3.1.0"] 
      },
      { 
        name: "Waterfall", 
        versions: ["1.20", "1.19", "1.18", "1.17"] 
      },
    ],
  },
  {
    id: "modded",
    title: "Modded",
    icon: <Box className="size-6" />,
    items: [
      { 
        name: "Fabric", 
        versions: ["0.14.22", "0.14.21", "0.14.20", "0.14.19"],
        recommended: true 
      },
      { 
        name: "Forge", 
        versions: ["47.2.0", "47.1.0", "47.0.35", "47.0.34"] 
      },
    ],
    subCategory: {
      title: "Hybrid",
      items: [
        { 
          name: "Mohist", 
          versions: ["1.20.1", "1.19.4", "1.18.2", "1.16.5"] 
        },
        { 
          name: "Arclight", 
          versions: ["1.20.1", "1.19.4", "1.18.2", "1.16.5"] 
        },
      ],
    },
  },
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-radial">
      <div className="flex-grow">
        {/* Header */}
        <header className="sticky top-0 z-10 border-b border-emerald-800/30 bg-zinc-900/80 backdrop-blur-sm">
          <div className="container mx-auto flex h-16 items-center px-4">
            <Link href="/" className="flex items-center space-x-2">
              <GrassBlock className="size-8 text-emerald-400" />
              <span className="text-2xl font-bold">ServerJars.eu</span>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <h1 className="mb-8 text-center text-4xl font-bold text-emerald-400 drop-shadow-glow">
            Download Minecraft Server Software
          </h1>
          
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="space-y-8">
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-3 rounded-xl bg-zinc-800/20 p-1 outline outline-2 outline-emerald-500/20">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className="rounded-lg data-[state=active]:bg-emerald-500/20 data-[state=active]:text-emerald-400"
                >
                  <span className="flex items-center gap-2">
                    {category.icon}
                    {category.title}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item) => (
                    <Card 
                      key={item.name} 
                      className="group relative overflow-hidden rounded-xl border-2 border-emerald-500/20 bg-zinc-900/20 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-800/30 hover:shadow-lg hover:shadow-emerald-500/10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
                      <CardHeader className="pb-4">
                        <CardTitle className="flex items-center justify-between text-lg">
                          <span>{item.name}</span>
                          {item.recommended && (
                            <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400">
                              Recommended
                            </Badge>
                          )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative space-y-4">
                        <p className="text-sm text-zinc-400">Latest: v{item.versions[0]}</p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              className="w-full justify-between border-emerald-500/30 bg-zinc-800/50 hover:bg-emerald-500/20 hover:text-emerald-400"
                            >
                              <span>Download</span>
                              <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px] rounded-xl bg-zinc-900/90 text-zinc-50 border-2 border-emerald-500/30 backdrop-blur-sm">
                            <DialogHeader>
                              <DialogTitle>Download {item.name}</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              {item.versions.map((version) => (
                                <Button 
                                  key={version} 
                                  variant="outline" 
                                  className="w-full justify-between border-emerald-500/30 hover:bg-emerald-500/20 hover:text-emerald-400"
                                >
                                  <span>Version {version}</span>
                                  <Download className="size-4" />
                                </Button>
                              ))}
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {category.subCategory && (
                  <div className="space-y-4 rounded-xl border-2 border-emerald-500/20 bg-zinc-900/20 backdrop-blur-sm p-6">
                    <h3 className="text-xl font-semibold text-emerald-400">{category.subCategory.title}</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {category.subCategory.items.map((item) => (
                        <Card 
                          key={item.name} 
                          className="group relative overflow-hidden rounded-xl border-2 border-emerald-500/20 bg-zinc-900/20 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-800/30 hover:shadow-lg hover:shadow-emerald-500/10"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
                          <CardHeader className="pb-4">
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="relative space-y-4">
                            <p className="text-sm text-zinc-400">Latest: v{item.versions[0]}</p>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button 
                                  variant="outline" 
                                  className="w-full justify-between border-emerald-500/30 bg-zinc-800/50 hover:bg-emerald-500/20 hover:text-emerald-400"
                                >
                                  <span>Download</span>
                                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px] rounded-xl bg-zinc-900/90 text-zinc-50 border-2 border-emerald-500/30 backdrop-blur-sm">
                                <DialogHeader>
                                  <DialogTitle>Download {item.name}</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  {item.versions.map((version) => (
                                    <Button 
                                      key={version} 
                                      variant="outline" 
                                      className="w-full justify-between border-emerald-500/30 hover:bg-emerald-500/20 hover:text-emerald-400"
                                    >
                                      <span>Version {version}</span>
                                      <Download className="size-4" />
                                    </Button>
                                  ))}
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-emerald-800/30 py-6 text-center text-sm text-zinc-400 bg-zinc-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} ServerJars.eu | Maintaned by{' '}
            <Link 
              href="https://atropol.eu" 
              className="text-emerald-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Atropol Hosting Team Ústí
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}


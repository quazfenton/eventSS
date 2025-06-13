"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Calendar, ChevronDown, Filter, Music, Zap } from "lucide-react"

export function EventsFilter() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        className={`rounded-full border-zinc-800 ${activeFilter === "all" ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        onClick={() => setActiveFilter("all")}
      >
        All Events
      </Button>

      <Button
        variant="outline"
        size="sm"
        className={`rounded-full border-zinc-800 ${activeFilter === "music" ? "bg-purple-900/50 text-purple-300 border-purple-800" : "text-zinc-400"}`}
        onClick={() => setActiveFilter("music")}
      >
        <Music className="mr-1 h-3.5 w-3.5" />
        Music
      </Button>

      <Button
        variant="outline"
        size="sm"
        className={`rounded-full border-zinc-800 ${activeFilter === "tech" ? "bg-blue-900/50 text-blue-300 border-blue-800" : "text-zinc-400"}`}
        onClick={() => setActiveFilter("tech")}
      >
        <Zap className="mr-1 h-3.5 w-3.5" />
        Tech
      </Button>

      <Button
        variant="outline"
        size="sm"
        className={`rounded-full border-zinc-800 ${activeFilter === "art" ? "bg-pink-900/50 text-pink-300 border-pink-800" : "text-zinc-400"}`}
        onClick={() => setActiveFilter("art")}
      >
        <Calendar className="mr-1 h-3.5 w-3.5" />
        Art
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="rounded-full border-zinc-800 text-zinc-400">
            <Filter className="mr-1 h-3.5 w-3.5" />
            More Filters
            <ChevronDown className="ml-1 h-3.5 w-3.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-zinc-900 border-zinc-800 text-zinc-300">
          <DropdownMenuLabel>Filter By</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-zinc-800" />
          <DropdownMenuGroup>
            <DropdownMenuItem>Date: This Week</DropdownMenuItem>
            <DropdownMenuItem>Date: This Month</DropdownMenuItem>
            <DropdownMenuItem>Date: Next Month</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-zinc-800" />
          <DropdownMenuGroup>
            <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
            <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-zinc-800" />
          <DropdownMenuGroup>
            <DropdownMenuItem>Availability: Most Tickets</DropdownMenuItem>
            <DropdownMenuItem>Availability: Limited Tickets</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

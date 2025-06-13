"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  image: string
  price: number
  category: string
  tickets: {
    available: number
    total: number
  }
}

export function EventCard({ event }: { event: Event }) {
  const [isHovered, setIsHovered] = useState(false)

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  const formattedTime = new Date(event.date).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })

  const ticketPercentage = Math.round((event.tickets.available / event.tickets.total) * 100)
  const ticketColorClass =
    ticketPercentage > 50 ? "bg-emerald-500" : ticketPercentage > 20 ? "bg-amber-500" : "bg-rose-500"

  return (
    <Card
      className="overflow-hidden border-0 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          className="object-cover w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
        <Badge className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white border-0 font-medium">
          ${event.price}
        </Badge>
        <Badge
          className="absolute top-3 left-3 text-white border-0 font-medium uppercase"
          style={{
            backgroundColor:
              event.category === "music"
                ? "rgba(139, 92, 246, 0.8)"
                : event.category === "tech"
                  ? "rgba(14, 165, 233, 0.8)"
                  : "rgba(236, 72, 153, 0.8)",
          }}
        >
          {event.category}
        </Badge>
      </div>
      <CardContent className="p-5">
        <h3 className="mb-2 text-xl font-bold tracking-tight">{event.title}</h3>
        <div className="flex items-center mb-1 text-sm text-zinc-400">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{formattedDate}</span>
          <Clock className="w-4 h-4 ml-3 mr-1" />
          <span>{formattedTime}</span>
        </div>
        <div className="flex items-center mb-3 text-sm text-zinc-400">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{event.location}</span>
        </div>
        <p className="text-sm text-zinc-300 line-clamp-2">{event.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col p-5 pt-0 gap-4">
        <div className="w-full">
          <div className="flex justify-between mb-1 text-xs">
            <span className="text-zinc-400">Tickets available</span>
            <span className="font-medium">
              {event.tickets.available} / {event.tickets.total}
            </span>
          </div>
          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div className={`h-full ${ticketColorClass} rounded-full`} style={{ width: `${ticketPercentage}%` }} />
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-2">
          <Button variant="outline" className="border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white">
            Details
          </Button>
          <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0">
            Get Tickets
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

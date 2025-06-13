"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Ticket } from "lucide-react"
import { TicketSelector } from "@/components/ticket-selector"

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

export function FeaturedEvent({ event }: { event: Event }) {
  const [showTickets, setShowTickets] = useState(false)

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  const formattedTime = new Date(event.date).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-purple-900/30">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />

      <div className="relative z-10 grid gap-6 p-6 md:grid-cols-2 md:p-8 lg:p-10">
        <div className="flex flex-col justify-between order-2 md:order-1">
          <div>
            <Badge
              className="mb-4 text-white border-0 font-medium uppercase"
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

            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{event.title}</h2>

            <p className="mb-6 text-zinc-300">{event.description}</p>

            <div className="grid gap-3 mb-8">
              <div className="flex items-center text-zinc-300">
                <Calendar className="w-5 h-5 mr-2 text-purple-400" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center text-zinc-300">
                <Clock className="w-5 h-5 mr-2 text-purple-400" />
                <span>{formattedTime}</span>
              </div>
              <div className="flex items-center text-zinc-300">
                <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-zinc-300">
                <Ticket className="w-5 h-5 mr-2 text-purple-400" />
                <span>{event.tickets.available} tickets available</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0"
              onClick={() => setShowTickets(!showTickets)}
            >
              {showTickets ? "Hide Tickets" : "Get Tickets"}
            </Button>
            <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white">
              Event Details
            </Button>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="overflow-hidden rounded-lg aspect-video">
            <img src={event.image || "/placeholder.svg"} alt={event.title} className="object-cover w-full h-full" />
          </div>

          {showTickets && (
            <div className="mt-6 p-4 bg-zinc-900/80 backdrop-blur-sm rounded-lg border border-zinc-800">
              <TicketSelector event={event} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

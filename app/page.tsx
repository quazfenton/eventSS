import { EventCard } from "@/components/event-card"
import { EventsFilter } from "@/components/events-filter"
import { FeaturedEvent } from "@/components/featured-event"

// Sample event data
const events = [
  {
    id: "1",
    title: "NEON NEXUS 2025",
    description: "The ultimate cyberpunk music experience with holographic performances and immersive sound.",
    date: "2025-06-15T20:00:00",
    location: "Quantum Arena, Neo Tokyo",
    image: "/placeholder.svg?height=400&width=600",
    price: 89.99,
    category: "music",
    featured: true,
    tickets: {
      available: 320,
      total: 1000,
    },
  },
  {
    id: "2",
    title: "DIGITAL HORIZON EXPO",
    description: "Explore the cutting edge of technology with demos, talks, and interactive exhibits.",
    date: "2025-07-22T09:00:00",
    location: "TechHub Center, Silicon Valley",
    image: "/placeholder.svg?height=400&width=600",
    price: 129.99,
    category: "tech",
    featured: false,
    tickets: {
      available: 750,
      total: 2000,
    },
  },
  {
    id: "3",
    title: "ORBITAL LIGHT FESTIVAL",
    description: "A mesmerizing display of light art installations and projection mapping.",
    date: "2025-08-05T21:30:00",
    location: "Stellar Park, Aurora City",
    image: "/placeholder.svg?height=400&width=600",
    price: 59.99,
    category: "art",
    featured: false,
    tickets: {
      available: 1200,
      total: 3000,
    },
  },
  {
    id: "4",
    title: "NEURAL NETWORK CONFERENCE",
    description: "Connect with AI pioneers and witness groundbreaking demonstrations.",
    date: "2025-09-10T10:00:00",
    location: "Mindscape Center, Palo Alto",
    image: "/placeholder.svg?height=400&width=600",
    price: 199.99,
    category: "tech",
    featured: false,
    tickets: {
      available: 450,
      total: 800,
    },
  },
  {
    id: "5",
    title: "QUANTUM BEATS",
    description: "Electronic music festival featuring the world's top DJs and immersive visual experiences.",
    date: "2025-10-18T22:00:00",
    location: "Pulse Arena, New Berlin",
    image: "/placeholder.svg?height=400&width=600",
    price: 149.99,
    category: "music",
    featured: false,
    tickets: {
      available: 2800,
      total: 5000,
    },
  },
  {
    id: "6",
    title: "AUGMENTED REALITY SHOWCASE",
    description: "Experience the future of AR with interactive demos and cutting-edge applications.",
    date: "2025-11-05T11:00:00",
    location: "Vision Center, San Francisco",
    image: "/placeholder.svg?height=400&width=600",
    price: 79.99,
    category: "tech",
    featured: false,
    tickets: {
      available: 680,
      total: 1200,
    },
  },
]

export default function Home() {
  const featuredEvent = events.find((event) => event.featured)
  const regularEvents = events.filter((event) => !event.featured)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container px-4 py-8 mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            FUTURE<span className="font-light">EVENTS</span>
          </h1>
          <p className="mt-2 text-zinc-400">Discover extraordinary experiences on the horizon</p>
        </header>

        {featuredEvent && (
          <section className="mb-16">
            <h2 className="mb-6 text-xl font-medium uppercase text-zinc-400">Featured Event</h2>
            <FeaturedEvent event={featuredEvent} />
          </section>
        )}

        <section>
          <div className="flex flex-col justify-between gap-4 mb-8 md:flex-row md:items-center">
            <h2 className="text-xl font-medium uppercase text-zinc-400">Upcoming Events</h2>
            <EventsFilter />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regularEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

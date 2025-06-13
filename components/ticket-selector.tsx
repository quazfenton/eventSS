"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, ShoppingCart } from "lucide-react"

interface Event {
  id: string
  title: string
  price: number
  tickets: {
    available: number
  }
}

export function TicketSelector({ event }: { event: Event }) {
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    if (quantity < 10 && quantity < event.tickets.available) {
      setQuantity(quantity + 1)
    }
  }

  const total = event.price * quantity

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Select Tickets</h3>

      <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50">
        <div>
          <p className="font-medium">Standard Admission</p>
          <p className="text-sm text-zinc-400">${event.price.toFixed(2)} per ticket</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-zinc-700"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
          >
            <Minus className="h-3 w-3" />
          </Button>

          <Input
            type="number"
            min="1"
            max={Math.min(10, event.tickets.available)}
            value={quantity}
            onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
            className="h-8 w-12 text-center bg-zinc-800 border-zinc-700"
          />

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-zinc-700"
            onClick={increaseQuantity}
            disabled={quantity >= 10 || quantity >= event.tickets.available}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
        <div>
          <p className="text-sm text-zinc-400">Total</p>
          <p className="text-xl font-bold">${total.toFixed(2)}</p>
        </div>
        <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Checkout
        </Button>
      </div>
    </div>
  )
}

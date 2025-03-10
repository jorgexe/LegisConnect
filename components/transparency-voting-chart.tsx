"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    name: "Medio Ambiente",
    partyA: 85,
    partyB: 65,
    partyC: 45,
  },
  {
    name: "Educación",
    partyA: 75,
    partyB: 70,
    partyC: 60,
  },
  {
    name: "Salud",
    partyA: 80,
    partyB: 55,
    partyC: 50,
  },
  {
    name: "Economía",
    partyA: 60,
    partyB: 85,
    partyC: 70,
  },
  {
    name: "Infraestructura",
    partyA: 70,
    partyB: 75,
    partyC: 65,
  },
  {
    name: "Programas Sociales",
    partyA: 90,
    partyB: 45,
    partyC: 55,
  },
]

export function TransparencyVotingChart() {
  return (
    <ChartContainer
      config={{
        partyA: {
          label: "Partido A",
          color: "hsl(var(--chart-1))",
        },
        partyB: {
          label: "Partido B",
          color: "hsl(var(--chart-2))",
        },
        partyC: {
          label: "Partido C",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: "Porcentaje de Apoyo %", angle: -90, position: "insideLeft" }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="partyA" name="Partido A" fill="var(--color-partyA)" />
          <Bar dataKey="partyB" name="Partido B" fill="var(--color-partyB)" />
          <Bar dataKey="partyC" name="Partido C" fill="var(--color-partyC)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}


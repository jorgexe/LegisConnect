"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    name: "Medio Ambiente",
    morena: 85,
    pan: 65,
    pri: 45,
  },
  {
    name: "Educación",
    morena: 75,
    pan: 70,
    pri: 60,
  },
  {
    name: "Salud",
    morena: 80,
    pan: 55,
    pri: 50,
  },
  {
    name: "Economía",
    morena: 60,
    pan: 85,
    pri: 70,
  },
  {
    name: "Infraestructura",
    morena: 70,
    pan: 75,
    pri: 65,
  },
  {
    name: "Programas Sociales",
    morena: 90,
    pan: 45,
    pri: 55,
  },
]

export function TransparencyVotingChart() {
  return (
    <ChartContainer
      config={{
        morena: {
          label: "MORENA",
          color: "#8B0000", // Color guinda/marrón rojizo
        },
        pan: {
          label: "PAN",
          color: "#0047AB", // Color azul
        },
        pri: {
          label: "PRI",
          color: "#006847", // Color verde
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
          <Bar dataKey="morena" name="MORENA" fill="#8B0000" />
          <Bar dataKey="pan" name="PAN" fill="#0047AB" />
          <Bar dataKey="pri" name="PRI" fill="#006847" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}


"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Educación", value: 250, key: "educacion" },
  { name: "Salud", value: 220, key: "salud" },
  { name: "Infraestructura", value: 320, key: "infraestructura" },
  { name: "Medio Ambiente", value: 150, key: "medioambiente" },
  { name: "Programas Sociales", value: 185, key: "programassociales" },
  { name: "Defensa", value: 110, key: "defensa" },
  { name: "Otros", value: 75, key: "otros" },
]

export function TransparencySpendingChart() {
  return (
    <ChartContainer
      config={{
        educacion: {
          label: "Educación",
          color: "hsl(var(--chart-1))",
        },
        salud: {
          label: "Salud",
          color: "hsl(var(--chart-2))",
        },
        infraestructura: {
          label: "Infraestructura",
          color: "hsl(var(--chart-3))",
        },
        medioambiente: {
          label: "Medio Ambiente",
          color: "hsl(var(--chart-4))",
        },
        programassociales: {
          label: "Programas Sociales",
          color: "hsl(var(--chart-5))",
        },
        defensa: {
          label: "Defensa",
          color: "hsl(var(--chart-6))",
        },
        otros: {
          label: "Otros",
          color: "hsl(var(--chart-7))",
        },
      }}
      className="h-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`var(--color-${entry.key})`} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}


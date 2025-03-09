"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Education", value: 250 },
  { name: "Healthcare", value: 220 },
  { name: "Infrastructure", value: 320 },
  { name: "Environment", value: 150 },
  { name: "Social Programs", value: 185 },
  { name: "Defense", value: 110 },
  { name: "Other", value: 75 },
]

export function TransparencySpendingChart() {
  return (
    <ChartContainer
      config={{
        education: {
          label: "Education",
          color: "hsl(var(--chart-1))",
        },
        healthcare: {
          label: "Healthcare",
          color: "hsl(var(--chart-2))",
        },
        infrastructure: {
          label: "Infrastructure",
          color: "hsl(var(--chart-3))",
        },
        environment: {
          label: "Environment",
          color: "hsl(var(--chart-4))",
        },
        socialPrograms: {
          label: "Social Programs",
          color: "hsl(var(--chart-5))",
        },
        defense: {
          label: "Defense",
          color: "hsl(var(--chart-6))",
        },
        other: {
          label: "Other",
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
              <Cell key={`cell-${index}`} fill={`var(--color-${entry.name.toLowerCase().replace(" ", "")})`} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}


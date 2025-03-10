"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

// Formateador para mostrar valores como millones de pesos
const formatoPresupuesto = (value: number) => {
  return `$${value.toLocaleString('es-MX')} millones`;
}

const data = [
  { name: "Educación", value: 250, key: "educacion", color: "#2E86C1" },
  { name: "Salud", value: 220, key: "salud", color: "#E74C3C" },
  { name: "Infraestructura", value: 320, key: "infraestructura", color: "#F39C12" },
  { name: "Medio Ambiente", value: 150, key: "medioambiente", color: "#27AE60" },
  { name: "Programas Sociales", value: 185, key: "programassociales", color: "#8E44AD" },
  { name: "Defensa", value: 110, key: "defensa", color: "#34495E" },
  { name: "Otros", value: 75, key: "otros", color: "#7F8C8D" },
]

export function TransparencySpendingChart() {
  return (
    <div className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={formatoPresupuesto} />
          <Legend 
            layout="horizontal" 
            verticalAlign="bottom" 
            align="center" 
            formatter={(value, entry, index) => <span style={{ color: data[index].color }}>{value}</span>} 
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center mt-4 text-sm text-gray-500">
        <p>Distribución del Presupuesto Nacional 2023 (en millones de pesos)</p>
      </div>
    </div>
  )
}


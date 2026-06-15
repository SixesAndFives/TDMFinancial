"use client"

import { Area, AreaChart, ResponsiveContainer } from "recharts"

const data = [
  { i: 0, v: 4 },
  { i: 1, v: 4.6 },
  { i: 2, v: 4.2 },
  { i: 3, v: 5.1 },
  { i: 4, v: 4.8 },
  { i: 5, v: 6.2 },
  { i: 6, v: 8.4 },
  { i: 7, v: 10.1 },
  { i: 8, v: 9.3 },
  { i: 9, v: 11.6 },
  { i: 10, v: 13.2 },
  { i: 11, v: 12.1 },
  { i: 12, v: 14.4 },
  { i: 13, v: 16.8 },
  { i: 14, v: 15.2 },
  { i: 15, v: 17.6 },
]

export function AdChart() {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="adFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c8a24a" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#c8a24a" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="v"
            stroke="#c8a24a"
            strokeWidth={3}
            fill="url(#adFill)"
            dot={false}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

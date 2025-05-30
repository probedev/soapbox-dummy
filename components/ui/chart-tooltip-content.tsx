import * as React from "react"

interface ChartTooltipContentProps {
  labelFormatter: (value: string) => string
  indicator?: "dot" | "line"
}

export function ChartTooltipContent({
  labelFormatter,
  indicator = "dot",
}: ChartTooltipContentProps) {
  return function TooltipContent({ active, payload, label }: any) {
    if (!active || !payload || !payload.length) return null

    return (
      <div className="rounded-md border bg-white p-3 shadow-sm">
        <div className="text-sm font-semibold text-gray-700">
          {labelFormatter(label)}
        </div>
        <div className="mt-2 space-y-1 text-sm">
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-gray-600">{entry.name}:</span>
              <span className="font-medium text-gray-800">{entry.value}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
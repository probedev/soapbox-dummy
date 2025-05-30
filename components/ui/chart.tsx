// components/ui/chart.tsx
import * as React from "react"
import {
  AreaChart as RechartsAreaChart,
  BarChart as RechartsBarChart,
  LineChart as RechartsLineChart,
  PieChart as RechartsPieChart,
  RadarChart as RechartsRadarChart,
  ResponsiveContainer,
  TooltipProps,
  LegendProps,
} from "recharts"

interface ChartContainerProps {
  config: Record<string, { label: string; color?: string }>
  className?: string
  children: React.ReactNode
}

export function ChartContainer({ config, className, children }: ChartContainerProps) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  )
}

export function ChartTooltip({ cursor, content }: TooltipProps) {
  return <RechartsAreaChart.Tooltip cursor={cursor} content={content} />
}

export function ChartLegend(props: LegendProps) {
  return <RechartsAreaChart.Legend {...props} />
}

export const AreaChart = RechartsAreaChart
export const BarChart = RechartsBarChart
export const LineChart = RechartsLineChart
export const PieChart = RechartsPieChart
export const RadarChart = RechartsRadarChart
"use client";

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { dummyData, radarSample } from "@/data/dummy";

export default function Home() {
  const [viewMode, setViewMode] = useState("aggregate");

  return (
    <div className="grid gap-6 p-4">
      <h1 className="text-3xl font-bold">🧭 Point Nemo: Political Pulse of U.S. Podcasts</h1>

      <div className="flex gap-4 items-center">
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="International Relations">International Relations</SelectItem>
            <SelectItem value="Social Equality">Social Equality</SelectItem>
            <SelectItem value="Markets & Finance">Markets & Finance</SelectItem>
            <SelectItem value="Tech Regulation">Tech Regulation</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-2">
          <span>Aggregate View</span>
          <Switch checked={viewMode === "aggregate"} onCheckedChange={() => setViewMode(viewMode === "aggregate" ? "podcast" : "aggregate")} />
          <span>Per Podcast View</span>
        </div>
      </div>

      <Card>
        <CardContent className="h-80">
          <h2 className="text-xl font-semibold mb-2">📊 Theme Volume Over Time</h2>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dummyData} stackOffset="expand">
              <XAxis dataKey="timestamp" />
              <YAxis tickFormatter={(v) => `${v * 100}%`} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="International Relations" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="Social Equality" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="Markets & Finance" stackId="1" stroke="#ffc658" fill="#ffc658" />
              <Area type="monotone" dataKey="Tech Regulation" stackId="1" stroke="#ff7300" fill="#ff7300" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="h-80">
          <h2 className="text-xl font-semibold mb-2">📈 Sentiment Intensity & Polarization</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dummyData}>
              <XAxis dataKey="timestamp" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="sentiment_intensity" stroke="#8884d8" />
              <Line yAxisId="right" type="monotone" dataKey="polarization_numeric" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="h-80">
          <h2 className="text-xl font-semibold mb-2">🧠 Bias Direction Distribution</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dummyData}>
              <XAxis dataKey="bias_direction" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="h-80">
          <h2 className="text-xl font-semibold mb-2">🧬 Podcast Signature (Radar)</h2>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarSample}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <PolarRadiusAxis angle={30} domain={[0, 1]} />
              <Radar name="Podcast" dataKey="value" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
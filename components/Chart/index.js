import { useEffect, useRef, useMemo } from "react"
import Chart from "chart.js/auto"
import { Box } from "@mui/material"

export default function ChartComponent({ type }) {
  const canvasEl = useRef(null)

  const maxRandom = useMemo(() => {
    return type === "Diamond" ? 800 : 80
  }, [type])

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d")

    const value = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * maxRandom)
    )

    const date = [10, 11, 12, 13, 14, 15, 16]

    const data = {
      labels: date,
      datasets: [
        {
          label: type,
          data: value,
          borderWidth: 2,
          borderColor: "#1976d2",
          lineTension: 0.2,
          pointBackgroundColor: "#1976d2",
          pointRadius: 3,
        },
      ],
    }

    const config = {
      type: "line",
      data: data,
    }
    const myLineChart = new Chart(ctx, config)

    return function cleanup() {
      myLineChart.destroy()
    }
  })

  return (
    <Box mt={5}>
      <canvas id="chart" ref={canvasEl} height="250" />
    </Box>
  )
}

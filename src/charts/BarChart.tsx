import {useAnimate1, useSvgSize} from "@/hooks"
import {AxisBottom, AxisLeft} from "@visx/axis"
import {GridRows} from "@visx/grid"
import {scaleBand, scaleLinear, scaleOrdinal} from "d3"
import {motion} from "framer-motion"
import React from "react"

const groups = ["QS-Ay", "Spy-Ay", "Spy-ay"]
const data: {
  group: string
  value: number
}[] = [
  {
    group: "QS-Ay",
    value: 0.25864153
  },
  {
    group: "Spy-Ay",
    value: 242.1510151
  },
  {
    group: "Spy-ay",
    value: 260.012358
  }
]

export const BarChart = () => {
  const {ref, inView} = useAnimate1()

  const margin                = {left: 70, right: 20, top: 20, bottom: 100},
        {w, h, width, height} = useSvgSize(850, 500, margin)

  const x     = scaleBand()
          .domain(groups)
          .range([0, width])
          .padding(0.5),
        y     = scaleLinear()
          .domain([0, 280])
          .range([height, 0])
          .nice(),
        color = scaleOrdinal<string>()
          .domain(groups)
          .range(["#ea708d", "#ec77c7", "#32d9f5"])

  return <div ref={ref} className={"relative self-center"}>
    <svg width={w} height={h}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisLeft
          scale={y}
          hideTicks
          hideZero
          numTicks={8}
          stroke={"#d9dde0"}
          label={"酪醇浓度（mg/L）"}
          labelOffset={40}
          labelProps={{fontSize: 13, textAnchor: "middle", fill: "#606162"}}
        />
        <AxisBottom
          scale={x}
          top={height}
          hideTicks
          label={"菌株"}
          labelProps={{fontSize: 13, textAnchor: "middle", fill: "#606162"}}
        />
        <GridRows width={width} height={height} scale={y}/>
        {
          data.map((d, i) =>
            <React.Fragment key={d.group}>
              <motion.rect
                animate={{
                  y: [height, inView ? y(d.value) : height],
                  height: [0, inView ? height - y(d.value) : 0],
                  transition: {duration: 1, delay: i * 1.02}
                }}
                x={x(d.group)}
                width={x.bandwidth()}
                fill={color(d.group)}
              />
              <motion.text
                animate={{
                  opacity: [0, inView ? 1 : 0],
                  transition: {duration: 1, delay: 3.1}
                }}
                x={x(d.group)! + x.bandwidth() / 2}
                y={y(d.value) - 10}
                fontSize={11}
                fill={"#8b9093"}
                textAnchor={"middle"}>
                {d.value}
              </motion.text>
            </React.Fragment>)
        }
      </g>
    </svg>
  </div>
}
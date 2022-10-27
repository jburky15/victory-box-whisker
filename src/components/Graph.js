import React from 'react'
import { VictoryBoxPlot, VictoryChart, VictoryAxis } from 'victory'

export const Graph = () => {
    const data = [
        { x: 1, y: [1, 2, 3, 5] },
        { x: 2, y: [3, 2, 8, 10] },
        { x: 3, y: [2, 8, 6, 5] },
        { x: 4, y: [1, 3, 2, 9] }
      ]

  return (
    <div>
        <h1>Victory Doc Tutorial</h1>
        <VictoryChart
            domainPadding={10}
        >
            <VictoryAxis
                dependentAxis
                // tickFormat specifies how ticks should be displayed
                tickFormat={(x) => (`$${x / 1}k`)}
            />
            <VictoryAxis
                // tickValues specifies both the number of ticks and where they are placed on the axis
                tickValues={[1, 2, 3, 4]}
                tickFormat={["Q1", "Q2", "Q3", "Q4"]}
            />
                <VictoryBoxPlot
                    domain={{x: [0, 4], y: [0, 15]}}
                    height={ 400 }
                    boxWidth={ 10 }
                    whiskerWidth={ 10 }
                    data={ data }
                    categories={{x: ["Q1", "Q2", "Q3", "Q4"]}}
                />
        </VictoryChart>
    </div>
  )
}

export default Graph;
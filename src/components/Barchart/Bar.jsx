import { ResponsiveBar } from '@nivo/bar'
import React from 'react'
import { Reasons as data } from '../../Data/SidebarData'

const Bar = () => {
  return (
    <div style={{height: '100%'}}>
    <ResponsiveBar
    data={data}
    keys={[
        'malaria',
        'diabetes',
        'fever',
        'cancer',
        'headache',
        'accident'
    ]}
    indexBy="days"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    fill={[
        {
            match: {
                id: 'fries'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'sandwich'
            },
            id: 'lines'
        }
    ]}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                1.6
            ]
        ]
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: 32
    }}
    axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: -40
    }}
    enableLabel={false}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                1.6
            ]
        ]
    }}
    legends={[
        {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 147,
            translateY: 0,
            itemWidth: 100,
            itemHeight: 20,
            itemsSpacing: 2,
            symbolSize: 20,
            itemDirection: 'left-to-right'
        }
    ]}
    role="application"
    ariaLabel="Nivo bar chart demo"
/>
    </div>
  )
}

export default Bar

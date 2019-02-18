import React, { Component } from 'react';
import Radar from 'react-d3-radar';

class ComparitiveRadarChart extends Component {
  render() {
    const radar = (
      <div>
        <Radar
          width={500}
          height={500}
          padding={70}
          domainMax={10}
          highlighted={null}
          onHover={point => {
            if (point) {
              console.log('hovered over a data point');
            } else {
              console.log('not over anything');
            }
          }}
          data={{
            variables: [
              { key: 'resilience', label: 'Openness' },
              { key: 'strength', label: 'Conscientious' },
              { key: 'adaptability', label: 'Intro-Extrovert' },
              { key: 'creativity', label: 'Agreeable' },
              { key: 'openness', label: 'Neurotic' }
            ],
            sets: [
              {
                key: 'me',
                label: 'My Scores',
                values: {
                  resilience: 9,
                  strength: 8,
                  adaptability: 4,
                  creativity: 9,
                  openness: 4
                }
              },
              {
                key: 'everyone',
                label: 'Everyone',
                values: {
                  resilience: 7,
                  strength: 8,
                  adaptability: 7,
                  creativity: 6,
                  openness: 9
                }
              }
            ]
          }}
        />
      </div>
    );

    return <div>{radar}</div>;
  }
}

export default ComparitiveRadarChart;

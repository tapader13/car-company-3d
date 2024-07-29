import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from 'react-simple-maps';

const MapChart = () => {
  return (
    <ComposableMap
      projection='geoAzimuthalEqualArea'
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1400,
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Geographies
        geography='/features.json'
        fill='#2C065D'
        stroke='white'
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[2.3522, 48.8566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: 'white',
          strokeWidth: 2,
          strokeLinecap: 'round',
        }}
      >
        <text x='-8' textAnchor='end' alignmentBaseline='middle' fill='white'>
          {'Paris'}
        </text>
      </Annotation>
      <Annotation
        subject={[22.3522, 48.8566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: 'white',
          strokeWidth: 2,
          strokeLinecap: 'round',
        }}
      >
        <text x='-8' textAnchor='end' alignmentBaseline='middle' fill='white'>
          {'Bangladesh'}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;

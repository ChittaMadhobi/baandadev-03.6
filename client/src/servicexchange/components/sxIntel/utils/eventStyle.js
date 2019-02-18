const K_SIZE = 40;

const placeStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: '5px solid #f44336',
  borderRadius: K_SIZE,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer'
};

const placeStyleHover = {
  ...placeStyle,
  border: '5px solid #3f51b5',
  color: 'black'
};

const placeStyleHoverExt = {
  position: 'absolute',
  width: '350',
  height: '350',
  backgroundColor: 'white',
  // left: '75',
  // top: '75',
  border: '5px solid #3f51b5',
  color: 'black'
};

export { placeStyle, placeStyleHover, placeStyleHoverExt, K_SIZE };

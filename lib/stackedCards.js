export default function(numEdges, edgeColor='#f6f6f6', edgeHeight=8, edgeStep=3) {
  let shadows = [];
  for (let i = 0; i <= numEdges; i++) {
    const x = 0,
        y = i * edgeHeight,
        spread = -i * edgeStep,
        blur = i;
    const newShadow = `${x}px ${y}px 0px ${spread}px ${edgeColor},${x}px ${y + 1}px ${blur}px ${spread}px rgba(0,0,0, 0.2)`;
    shadows = [...shadows, newShadow];
  }
  return shadows.join(',');
}

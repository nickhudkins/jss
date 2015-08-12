export default function(distance, startOpacity) {
  let shadow = [];
  const increment = 2;
  const stepSize = startOpacity /  (distance / increment);
  for (var i = 0; i <= (distance / increment); i++) {
    const newShadow = `rgba(0,0,0,${(startOpacity - i * stepSize).toFixed(4)}) ${increment * i}px ${increment * i}px`;
    shadow = [...shadow, newShadow];
  }
  return shadow.join(',');
}

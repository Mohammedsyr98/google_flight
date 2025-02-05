const DashedLine = ({ height = 25, color = "#dadce0" }) => (
  <svg
    width="2"
    height={height}
    viewBox={`0 0 2 ${height}`}
    xmlns="http://www.w3.org/2000/svg">
    <line
      x1="1"
      y1="0"
      x2="1"
      y2={height}
      stroke={color}
      strokeWidth="2"
      strokeDasharray="4 4"
    />
  </svg>
);

export default DashedLine;

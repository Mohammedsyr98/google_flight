const CircleIcon = ({ color = "#dadce0", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="6" stroke={color} strokeWidth="1.5" />
  </svg>
);

export default CircleIcon;

interface NextjsIconProps {
  size: number;
}

const NextjsIcon: React.FC<NextjsIconProps> = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 234"
      width={size}
      height={size}
    >
      <path d="M56.2 0h127.6c31 0 56.2 25.2 56.2 56.2v121.6c0 31-25.2 56.2-56.2 56.2H56.2C25.2 234 0 208.8 0 177.8V56.2C0 25.2 25.2 0 56.2 0z" />
      <linearGradient
        id="next-icon-a"
        gradientUnits="userSpaceOnUse"
        x1="979.001"
        y1="-489.022"
        x2="1101.848"
        y2="-641.283"
        gradientTransform="matrix(.4444 0 0 -.4444 -312.222 -42.889)"
      >
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0%" />
      </linearGradient>
      <path
        d="M209.4 218 85.8 58.8H62.6v110.7h18.6v-87l113.6 146.8c5.1-3.5 10-7.3 14.6-11.3z"
        fill="url(#next-icon-a)"
      />
      <linearGradient
        id="next-icon-b"
        gradientUnits="userSpaceOnUse"
        x1="1075.574"
        y1="-228.635"
        x2="1074.879"
        y2="-411.607"
        gradientTransform="matrix(.4444 0 0 -.4444 -312.222 -42.889)"
      >
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0%" />
      </linearGradient>
      <path fill="url(#next-icon-b)" d="M156.4 58.8h18.5v110.7h-18.5V58.8z" />
    </svg>
  );
};

export default NextjsIcon;

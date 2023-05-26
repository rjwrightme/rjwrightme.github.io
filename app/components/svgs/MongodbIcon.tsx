interface MongodbIconProps {
  size: number;
}

const MongodbIcon: React.FC<MongodbIconProps> = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 234"
      width={size}
      height={size}
    >
      <path
        id="Bg"
        fill="#13AA52"
        d="M56.2,0h127.6c31,0,56.2,25.2,56.2,56.2v121.6c0,31-25.2,56.2-56.2,56.2H56.2C25.2,234,0,208.8,0,177.8
	V56.2C0,25.2,25.2,0,56.2,0z"
      />
      <path
        fill="#fff"
        d="M132.6,62.9c-6.3-7.5-11.8-15.1-12.9-16.7c-0.1-0.1-0.3-0.1-0.4,0c-1.1,1.6-6.6,9.2-12.9,16.7
	c-54.3,69.3,8.6,116,8.6,116l0.5,0.4c0.5,7.2,1.6,17.6,1.6,17.6h4.7c0,0,1.2-10.3,1.6-17.6l0.5-0.4
	C124,178.9,186.9,132.2,132.6,62.9L132.6,62.9z M119.4,177.9c0,0-2.8-2.4-3.6-3.6v-0.1l3.4-75.4c0-0.2,0.4-0.2,0.4,0l3.4,75.4v0.1
	C122.3,175.5,119.4,177.9,119.4,177.9z"
      />
    </svg>
  );
};

export default MongodbIcon;

const PlusIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="20" fill="white" />
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="19.5"
        stroke="black"
        stroke-opacity="0.1"
      />
      <g clip-path="url(#clip0_12_64)">
        <path
          d="M20 14.1667V25.8333"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.1665 20H25.8332"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_12_64">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(10 10)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusIcon;

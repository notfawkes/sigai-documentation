export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="50,40 90,40 130,80 90,80" fill="#4A6FA5" />
      <polygon points="90,40 130,40 130,80 90,80" fill="#2E5C9A" />
      <path
        d="M 130,50 L 170,90 L 170,130 L 130,90 Z"
        fill="#2E5C9A"
      />
      <path
        d="M 130,90 L 170,130 L 130,130 Z"
        fill="#4FC3F7"
      />
      <text
        x="100"
        y="120"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="bold"
        fill="#2E5C9A"
        textAnchor="middle"
      >
        SIGAI
      </text>
      <text
        x="100"
        y="160"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill="#4FC3F7"
        textAnchor="middle"
      >
        TCET
      </text>
      <text
        x="100"
        y="175"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fill="#4A6FA5"
        textAnchor="middle"
      >
        Student's Chapter
      </text>
    </svg>
  );
}

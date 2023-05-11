type Props = {
  size: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

export function TwitterRounded({
  size,
  color,
  className,
  style,
}: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM24.4083 9.69151C25.3213 9.57956 26.1916 9.32901 27 8.95851C26.397 9.89276 25.6312 10.7124 24.7492 11.3694C24.757 11.568 24.7609 11.7706 24.7609 11.9731C24.7609 18.129 20.2219 25.2258 11.9188 25.2258C9.37107 25.2258 6.99765 24.4541 5 23.1347C5.35253 23.1774 5.7128 23.1987 6.07695 23.1987C8.19082 23.1987 10.1381 22.4537 11.6825 21.2036C9.70681 21.1676 8.04103 19.8202 7.4664 17.9704C7.74144 18.0251 8.02553 18.053 8.31608 18.053C8.728 18.053 9.12702 17.9984 9.50537 17.8891C7.43928 17.4626 5.88325 15.5795 5.88325 13.3219V13.2646C6.49275 13.6111 7.19006 13.823 7.92869 13.8456C6.71744 13.01 5.92069 11.584 5.92069 9.96872C5.92069 9.11577 6.14281 8.3148 6.53149 7.62445C8.75899 10.4458 12.0841 12.2983 15.8354 12.4929C15.7579 12.1517 15.7191 11.7972 15.7191 11.4321C15.7191 8.85989 17.74 6.77417 20.231 6.77417C21.53 6.77417 22.7038 7.33924 23.5251 8.24417C24.5556 8.03626 25.5202 7.64844 26.3931 7.11535C26.056 8.20286 25.3407 9.11578 24.4083 9.69151Z"
        fill={color}
      />
    </svg>
  );
}

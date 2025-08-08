type Props = {
  className?: string;
  fill?: string;
};

const Dashboard = ({ className, fill }: Props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3117 2.08301H6.68837C3.93421 2.08301 2.08337 3.85217 2.08337 6.48467V7.49967C2.08337 7.68377 2.23262 7.83301 2.41671 7.83301H17.5834C17.7675 7.83301 17.9167 7.68377 17.9167 7.49967V6.48467C17.9167 3.85217 16.0659 2.08301 13.3117 2.08301Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.08337 13.5132C2.08337 16.1473 3.93421 17.9165 6.68837 17.9165H7.28254C7.46663 17.9165 7.61587 17.7672 7.61587 17.5831V9.41732C7.61587 9.23323 7.46663 9.08398 7.28254 9.08398H2.41671C2.23262 9.08398 2.08337 9.23323 2.08337 9.41732V13.5132Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.86548 17.583C8.86548 17.7672 9.01473 17.9163 9.19881 17.9163H13.3113C16.0663 17.9163 17.9163 16.1472 17.9163 13.5138V9.41634C17.9163 9.23226 17.7671 9.08301 17.583 9.08301H9.19881C9.01473 9.08301 8.86548 9.23226 8.86548 9.41634V17.583Z"
        fill={fill}
      />
    </svg>
  );
};

export default Dashboard;

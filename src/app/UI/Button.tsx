interface ButtonInterface {
  title: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
  rounded?: string;
  backgroundColor?:string;
  color?:string;
}

const Button = (props: ButtonInterface) => {
  const { title, startIcon, endIcon, onClick ,rounded,backgroundColor,color} = props;

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2   font-semibold relative ${color} px-4 py-2 ${rounded} cursor-pointer ${backgroundColor}`}
    >
      {startIcon && <span className="text-xl">{startIcon}</span>}
      <span className="text-xs">{title}</span>
      {endIcon && <span className="text-xl">{endIcon}</span>}
     
    </button>
  );
};


export default Button;

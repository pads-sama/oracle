import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    black_900: "bg-gray-950 text-white-A700",
    red_300: "bg-red-300 shadow-sm",
    cyan_400: "bg-cyan-400 shadow-md",
    lime_800: "bg-lime-800 shadow-lg",
    red_400_01: "bg-red-400_01",
    green_600: "bg-green-600 shadow-3xl text-white-A700",
  },
  outline: {
    black_900: "border-black-900 border-[3px] border-solid text-black-900",
  },
};
const sizes = {
  lg: "h-[68px] px-[26px] text-base",
  sm: "h-[50px] px-[35px] text-xl",
  md: "h-[67px] px-[35px] text-base sm:text-lg",
  xs: "h-[46px] px-[11px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "lg",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["lg", "sm", "md", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "black_900",
    "red_300",
    "cyan_400",
    "lime_800",
    "red_400_01",
    "green_600",
  ]),
};

export { Button };

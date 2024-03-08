import { PropTypes } from "prop-types";

const sizes = {
  "3xl": "text-[35px] font-bold",
  "2xl": "text-3xl font-bold leading-[38px]",
  xl: "text-[25px] font-bold leading-8",
  "5xl": "text-2xl font-bold | sm:text-3xl | md:text-4xl | lg:text-5xl ",
  "4xl": "text-[40px] font-bold leading-[51px]",
  s: "text-[17px] font-semibold",
  md: "text-xs font-bold leading-[23px]",
  "6xl": "text-5xl | sm:text-7xl md:text-[75px] font-bold md:leading-[80px] ",
  xs: "text-[15px] font-bold",
  lg: "text-xl font-bold",
};

const Headings = ({
  children,
  className = "",
  size = "md",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-black-900 font-sourcesanspro text-5xl ${className} ${sizes[size]} `}
      {...restProps}
    >
      {children}
    </Component>
  );
};

Headings.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  as: PropTypes.string,
};

export { Headings };

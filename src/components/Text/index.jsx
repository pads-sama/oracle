import { PropTypes } from "prop-types";

const sizes = {
  xs: "text-[15px] font-normal leading-[19px]",
  lg: "text-[25px] font-normal leading-8",
  s: "text-lg font-normal leading-[30px]",
  md: "text-xl font-normal leading-[26px]",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-gray-700 font-sourcesanspro ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  as: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

export { Text };

import { propTypes } from "../../utils/types";

const Section = ({ children, className }) => {
  return <section className={`${className} py-5`}>{children}</section>;
};

Section.propTypes = {
  children: propTypes.children,
  className: propTypes.className,
};
export default Section;

import { propTypes } from "../../utils/types";

const Wrapper = ({ children, className = "" }) => {
  return (
    <section className={`max-w-[1181px] mx-auto ${className}`}>
      {children}
    </section>
  );
};

Wrapper.propTypes = {
  children: propTypes.children,
  className: propTypes.className,
};

export default Wrapper;

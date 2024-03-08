import { Headings } from "../Headings";
import { Img } from "../Img";
import { PropTypes } from "prop-types";

const TeamLists = ({ image, name, role, alt }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-9">
      <Img
        src={image}
        alt={alt}
        className="w-full object-cover rounded-[10px]"
      />
      <div className="flex flex-col items-center justify-start w-2/5 gap-1">
        <Headings size="2xl" as="h3" className="text-center">
          {name}
        </Headings>
        <p className="!text-black-900_68 text-center">{role}</p>
      </div>
    </div>
  );
};

TeamLists.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default TeamLists;

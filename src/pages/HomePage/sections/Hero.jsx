import { Button } from "../../../components/Button";
import { Img } from "../../../components/Img";
import { Text } from "../../../components/Text";
import { Headings } from "../../../components/Headings";
import Wrapper from "../../../components/Wrapper";
import Section from "../../../components/Section";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <Section className="mx-5 md:mt-8 h-auto | xl:h-[90dvh]">
      <Wrapper className="mx-auto py-5 bg-cyan-50 rounded-[2rem] grid grid-rows-1 gap-10 | lg:gap-0 lg:grid-cols-2 lg:p-10 ">
        <div className="px-5 w-[inherit] h-auto flex justify-center flex-col |  md:h-[33rem] md:text-center | lg:text-left lg:px-0">
          <Headings as="h1" size="6xl" className="mb-5 md:mx-auto">
            <span className="text-gray-950 ">Maximize your business with </span>
            <span className="text-red-400_01">us</span>
          </Headings>
          <Text
            as="p"
            size="md"
            className=" ml-[3px] !text-black-900_60 !leading-7"
          >
            Maximize your business with a variety of services and services from
            us
          </Text>
          <div className="flex flex-row flex-wrap justify-start gap-6 mt-12 w-full | md:justify-center | lg:justify-start">
            <Button
              size="md"
              className="font-bold w-full rounded-[5px] sm:max-w-[201px]"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
            <Button
              size="md"
              variant="outline"
              className="font-bold w-full rounded-[5px]  sm:max-w-[201px]"
              onClick={() => navigate("/about")}
            >
              About Us
            </Button>
          </div>
        </div>
        <div className=" w-full flex justify-end items-center | lg:h-full">
          {" "}
          <Img
            src="images/img_group_665.png"
            alt="image_one"
            className="w-full h-auto object-cover "
          />
        </div>
      </Wrapper>
    </Section>
  );
};

export default Hero;

import { NavLink } from "react-router-dom";
import { Headings } from "../../../components/Headings";
import Section from "../../../components/Section";
import Wrapper from "../../../components/Wrapper";
import teamData from "../../../lib/team.json";
import React from "react";
import TeamLists from "../../../components/TeamLists";

const Team = () => {
  return (
    <Section>
      <Wrapper>
        <div className="flex h-20 justify-between items-center px-5 border-red-400 border my-2">
          <Headings as="h2" size="5xl">
            Meet our team
          </Headings>
          <NavLink
            to="/about"
            className="text-xl font-bold text-red-400_01 tracking-wide"
          >
            View All
          </NavLink>
        </div>
        <div className="flex flex-row w-full gap-[30px]">
          {teamData.slice(0, 3).map((team) => (
            <React.Fragment key={team.id}>
              <TeamLists {...team} />
            </React.Fragment>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
};

export default Team;

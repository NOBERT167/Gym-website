import React from "react";
import Icon1 from "../../images/equipments.svg";
import Icon2 from "../../images/money.svg";
import Icon3 from "../../images/trainer.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceStyles";

function service() {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Cheap</ServicesH2>
            <ServicesP>
              We provide all the gym services at a very affordable price
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Gym Trainers</ServicesH2>
            <ServicesP>
              We have proffesiaonal gym coaches/trainers with over 30 years of
              experience who are ready to support you get your desired fitness
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Enough equpments</ServicesH2>
            <ServicesP>
              We have all the gym equipments needed in large quantity and our
              gym is spacious, therefore accomodate a large number of gym people
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
}

export default service;

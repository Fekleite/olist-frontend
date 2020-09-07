import React from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

import {
  Container,
  Achievements,
  ProfileInfo,
  Photo,
  Info,
  Insights,
  BadgesContainer,
  Gallery,
  BadgesGroup,
} from "./styles";

import profile from "../../assets/profile.svg";
import badge01 from "../../assets/badge01.svg";
import badge02 from "../../assets/badge02.svg";
import badge03 from "../../assets/badge03.svg";
import badgeLocked from "../../assets/badge-locked.svg";

import NavBar from "../../components/NavBar";
import ProgressBar from "../../components/ProgressBar";
import InsightItem from "../../components/InsightItem";
import Badges from "../../components/Badges";

function Profile() {
  const name = localStorage.getItem("@olist/username");
  return (
    <Container>
      <NavBar />

      <Achievements>
        <h2>minhas conquistas</h2>

        <ProfileInfo>
          <Photo>
            <img src={profile} alt="" />
          </Photo>
          <h3>{name}</h3>
          <Info>
            <p>Lojista Iniciante</p>
            <span>|</span>
            <p>
              <strong>210</strong> pontos
            </p>
          </Info>

          <ProgressBar />
        </ProfileInfo>
      </Achievements>

      <Insights>
        <InsightItem title="Minhas vendas" size={true}>
          <strong>+ 20%</strong> de vendas nessa <br /> semana
        </InsightItem>

        <InsightItem title="Visibilidade dos anúncios">
          <strong>1.000</strong> visitas nos meus anúncios essa semana
        </InsightItem>

        <InsightItem title="Clientes fidelizados">
          <strong>65</strong> clientes compraram com você mais de uma vez
        </InsightItem>

        <InsightItem title="Competitividade">
          Seus anúncios estão com <strong>boa competitividade</strong> nos
          marketplaces
        </InsightItem>
      </Insights>

      <BadgesContainer>
        <h2>minhas insígnias</h2>

        <Gallery>
          <span>
            <MdArrowBack size={16} color="#fff" />
          </span>
          <BadgesGroup>
            <Badges text="anunciante de qualidade">
              <img src={badge01} alt="" />
            </Badges>

            <Badges text="atendimento de primeira">
              <img src={badge02} alt="" />
            </Badges>

            <Badges text="catálogo atualizado">
              <img src={badge03} alt="" />
            </Badges>

            <Badges text="lorem ipsum dolor sit" locked={true}>
              <img src={badgeLocked} alt="" />
            </Badges>

            <Badges text="lorem ipsum dolor sit" locked={true}>
              <img src={badgeLocked} alt="" />
            </Badges>

            <Badges text="lorem ipsum dolor sit" locked={true}>
              <img src={badgeLocked} alt="" />
            </Badges>

            <Badges text="lorem ipsum dolor sit" locked={true}>
              <img src={badgeLocked} alt="" />
            </Badges>

            <Badges text="lorem ipsum dolor sit" locked={true}>
              <img src={badgeLocked} alt="" />
            </Badges>

            <Badges text="lorem ipsum dolor sit" locked={true}>
              <img src={badgeLocked} alt="" />
            </Badges>

            <Badges text="lorem ipsum dolor sit" locked={true}>
              <img src={badgeLocked} alt="" />
            </Badges>
          </BadgesGroup>
          <span>
            <MdArrowForward size={16} color="#fff" />
          </span>
        </Gallery>
      </BadgesContainer>
    </Container>
  );
}

export default Profile;

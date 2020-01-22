import React from "react";
import styles from "./Card.module.scss";
import { IOpponent } from "../../model";

const baseClass = "card";

interface CardProps {
  data: IOpponent;
}

const Card: React.FC<CardProps> = ({ data }: CardProps) => {
  return (
    <div className={styles[baseClass]}>
      <div className={styles[`${baseClass}__name`]}>{data.data.name}</div>
      <span>strength: {data.strength}</span>
      <span>{data.isWinner && <h3>WINNER</h3>}</span>
    </div>
  );
};

export default Card;

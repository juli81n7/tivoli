"use client";
import Image from "next/image";
import styles from "../styles/ArtistCard.css";
import SecondaryBtn from "./SecondaryBtn";
import LikeBtn from "./LikeBtn";
import Link from "next/link";
import PrimaryBtn from "./PrimaryBtn";

export default function ArtistCard(props) {
  const months = [
    "Januar",
    "Februar",
    "Marts",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "December",
  ];

  const date = new Date(props.time);

  const formattedDate = `${date.getDate()}. ${months[date.getMonth()]}`;

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const formattedTime = `${hours}:${minutes}`;

  return (
    <div className="artistcard">
      <Link href={`/event/` + props.slug}>
        <div className="imgcontainer">
          {props.img ? (
            <img
              src={
                "https://dmyzwmcuzrezoxseqnfh.supabase.co/storage/v1/object/public/artists/" +
                props.img +
                ".webp"
              }
              alt=""
            />
          ) : (
            <img
              src={
                "https://dmyzwmcuzrezoxseqnfh.supabase.co/storage/v1/object/public/artists/" +
                props.slug +
                ".webp"
              }
              alt=""
            />
          )}
        </div>
      </Link>
      <LikeBtn artistId={props.id}></LikeBtn>
      <Link className="artistcardinfo" href={`/event/` + props.slug}>
        <div className="flexbetween">
          <div>
            <div className={"tag " + props.tag}>{props.tag}</div>
            <h3>{props.name}</h3>
            <h4 className="shortdescription">{props.shortDescription}</h4>
          </div>
        </div>
        <div className="bottom">
          <div className="artistcardinfodetails">
            <p className="time">
              {formattedDate +
                (props.fleretider && props.fleretider.length > 0
                  ? " - Flere tider"
                  : " - kl." + formattedTime)}
            </p>

            <p className="place">{props.place}</p>
          </div>
          <PrimaryBtn text={"Læs mere"} link={"/event/" + props.slug} />
        </div>
      </Link>
    </div>
  );
}

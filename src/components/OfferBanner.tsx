import React, {useEffect} from "react";
import {Button} from "@nextui-org/react";

export const OfferBanner = ({text, action: { label, url }}) => {

  useEffect(() => {
    document.body.setAttribute('style', "padding-top: 80px")
  },[])

  return (
    <div className={'OfferBanner animate__animated animate__fadeInDown animate__faster'}>
        <span>{text}</span>
        <Button size={'sm'} onClick={() => window.open(url)}>{label}</Button>
    </div>
  );
}
import React, {useEffect} from "react";
import {Button} from "@nextui-org/react";

export const OfferBanner = ({text, action: { label, url }}) => {

  useEffect(() => {
    document.body.setAttribute('style', "padding-top: 80px")
  },[])

  return <div className={'OfferBanner'}>
    <span>{text}</span><Button size={'md'} onClick={() => window.open(url)}>{label}</Button></div>
}
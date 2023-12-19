import React, {FC, ReactNode, useEffect} from "react";
import {Button} from "@nextui-org/react";

interface OfferBannerProps {
  text: string;
  action: {
    label: string;
    url: string;
    color?: string;
  }
  children?: ReactNode
}
export const OfferBanner: FC<OfferBannerProps> = ({text, action: { label, url, color }, children}) => {

  useEffect(() => {
    document.body.setAttribute('style', "padding-top: 80px")
  },[])

  return (
    <div className={'OfferBanner animate__animated animate__fadeInDown animate__faster'}>
        {children}
        <span style={{fontWeight: 'bold'}}>{text}</span>
        <Button color={color as any} size={'sm'} onClick={() => window.open(url)}>{label}</Button>
    </div>
  );
}
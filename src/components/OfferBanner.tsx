import React, {FC, ReactNode, useEffect} from "react";
import {Button} from "@nextui-org/react";

interface OfferBannerProps {
  text: string;
  actions: {
    label: string;
    url: string;
    color?: string;
    customStyles?: any;
  }[];
  children?: ReactNode
}
export const OfferBanner: FC<OfferBannerProps> = ({text, actions, children}) => {

  useEffect(() => {
    document.body.setAttribute('style', "padding-top: 80px")
  },[])

  return (
    <div className={'OfferBanner animate__animated animate__fadeInDown animate__faster'}>
        {children}
        <span style={{fontWeight: 'bold'}}>{text}</span>
        {actions.map(({ label, url, color, customStyles }) => (
          <Button color={color as any} size={'sm'} onClick={() => window.open(url)} style={customStyles}>{label}</Button>
        ))}
    </div>
  );
}
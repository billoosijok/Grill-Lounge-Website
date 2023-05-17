import React from "react";

export const LinkItem = ({label, url, analyticsId}) => {
  return <a href={url} target="_blank" onClick={() => global.gtag('event', analyticsId)}>{label}</a>
}
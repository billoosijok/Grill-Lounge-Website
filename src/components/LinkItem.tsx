import React, {useCallback} from "react";

interface LinkItemProps {
  label: string;
  url?: string;
  analyticsId: string;
  onClick?: () => void;
}

export const LinkItem = ({label, url, analyticsId, onClick}: LinkItemProps) => {
  const onLinkClick = useCallback((event) => {
    global.gtag('event', analyticsId);
    if (onClick) {
      event.preventDefault();
      onClick()
    }
  }, [analyticsId, onClick]);
  return <a href={url} target="_blank" onClick={onLinkClick}>{label}</a>
}
import React, {useCallback} from "react";

interface LinkItemProps {
  label: string;
  url?: string
  analyticsId?: string
  onClick?: () => void
}
export const LinkItem = ({label, url, analyticsId, onClick}: LinkItemProps) => {
  const onLinkClick = useCallback((e) => {
    if (analyticsId) {
      global.gtag('event', analyticsId)
    }

    onClick?.();
  }, [analyticsId, onClick])

  return <a href={url} rel="noreferrer" target="_blank" onClick={onLinkClick}>{label}</a>
}
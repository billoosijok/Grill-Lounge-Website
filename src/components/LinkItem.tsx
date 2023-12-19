import React, {ReactNode, useCallback} from "react";

interface LinkItemProps {
  label: string;
  url?: string;
  analyticsId: string;
  onClick?: () => void;
  customStyles?: any;
  badge?: boolean | ReactNode;
}

export const LinkItem = ({label, url, analyticsId, onClick, customStyles, badge}: LinkItemProps) => {
  const onLinkClick = useCallback((event) => {
    global.gtag('event', analyticsId);
    if (onClick) {
      event.preventDefault();
      onClick()
    }
  }, [analyticsId, onClick]);
  return (
    <a
      href={url}
      className={'LinkItem'}
      target="_blank"
      onClick={onLinkClick}
      style={{...customStyles} as any}>
      {label}
      <div className={`badge ${badge === true ? 'display' : badge ? 'custom' : ''}`}>
        {badge !== true ? badge : null}
      </div>
    </a>
  );
}
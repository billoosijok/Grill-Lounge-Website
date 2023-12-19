import React, {useEffect, useState} from "react";
import {
  Modal,
  Text,
  ModalProps,
} from "@nextui-org/react";
import {useLanguage} from "../hooks/useLanguage";
import {useLocation} from "react-router-dom";

declare global {
  interface Date {
    formatPlease: () => string;
  }
}



export const ReservationModal = (props: ModalProps) => {
  const {lang} = useLanguage();
  const {pathname} = useLocation();
  const [preselected, setPreselected] = useState<string>();

  useEffect(() => {
    const match = pathname.match(/\/reservez\/(\d{2})-(\d{2})-(\d{4})/);
    if (match) {
      const [,day, month, year] = match;
      setPreselected(`${year}-${month}-${day}`);
    };
  }, [pathname]);

  return (
    <div style={{padding: 20, position:'relative'}}>
    <Modal {...props}
           fullScreen
           closeButton
           aria-labelledby="modal-title"
           css={{bottom: 'env(safe-area-inset-bottom)'}}>
        <Modal.Header
          css={{ position: "relative" }}
          className="flex flex-row gap-1"
        >
          <Text h2 id={'modal-title'} size={24} css={{marginTop: '-20px !important'}}>{props.title}</Text>
        </Modal.Header>
        <Modal.Body style={{height: '80vh', padding: 0}}>
          <iframe
            src={`https://widget.thefork.com/${lang}/92c5df3d-9b97-4412-acdc-9ffa27e9f759?date=${preselected}`}
            style={{"width": '100%', height: '100%', border:'none', overflow:'scroll'}}
          ></iframe>
        </Modal.Body>
    </Modal>
    </div>
  );
};

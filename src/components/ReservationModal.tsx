import React from "react";
import {
  Modal,
  Text,
  ModalProps,
} from "@nextui-org/react";
import {useLanguage} from "../hooks/useLanguage";

declare global {
  interface Date {
    formatPlease: () => string;
  }
}

const GAP_AROUND_MODAL = 40;
export const ReservationModal = (props: ModalProps) => {
  const {lang} = useLanguage();

  return (
    <div style={{padding: 20, position:'relative'}}>
    <Modal {...props} css={{height: `calc(100vh - ${GAP_AROUND_MODAL}px)`, width: `calc(100vw - ${GAP_AROUND_MODAL}px)`, margin: `${GAP_AROUND_MODAL/2}px auto 0`}} fullScreen closeButton aria-labelledby="modal-title">
        <Modal.Header
          css={{ position: "relative" }}
          className="flex flex-row gap-1"
        >
          <Text h2 id={'modal-title'} size={24} css={{marginTop: '-20px !important'}}>{props.title}</Text>
        </Modal.Header>
        <Modal.Body style={{height: '80vh', padding: 0}}>
          <iframe
            src={`https://widget.thefork.com/${lang}/92c5df3d-9b97-4412-acdc-9ffa27e9f759?`}
            style={{"width": '100%', height: '100%', border:'none', overflow:'scroll'}}
          ></iframe>
        </Modal.Body>
    </Modal>
    </div>
  );
};

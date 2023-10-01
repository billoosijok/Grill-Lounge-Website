import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  ModalProps,
  Input,
  InputProps,
  Loading,
  Text,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import dayjs from "dayjs/locale/fr";

declare global {
  interface Date {
    formatPlease: () => string;
  }
}

Date.prototype.formatPlease = function () {
  const currentMonth = this.getMonth() + 1;
  const formattedMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth;
  return `${this.getFullYear()}-${formattedMonth}-${this.getDate()}`;
};

const listTheUpcoming10Days = () => {
  const now = dayjs();

  return new Array(10).map((_, i) => now.add(i, "day").format("D MMMM, YYYY"));
};

export const ReservationModal = (props: ModalProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [status, setStatus] = useState<{
    status: "error" | "loading" | "submitted" | "alreadyReserved";
    message?: string;
  }>();

  useEffect(() => {
    const alreadyReserved = JSON.parse(localStorage.getItem("grill") as any);

    if (alreadyReserved) {
      setStatus({
        status: "alreadyReserved",
        message: "Nous avons deja reçu votre résérvation",
      });
    }
  }, []);

  const sendReservationRequest = handleSubmit((data) => {
    const { people, tel, time, date } = data;
    const url = `https://us-central1-grill-lounge.cloudfunctions.net/sendReservationEmail?tel=${tel}&people=${people}&date=${date}&time=${time}&to=b.sejouk@gmail.com`;
    setStatus({ status: "loading" });

    fetch(url)
      .then(() => {
        localStorage.setItem("grill", JSON.stringify(data));
        setStatus({
          status: "submitted",
          message: "Nous avons bien reçu votre demande de résérvation",
        });
      })
      .catch(() => {
        setStatus({
          status: "error",
          message: "Erreur",
        });
      });
  });

  const fieldErrors = (field): Partial<InputProps> => {
    const error = errors[field];

    const messages = {
      required: "Ce champ est obligatoire.",
    };
    if (error) {
      return {
        status: "error",
        helperText:
          messages[error.type as string] ||
          "Veuillez valider ce champ s'il vous plaît",
        helperColor: "error",
      };
    }
    return {};
  };

  return (
    <Modal {...props}>
      <form onSubmit={sendReservationRequest}>
        <Modal.Header
          css={{ position: "relative" }}
          className="flex flex-row gap-1"
        >
          Modal Title
          <Button
            ghost
            css={{
              minWidth: "50px !important",
              border: "none",
              position: "absolute",
              right: 10,
            }}
            size={"xs"}
          >
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          {status?.status === "loading" ? (
            <div
              style={{
                padding: "80px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Loading size={"md"} />
            </div>
          ) : status?.status === "error" ? (
            <Text color={"error"}>Une erreur s'est produit</Text>
          ) : status?.status === "submitted" ? (
            <span>Nous avons bien reçu votre demande de résérvation</span>
          ) : status?.status === "alreadyReserved" ? (
            <span>Nous avons deja reçu votre résérvation</span>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 30,
                paddingBottom: 10,
              }}
            >
              <Input
                {...register("nom", { required: true })}
                {...fieldErrors("nom")}
                aria-label={"Nom de résérvation"}
                placeholder={"Nom de résérvation *"}
              />
              <Input
                type={"tel"}
                {...register("tel", {
                  required: true,
                  pattern:
                    /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                })}
                {...fieldErrors("tel")}
                aria-label={"Numéro de téléphone"}
                placeholder={"Numéro de téléphone *"}
              />
              <Input
                type={"date"}
                min={new Date().formatPlease()}
                {...register("date", { required: true, valueAsDate: true })}
                {...fieldErrors("date")}
                aria-label={"Date de résérvation"}
                placeholder={"Date de résérvation *"}
              />
              <Input
                type={"time"}
                min={"9:00"}
                max={"22:00"}
                {...register("time", { required: true })}
                {...fieldErrors("time")}
                aria-label={"À quelle heur?"}
                placeholder={"À quelle heur? *"}
              />
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button
            color="secondary"
            disabled={status?.status === "loading"}
            size={"sm"}
            onPress={props.onClose}
          >
            Close
          </Button>
          <Button type={"submit"} color="primary" size={"sm"}>
            Action
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

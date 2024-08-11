import { Html } from "@react-email/components";
import * as React from "react";

type DoctorEmailProps = {
  name: string;
  surname: string;
  telephone: string;
  couponCode: string;
};

export default function DoctorEmail({
  name,
  surname,
  telephone,
  couponCode,
}: DoctorEmailProps) {
  return (
    <Html>
      <body
        style={{
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.6",
          color: "#333",
          margin: "20px",
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <h1>Kıymetli Doktorumuz</h1>
        <p>Hasta bilgileri aşağıda belirtilmiştir</p>
        <p>
          <strong>Hasta Adı:</strong> {name}
        </p>
        <p>
          <strong>Hasta Soyadı:</strong> {surname}
        </p>
        <p>
          <strong>Hasta Telefon Numarası:</strong> {telephone}
        </p>
        <p>
          <strong>Aracı Bilgisi:</strong> {couponCode}
        </p>
        <p>İyi çalışmalar dileriz.</p>
        <p>Saygılarımızla,</p>
        <h2>
          <strong>Üç Beş Bana Da</strong>
        </h2>
      </body>
    </Html>
  );
}

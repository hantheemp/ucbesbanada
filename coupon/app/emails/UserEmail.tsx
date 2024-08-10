import { Button, Html } from "@react-email/components";
import * as React from "react";

type DoctorEmailProps = {
  name: string;
  surname: string;
  couponCode: string;
};

export default function DoctorEmail({
  name,
  surname,
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
        }}
      >
        <h1>Merhaba Kıymetli Doktorumuz</h1>
        <p>Hasta bilgileri aşağıda belirtilmiştir</p>
        <p>
          <strong>Hasta Adı:</strong> {name}
        </p>
        <p>
          <strong>Hasta Soyadı:</strong> {surname}
        </p>
        <p>
          <strong>Aracı Bilgisi:</strong> {couponCode}
        </p>
        <p>İyi çalışmalar dileriz.</p>
        <p>Saygılarımızla,</p>
        <p>Üç Beş Bana Da</p>
      </body>
    </Html>
  );
}

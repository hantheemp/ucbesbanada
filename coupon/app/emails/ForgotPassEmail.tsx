import { Html } from "@react-email/components";
import * as React from "react";

type ForgotPassTypes = {
  email: string;
};

export default function ForgotPassEmail({ email }: ForgotPassTypes) {
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
        <h1>Kıymetli Kullanıcımız</h1>
        <p>Aşağıdaki linke tıklayarak yeni bir parola oluşturabilirsiniz.</p>
        <a href={`www.ucbesbanada.com/tr/reset/${email}`}>Sıfırla</a>
        <p>Saygılarımızla,</p>
        <h2>
          <strong>Üç Beş Bana Da</strong>
        </h2>
      </body>
    </Html>
  );
}
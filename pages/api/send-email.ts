import nodemailer from "nodemailer";

const getTemplate = ({
  name,
  companyName,
  email,
  contact,
  expectedDate,
  inquiry,
}) => {
  return `
  담당자명: ${name}
  회사명: ${companyName}
  메일주소: ${email}
  연락처: ${contact}
  예상날짜: ${expectedDate.substr(0, 10)}

  문의내용: ${inquiry}
  `;
};

export default function handler(req, res) {
  const { name, companyName, email, contact, expectedDate, inquiry } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.naver.com", //SMTP 서버 주소
    port: "587",
    secure: false,
    auth: {
      user: "nodazidesign", //메일서버 계정
      pass: "navRptkd@7039!", //메일서버 비번
    },
  });

  const mailOptions = {
    from: "nodazidesign@naver.com", //보내는 사람 주소
    to: "nodazidesign@naver.com ", //받는 사람 주소
    subject: `[문의]${name}(${companyName})님의 요청입니다.`, //제목
    text: getTemplate({
      name,
      companyName,
      email,
      contact,
      expectedDate,
      inquiry,
    }), //본문
  };

  //전송 시작!
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      //에러
      console.log(error);
    }
    //전송 완료
    console.log(info);
    transporter.close();
  });
  res.status(200).json({ message: "success" });
}

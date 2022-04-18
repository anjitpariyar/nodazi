import nodemailer from "nodemailer";

const smtpServerURL = "email SMTP 서버 주소";
const authUser = "email 계정 아이디 또는 이메일";
const authPass = "email 계정 비밀번호";
const fromEmail = "보내는 사람 이메일 주소";

export default function handler(req, res) {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    host: smtpServerURL, //SMTP 서버 주소
    secure: true, //보안 서버 사용 false로 적용시 port 옵션 추가 필요
    auth: {
      user: authUser, //메일서버 계정
      pass: authPass, //메일서버 비번
    },
  });

  const mailOptions = {
    from: fromEmail, //보내는 사람 주소
    to: "novelview9@gmail.com", //받는 사람 주소
    subject: "요청테스트", //제목
    text: "요청테스트", //본문
  };

  //전송 시작!
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      //에러
      console.log(error);
    }
    //전송 완료
    console.log("Finish sending email : " + info.response);
    transporter.close();
  });
  res.status(200).json({ message: "success" });
}

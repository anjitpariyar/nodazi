import styled from "styled-components";
import FormItem from "./FormItem";
import { device } from "styled/Breakpoint";
import { useState } from "react";
export default function Form() {
  const [data, setData] = useState({
    name: "",
    companyName: "",
    email: "",
    contact: "",
    requestField: "",
    expectedDate: "",
    inquiry: "",
    privacy: "",
    agree: false,
  });
  const onChange = (event: any) => {
    // console.log(name);
    if (event.target.type === "checkbox") {
      setData({ ...data, [event.target.name]: !agree });
      event.target.parentElement.classList.toggle("error", agree);
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const dateChanged = (value: any, name: string) => {
    // console.log(name, value);
    setData({ ...data, [name]: value });
  };
  const onSubmit = (event: any) => {
    event.preventDefault();
    // console.log(data);
    if (!agree) {
      console.log("error");
    } else {
      setData({
        ...data,
        name: "",
        companyName: "",
        email: "",
        contact: "",
        requestField: "1",
        expectedDate: "",
        inquiry: "",
        privacy: "",
        agree: false,
      });
    }
  };
  const {
    name,
    companyName,
    email,
    contact,
    requestField,
    expectedDate,
    inquiry,
    privacy,
    agree,
  } = data;

  return (
    <Section>
      <form onSubmit={onSubmit}>
        <Grid>
          <Div>
            <FormItem
              label="이름"
              type="text"
              value={name}
              onChange={onChange}
              name={"name"}
              pattern="^[a-zA-Z\s\u3131-\uD79D]+$"
            />
            <FormItem
              label="회사명"
              type="text"
              value={companyName}
              onChange={onChange}
              pattern="^[a-zA-Z\s\u3131-\uD79D]+$"
              name={"companyName"}
            />
            <FormItem
              label="이메일"
              type="text"
              value={email}
              onChange={onChange}
              name={"email"}
              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
            />
            <FormItem
              label="연락처"
              type="text"
              value={contact}
              onChange={onChange}
              name="contact"
              pattern="^[\d]{9,12}$"
            />
            <FormItem
              label="의뢰분야"
              type="select"
              options={[
                { text: "one", id: 1 },
                { text: "two", id: 2 },
                { text: "three", id: 3 },
              ]}
              value={requestField}
              onChange={onChange}
              name="requestField"
            />
            <FormItem
              label="예상날짜"
              type="date"
              value={expectedDate}
              onChange={dateChanged}
              name={"expectedDate"}
            ></FormItem>
          </Div>
          {/* line break */}
          <div>
            <FormItem
              label="문의"
              type="textarea"
              value={inquiry}
              onChange={onChange}
              name={"inquiry"}
            />
            <FormItem
              label="개인정보 <br/> 수집동의"
              type="textarea"
              value={privacy}
              onChange={onChange}
              name="privacy"
            />
            <FormItem
              text="개인정보 수집 및 이용에 동의합니다."
              type="checkbox"
              label="<span></span>"
              name={"agree"}
              onChange={onChange}
              value={agree}
            />
          </div>
        </Grid>
        <BtnCenter>
          <Button>프로젝트 의뢰하기</Button>
        </BtnCenter>
      </form>
    </Section>
  );
}

const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 100px;
  @media ${device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${device.mobileL} {
    margin-bottom: 20px;
  }
`;
const Div = styled.div`
  padding-right: 100px;
  @media ${device.tablet} {
    padding-right: 0;
  }
`;

const Section = styled.div`
  padding-bottom: 100px;
  border-bottom: 1px solid #fff;
  @media ${device.mobileL} {
    font-size: 16px;
    padding-bottom: 40px;
  }
`;
const BtnCenter = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.white};
  border: 0;
  outline: none;
  box-shadow: none;
  transition: 0.3s linear;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primaryFade};
  }
  @media ${device.mobileL} {
    font-size: 16px;
  }
`;

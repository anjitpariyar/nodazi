import styled from "styled-components";
import FormItem from "./FormItem";
import { device } from "styled/Breakpoint";
export default function Form() {
  return (
    <Section>
      <form>
        <Grid>
          <Div>
            <FormItem label="이름" type="text" />
            <FormItem label="회사명" type="text" />
            <FormItem label="이메일" type="text" />
            <FormItem label="연락처" type="text" />
            <FormItem
              label="의뢰분야"
              type="select"
              options={[
                { text: "one", id: 1 },
                { text: "two", id: 2 },
                { text: "three", id: 3 },
              ]}
            />
            <FormItem label="예상날짜" type="date">
              <FormItem
                type="select"
                options={[
                  { text: "2022", id: 2022 },
                  { text: "2023", id: 2023 },
                  { text: "2024", id: 2024 },
                ]}
                width={75}
              />
              <FormItem
                type="select"
                options={[
                  { text: "Jan", id: 1 },
                  { text: "Feb", id: 2 },
                  { text: "March", id: 3 },
                ]}
                width={75}
              />
              <FormItem
                type="select"
                options={[
                  { text: "1", id: 1 },
                  { text: "2", id: 2 },
                  { text: "3", id: 3 },
                ]}
                width={75}
              />
            </FormItem>
          </Div>
          <div>
            <FormItem label="문의" type="textarea" />
            <FormItem label="개인정보 <br/> 수집동의" type="textarea" />
            <FormItem
              text="개인정보 수집 및 이용에 동의합니다."
              type="checkbox"
              label="<span></span>"
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
`;

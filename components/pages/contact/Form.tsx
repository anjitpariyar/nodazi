import styled from "styled-components";
import FormItem from "./FormItem";
export default function Form(params) {
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
            <FormItem label="예상날짜" type="text" />
          </Div>
        </Grid>
      </form>
    </Section>
  );
}

const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;
const Div = styled.div`
  padding-right: 100px;
`;

const Section = styled.div`
  padding-bottom: 100px;
  border-bottom: 1px solid #fff;
`;

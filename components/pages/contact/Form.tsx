import styled from "styled-components";
import FormItem from "./FormItem";
export default function Form(params) {
  return (
    <Section>
      <form>
        <Grid>
          <Div>
            <FormItem />
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

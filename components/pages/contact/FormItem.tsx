import styled from "styled-components";
export default function FormItem(params) {
  return (
    <>
      <Item>
        <Label dangerouslySetInnerHTML={{ __html: "이름" }} />
        <Input type="text" value="" />
      </Item>
    </>
  );
}

const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Label = styled.label`
  margin: 0;
  width: 110px;
  font-size: 1.1em;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  box-shadow: none;
  border: none;
  border-bottom: ${({ theme }) => "1px solid " + theme.white};
  padding: 0;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.white};
`;

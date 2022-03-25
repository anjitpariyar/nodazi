import styled from "styled-components";
interface ItemProps {
  label: string;
  type: string;
  options?: any[];
}

export default function FormItem({ label, type, options }: ItemProps) {
  return (
    <>
      <Item>
        <Label dangerouslySetInnerHTML={{ __html: label }} />
        {
          {
            text: <Input type={type} />,
            select: (
              <Select>
                {options?.map(({ text, id }) => (
                  <option value={id} key={id}>
                    {text}
                  </option>
                ))}
              </Select>
            ),
          }[type]
        }
      </Item>
    </>
  );
}

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2em;
`;
const Label = styled.label`
  margin: 0;
  width: 160px;
  font-size: 1.1em;
`;
const Input = styled.input`
  width: 100%;
  height: 36px;
  background-color: transparent;
  box-shadow: none;
  border: none;
  border-bottom: ${({ theme }) => "1px solid " + theme.white};
  padding: 0;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.white};
  box-sizing: border-box;
`;

const Select = styled(Input).attrs({ as: "select" })`
  background-color: ${({ theme }) => theme.black};
  border: 1px solid ${({ theme }) => theme.white};
  padding: 0px 5px;
`;

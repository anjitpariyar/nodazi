import styled from "styled-components";
import { ReactNode } from "react";
interface ItemProps {
  label?: string;
  type: string;
  options?: any[];
  children?: ReactNode;
  width?: number;
  text?: string;
}

export default function FormItem({
  label,
  type,
  options,
  children,
  width,
  text,
}: ItemProps) {
  return (
    <>
      <Item width={width && width}>
        {label && (
          <Label dangerouslySetInnerHTML={{ __html: label }} type={type} />
        )}
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
            date: <Wrap>{children}</Wrap>,
            textarea: <Textarea />,
            checkbox: (
              <CheckboxWrap>
                <Checkbox type="checkbox" id="test1" />
                <label htmlFor="test1">{text}</label>
              </CheckboxWrap>
            ),
          }[type]
        }
      </Item>
    </>
  );
}

const Item = styled.div<{ width }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2em;
  & & {
    margin-bottom: 0em;
  }
  &:first-child {
    flex-grow: 2;
  }
  width: ${({ width }) => width && width + "px"};
`;
const Label = styled.label<{ type }>`
  margin: 0;
  font-size: 1.1em;
  max-width: 120px;
  min-width: 120px;
  width: 120px;
  align-self: ${({ type }) => type === "textarea" && "flex-start"};
  line-height: 1.6;
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
const Textarea = styled(Input).attrs({ as: "textarea" })`
  background-color: ${({ theme }) => theme.black};
  border: 1px solid ${({ theme }) => theme.white};
  padding: 14px 17px;
  height: 180px;
  resize: none;
  scrollbar-width: thin;
`;
const Wrap = styled.div`
  display: flex;
  gap: 0.9em;
  width: 100%;
`;

const CheckboxWrap = styled.div`
  width: 100%;
`;
const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  & + label {
    margin-bottom: 0;
    position: relative;
    padding-left: 2.3em;
    font-size: 0.9em;
    line-height: 1.7;
    cursor: pointer;
    user-select: none;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 20px;
      height: 20px;
      border: nones;
      background: ${({ theme }) => theme.white};
      transition: contentx 0.3s linear;
      font-size: 1.5em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &:checked + label:before {
    content: "✅";
    background-color: transparent;
  }
`;

import styled from "styled-components";
import { device } from "styled/Breakpoint";
import { ReactNode } from "react";
interface ItemProps {
  label?: string;
  type: string;
  options?: any[];
  children?: ReactNode;
  width?: number;
  text?: string;
  value?: any;
  name?: string;
  onChange?: (event: any) => void;
}

export default function FormItem({
  label,
  type,
  options,
  width,
  text,
  onChange,
  value,
  name,
}: ItemProps) {
  return (
    <>
      <Item width={width && width} type={type}>
        {label && (
          <Label dangerouslySetInnerHTML={{ __html: label }} type={type} />
        )}
        {
          {
            text: (
              <Input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
              />
            ),
            select: (
              <Select name={name} value={value} onChange={onChange}>
                {options?.map(({ text, id }) => (
                  <option value={id} key={id}>
                    {text}
                  </option>
                ))}
              </Select>
            ),
            date: (
              <Input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
              />
            ),
            textarea: (
              <Textarea name={name} value={value} onChange={onChange} />
            ),
            checkbox: (
              <CheckboxWrap>
                <Checkbox
                  type="checkbox"
                  id="test1"
                  checked={value}
                  onClick={onChange}
                  name={name}
                />
                <label htmlFor="test1">{text}</label>
              </CheckboxWrap>
            ),
          }[type]
        }
      </Item>
    </>
  );
}

const Item = styled.div<{ width; type }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2em;
  @media ${device.mobileL} {
    flex-wrap: ${({ type }) => type === "textarea" && "wrap"};
  }
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
  @media ${device.mobileL} {
    width: ${({ type }) => type === "textarea" && "100%"};
    max-width: ${({ type }) => type === "textarea" && "100%"};
    margin-bottom: ${({ type }) => type === "textarea" && "1em"};
    br {
      display: none;
    }
  }
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

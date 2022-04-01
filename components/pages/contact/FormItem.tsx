import styled from "styled-components";
import { device } from "styled/Breakpoint";
import { ReactNode } from "react";
// import DatePicker from "react-date-picker";
import DatePicker from "react-date-picker/dist/entry.nostyle";
interface ItemProps {
  label?: string;
  type: string;
  options?: any[];
  children?: ReactNode;
  width?: number;
  text?: string;
  value?: any;
  name?: string;
  pattern?: string;
  onChange?: (event: any, name?: string, value?: any) => void;
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
  pattern,
}: ItemProps) {
  const Change = (event: any) => {
    onChange(event);
    const re = new RegExp(event.target.pattern, "i");
    const valid = re.test(event?.target.value);
    event.target.parentElement.classList.toggle("error", !valid);
  };
  const todayy = new Date();
  return (
    <>
      {
        {
          text: (
            <Wrapper>
              <Item width={width && width} type={type}>
                {label && (
                  <Label
                    dangerouslySetInnerHTML={{ __html: label }}
                    type={type}
                  />
                )}
                <Input
                  type={type}
                  name={name}
                  value={value}
                  onChange={Change}
                  required
                  pattern={pattern}
                />
              </Item>
              <Error>Enter a valid {label}</Error>
            </Wrapper>
          ),
          select: (
            <Wrapper>
              <Item width={width && width} type={type}>
                {label && (
                  <Label
                    dangerouslySetInnerHTML={{ __html: label }}
                    type={type}
                  />
                )}
                <Select name={name} value={value} onChange={onChange} required>
                  {options?.map(({ text, id, index }) => (
                    <option value={id} key={id}>
                      {text}
                    </option>
                  ))}
                </Select>
              </Item>
            </Wrapper>
          ),
          date: (
            <Wrapper>
              <Item width={width && width} type={type}>
                {label && (
                  <Label
                    dangerouslySetInnerHTML={{ __html: label }}
                    type={type}
                  />
                )}
                {/* <Input
                  type={type}
                  name={name}
                  value={value}
                  onChange={onChange}
                  required
                 
                /> */}
                <DatePicker
                  value={value}
                  name={name}
                  onChange={(value) => onChange(value, name)}
                  minDate={todayy}
                  required
                  dayPlaceholder="dd"
                  monthPlaceholder="mm"
                  yearPlaceholder="yy"
                />
              </Item>
            </Wrapper>
          ),
          textarea: (
            <Wrapper>
              <Item width={width && width} type={type}>
                {label && (
                  <Label
                    dangerouslySetInnerHTML={{ __html: label }}
                    type={type}
                  />
                )}
                <Textarea
                  name={name}
                  value={value}
                  onChange={onChange}
                  required
                />
              </Item>
            </Wrapper>
          ),
          checkbox: (
            <Wrapper>
              <Item width={width && width} type={type}>
                {label && (
                  <Label
                    dangerouslySetInnerHTML={{ __html: label }}
                    type={type}
                  />
                )}
                <CheckboxWrap>
                  <Checkbox
                    type="checkbox"
                    id="test1"
                    checked={value}
                    onChange={onChange}
                    name={name}
                    required
                  />
                  <label htmlFor="test1">{text}</label>
                </CheckboxWrap>
                <Error>You need to check on above agreement</Error>
              </Item>
            </Wrapper>
          ),
        }[type]
      }
    </>
  );
}
const Error = styled.div`
  font-size: 14px;
  color: red;
  position: absolute;
  top: 46px;
  left: 120px;
  display: none;
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
  &.error {
    & + ${Error} {
      display: block;
    }
    ${Input} {
      border-color: red;
      color: red;
    }
  }
  .react-date-picker {
    width: 100%;
    .react-date-picker__inputGroup {
      height: 36px;
      border-color: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.white};
      .react-date-picker__inputGroup__input {
        color: ${({ theme }) => theme.white};
      }
      input {
        pointer-events: none;
      }
    }
    .react-date-picker__clear-button {
      display: none;
    }
    .react-date-picker__button {
      svg {
        stroke: ${({ theme }) => theme.white};
      }
    }
  }
  .react-calendar {
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
    .react-calendar__navigation button,
    .react-calendar__month-view__days__day:not(.react-calendar__month-view__days__day--neighboringMonth) {
      color: ${({ theme }) => theme.white};
      /* background-color: transparent; */
      &:hover,
      &:focus {
        background-color: #e6e6e654;
      }
    }
    .react-calendar__navigation__arrow {
      background-color: #e6e6e654;
    }
    .react-calendar__tile--now {
      background-color: ${({ theme }) => theme.primary};
    }
    .react-calendar__tile:disabled {
      color: ${({ theme }) => theme.grey01};
    }
  }
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
const CheckboxWrap = styled.div`
  width: 100%;
  &.error {
    & + ${Error} {
      display: block;
    }
    ${Checkbox} {
      & + label:before {
        border: 1px solid red;
      }
    }
  }
`;
const Wrapper = styled.div`
  position: relative;
`;

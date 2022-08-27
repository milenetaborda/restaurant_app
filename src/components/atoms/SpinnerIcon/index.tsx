import { colorByThemeProps } from "./colorByThemeProp";
import * as S from "./styles";

interface ISpinnerIconProps {
  themeColor?: "primary" | "white" | "dark";
}

export const SpinnerIcon = ({ themeColor = "primary" }: ISpinnerIconProps) => {
  const color = colorByThemeProps(themeColor);

  return (
    <S.SpinnerContainer
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_172)">
        <path
          d="M15.0408 22.6416C12.8884 23.0534 10.6654 22.7062 8.75063 21.6592C6.83581 20.6123 5.34762 18.9302 4.53962 16.8997C3.73163 14.8693 3.65382 12.616 4.31946 10.5238C4.9851 8.43161 6.353 6.62999 8.19009 5.42592C10.0272 4.22184 12.2198 3.68981 14.3943 3.92047C16.5689 4.15112 18.5908 5.1302 20.1156 6.69088C21.6404 8.25155 22.5737 10.2973 22.7565 12.4794"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_172">
          <rect width="25.0212" height="25.3023" fill="white" />
        </clipPath>
      </defs>
    </S.SpinnerContainer>
  );
};

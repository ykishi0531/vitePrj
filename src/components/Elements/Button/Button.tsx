import { Button as MUIButton, ButtonProps } from '@mui/material';

export const Button = (props: ButtonProps) => {
  const { children, ...buttonProps } = props;
  return <MUIButton {...buttonProps}>{children}</MUIButton>;
};

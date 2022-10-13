import { Button, ButtonProps } from '@mui/material';
import { Link, LinkProps } from 'react-router-dom';

export const LinkButton = (props: ButtonProps & LinkProps) => {
  const { children, ref, ...buttonProps } = props;
  return (
    <Button component={Link} {...buttonProps}>
      {children}
    </Button>
  );
};

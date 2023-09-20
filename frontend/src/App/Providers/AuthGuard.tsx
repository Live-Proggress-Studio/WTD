import { IGuardProps } from './types/IGuardProps';

const AuthGuard = ({ children }: IGuardProps) => {
  // const isAuthorized = useAppSelector(selectIsAuthorized)

  // if (isAuthorized) return <Navigate to="/" />

  return children;
};

export { AuthGuard };

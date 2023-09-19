import { Loading } from '@/Components';
import { ElementType, Suspense } from 'react';
// import { useTranslation } from 'react-i18next';

export const Loadable = (Component: ElementType) => (props: object) => {
  // const { t, i18n } = useTranslation();

  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

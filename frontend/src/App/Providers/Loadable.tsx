import { Loading } from '@/Components';
import { ElementType, Suspense } from 'react';


export const Loadable = (Component: ElementType) => (props: object) => {    
      return (
        <Suspense
          fallback={
              <Loading />
          }
        >
          <Component {...props} />
        </Suspense>
      );
};


import { CanActivateFn } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  // const role = route.data?.role;
  // if(role == 'ADMIN') {
  //   return true;
  // }
  // else {
  //   return false
  // }
  return true;
};

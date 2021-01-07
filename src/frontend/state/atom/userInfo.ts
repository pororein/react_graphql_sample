import { atom } from 'recoil';
import type { User } from '../../types/User';
import { SystemRole } from '../../types/SystemRole'

export default atom<User>({
  key: 'userInfoState',
  default: {
    _id: '',
    firstName: '',
    lastName: '',
    role: SystemRole.USER,
  }
})
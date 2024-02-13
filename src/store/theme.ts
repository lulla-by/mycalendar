import { atom } from 'recoil';

export interface IContentTypes {
  name: string;
}

//recoil state 생성
export const themeState = atom<IContentTypes>({
  key: 'theme',
  default: {
    name: 'forest',
  },
});

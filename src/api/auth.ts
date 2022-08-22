import { http } from './index';

export interface IPlan {
  price: string;
}

export async function getPlansList(): Promise<IPlan[]> {
  const response = await http<IPlan[]>({
    method: 'GET',
    url: 'pricing/plan/account/',
  });

  return response;
}

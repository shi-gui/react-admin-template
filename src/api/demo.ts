import { get } from '@/request';
import { PageParams, PageList } from '@/api/types';

export interface TodayParams extends PageParams {
  startTime: string;
  endTime: string;
}
export interface TodayRes {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
}

export default {
  getTodayPage: (params: TodayParams) =>
    get<PageList<TodayRes>>('/today/page', params)
};

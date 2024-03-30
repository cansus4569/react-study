import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPost = () => {
//   const postId = queryData.queryKey[1];
  return axios.get(`http://localhost:3004/posts`);
};

export const usePostQuery = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () =>fetchPost(),
    retry: 1,
    select: (data) => {
      return data.data;
    },
  });
};

/*
  // 컴포넌트가 마운트 될 때, useQuery 는 실행이된다...
//   const { isLoading, data, isError, error, refetch } = useQuery({
    // queryKey: ['posts', 1], // unique key for the query
    // queryFn: () => {
    //     return axios.get('http://localhost:3004/posts');
    // }
    // queryFn: fetchPost,
    // retry: 1, // default 3
    // select: (data) => { // response 데이터 선택
    //   return data.data;
    // },
    // enabled: false, // default true
    
    // ** gcTime : 캐시 데이터(inactive 상태)가 삭제되는 시간(ms) **
    // * garbage collection time
    // * (구버전) cacheTime
    // * Default : 5분
    // * 참고 : gcTime은 stableTime보다 커야한다.
    // gcTime: 5000,
    
    // ** staleTime : 캐시 데이터가 stale 상태가 되는 시간(ms)
    // * Default : 0
    // * fresh 상태일때는 API 호출이 일어나지 않는다. (즉, API 호출 통제)
    // * fresh 생타일때는 캐시 데이터를 가져온다.
    // * Usage : 데이터 잦은 변화가 없는 곳에 사용하면 좋다.
    // * ex) 카테고리 등...
    // staleTime: 5000, // fresh 상태 유지 시간

    // refetchInterval: 3000, // refetch 간격 (ms). 3초마다 API 호출
    
    // ** 컴포넌트를 다시 들어갈 때에 API 호출 안해주고 싶을 때 (false 설정)
    // * Default : true
    // refetchOnMount: false,

    // refetchOnWindowFocus: true, // window focus 되었을 때 API 호출
  });
  */

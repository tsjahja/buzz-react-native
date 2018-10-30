import React from 'react';
import 'url-search-params-polyfill';

import { get, post } from '../api/apiHelper';


export const getBuzzList = (companyIds) => {
  var searchParams = new URLSearchParams();
  for (let companyId of companyIds) {
    searchParams.append('companyIds', companyId);
  }
  return get('/user/buzz' + '?' + searchParams);
}

export const postBuzz = (text, companyId, userEmailId, anonymous) => {
  const requestBody = {
    text: text,
    companyId: companyId,
    userEmailId: userEmailId,
    anonymous: anonymous,
  }
  return post('/user/buzz', requestBody);
}

export const likeBuzz = (buzzIds, liked) => {
  const requestBody = {
    buzzId: buzzIds,
    liked: liked,
  }
  return post('/user/buzz/like', requestBody);
}
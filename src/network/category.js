import { request } from './request';
export function getCategoryList(){
 return request({
   url:'/category'
  });
}
export function getSubcategoryList(maitKey) {
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}
export function getCategoryDetail(miniWallkey,type) {
  return request({
    url:'/subcategory/detail',
    params:{
      miniWallkey,
      type
    }
  })
}
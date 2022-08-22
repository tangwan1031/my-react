import {findSiderRouter,IRoutes} from '@/routes';

type TrouteTitle = {
    title:string,//一级标题
    subTitle?:string//二级标题
}
// 可以对路由地址进行解析，返回一个对象，对象中拥有一级与二级的标题
export const getRouteTitle = (pathname:string):TrouteTitle=>{
    // 得到一级标题当中的path部分
    const itemPath:string = '/'+pathname.split('/')[1];
    // 根据itemPath去findSiderRouter生成的数组中去查找一级路由信息
    const item:IRoutes = findSiderRouter().find((v:IRoutes)=>v.path === itemPath) as IRoutes;
    const title:string = item.title as string;//一级标题
    let subTitle:string | undefined;//二级标题
    // 判断是否有二级标题a
    if(item.children){
        const subItem:IRoutes = item.children.find((v:IRoutes)=>v.path == pathname) as IRoutes;
        subTitle = subItem.title;
    }
    // 返回结果。
    return {
        title,
        subTitle
    }
}
export default  {
  getRouteTitle
}

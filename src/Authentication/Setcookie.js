import Cookies from 'universal-cookie';

export const setcookieweb=(mytoken)=>{
    const Cookie = new Cookies();

    Cookie.set("token",mytoken,{
        maxAge: 15*60,
      });

}
package com.springday8.spring.configuration;

import com.springday8.spring.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Configuration
public class Interceptor implements HandlerInterceptor {

    @Autowired
    UserService userService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception{

        try{
            String url = request.getRequestURL().toString();
            System.out.println("Selected URL: "+url);
            if(request.getMethod().equals("OPTIONS")){
                return true;
            }
            if(url.contains("login")||url.contains("image")){
                System.out.println("Url Excluded due to Exception: "+url);
                return true;
            }
            String token = request.getHeader("token");
            String id = request.getHeader("id");
            System.out.println("Token: "+token);
            System.out.println("Id: "+id);
            if(token== null||token.equals("")){
                System.out.println("Token is null");
                throw new Exception("Please send the Token");
            }
            if(id == null || id.equals("")){
                System.out.println("userId is null");
                throw new Exception("please send the userId");
            }
            Integer userid = Integer.parseInt(id);
            userService.verifyJWTToken(token);
            if(userService.tokenValid(token, userid)){
                return true;
            }else return false;
        }catch (Exception e){
            throw new Exception(e.getMessage());
        }
//        String url = request.getRequestURL().toString();
////        System.out.println(url);
//
//        if(url.endsWith("/login")){
////            System.out.println(url);
//            return true;
//        }
//        String token = request.getHeader("token");
//        String id = request.getHeader("id");
//        Integer userId = Integer.parseInt(id);
////        System.out.println(id);
////        System.out.println(token);
//
//        if(token.equals("")){
//            throw new Exception("Token Not Found. Please send the token");
//        }
//        if(id.equals("")){
//            throw new Exception("UserId Not Found. Please send the UserId");
//        }
////        System.out.println(id);
//        if(userService.tokenValid(token,userId)){
//            return true;
//        }else{
//            return false;
//        }

    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView)throws Exception{
        HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception exception)throws Exception{
        HandlerInterceptor.super.afterCompletion(request, response, handler, exception);
    }
}

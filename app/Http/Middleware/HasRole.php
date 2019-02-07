<?php

namespace App\Http\Middleware;

use App\API_Response;
use App\User;
use Closure;
use Illuminate\Support\Facades\Auth;

class HasRole{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */


    public function handle($request, Closure $next, $field = null){

        $checkRoles = ["guest"];
        if($field != null && !empty($field)):
            $arrRoles = explode("-",$field);
            if(isset($arrRoles) && !empty($arrRoles)):
                $checkRoles = [];
                foreach($arrRoles as $role):
                    $role = trim($role);
                    if(strlen($role) > 0) array_push($checkRoles, $role);
                endforeach;
                $checkRoles = array_unique($checkRoles);
            endif;
        endif;


        $canAccess = false;
        $newResponse = new API_Response;

            if(Auth()->check()):
                $user = Auth::user();
                    if(in_array(strtolower($user->role),$checkRoles)):
                        $canAccess = true;
                    else:
                        $newResponse->setNeedCheckAuth(true);
                        if($user->isBlock == true):
                            Auth::logout();
                            $newResponse->setContent("You are blocked by admin...");
                        else:
                            //Auth::logout();
                            $newResponse->setContent("Permission denied...");
                        endif;
                    endif;
            else:
                if(in_array("guest",$checkRoles) && Auth()->guest()):
                    $canAccess = true;
                else:
                    $newResponse->setContent("You are blocked this is for guest access only...");
                endif;
            endif;


        if($canAccess):
            return $next($request);
        else:
            return response($newResponse->getResponse());
        endif;
    }
}

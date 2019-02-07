<?php

namespace App\Http\Controllers;

use App\API_Response;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

class AccountController extends Controller{
    public function createAccount(Request $req){
        $role = $req->get("role");
        $email = $req->get("email");
        $password = $req->get("password");
        $full_name = trim($req->get("firstName").$req->get("lastName"));

        $newResponse = new API_Response;

        $customRole = null;
        switch($role):
            case "inventor":
                $customRole = "inventor";
                break;
            case "lawyer":
                $customRole = "lawyer";
                break;
            case "patent":
                $customRole = "patent";
                break;
            default:
                $customRole = null;
                break;
        endswitch;

        if(isset($customRole) && !empty($customRole)):
            $isEmailExist = (User::where('email', $email)->get()->count() > 0);

            if($isEmailExist):
                $newResponse->setContent("Mail already exist, please try another one !");
            else:
                $register_as = strtoupper($role);
                if(User::where('role', "admin")->get()->count() <= 0):
                    $register_as = "ADMIN";
                    $customRole = "admin";
                endif;

                $user = new User();
                $user->name = $full_name;
                $user->role = $customRole;
                $user->email = $email;
                $user->password = Hash::make($password);
                $is_registered = $user->saveOrFail([
                    'name' => "Anirban Sanyal",
                    'email' => 'druvisback@gmail.com',
                    'pass' => '123456'
                ]);

                if($is_registered):
                    $newResponse->setContent("Registered as ".$register_as."!");
                    $newResponse->setSuccess(true);
                else:
                    $newResponse->setContent("Not Registered !");
                endif;
            endif;


        else:
            $newResponse->setContent("Account Role is not selected...");
        endif;

        return $newResponse->getResponse();
    }

    public function login(Request $req){

        $_token = $req->get("_token");
        $email = $req->get("email");
        $password = $req->get("password");

        $newResponse = new API_Response;


            $userdata = array(
                'email'     => $email,
                'password'  => $password,
                'is_blocked' => false
            );

            // attempt to do the login
            if (Auth::attempt(['email' => $email, 'password' => $password],true)):

                $user = Auth::user();
                $user->setRememberToken($_token);


                $newResponse->setContent("Successfully Logged !");
                $newResponse->setSuccess(true);


                $user = Auth::user();
                $newResponse->PushData("full_name", $user->name);
                $newResponse->PushData("email", $user->email);
                $newResponse->PushData("role", $user->role);

                //return Redirect::intended('dashboard');
            else:
                $newResponse->setContent("Authentication Failed, please try again !");
            endif;
        return $newResponse->getResponse();
    }

    public function AuthCheck(Request $request){
        $newResponse = new API_Response;

        if(Auth::check() || Auth::viaRemember()):
            $user = Auth::user();
            $newResponse->PushData("full_name", $user->name);
            $newResponse->PushData("email", $user->email);
            $newResponse->PushData("role", $user->role);

            $newResponse->setSuccess(true);
        endif;

        return $newResponse->getResponse();
    }

    public function logout(Request $request){
        $newResponse = new API_Response;

        if(Auth::check() || Auth::viaRemember()):
            Auth::logout();
            $newResponse->setContent("Successfully logout !");
            $newResponse->setSuccess(true);
        endif;

        return $newResponse->getResponse();
    }

    public function recovery(Request $req){
        $newResponse = new API_Response;
        $email = $req->get("email");


        $credentials = ['email' => $email];
        $response = Password::sendResetLink($credentials, function (Message $message) {
            $message->subject($this->getEmailSubject());
        });

        switch ($response) {
            case Password::RESET_LINK_SENT:
                $newResponse->setContent("Successfully recovered, please check your mail !");
                $newResponse->setSuccess(true);
            case Password::INVALID_USER:
                $newResponse->setContent("Invalid User !");
        }

        return $newResponse->getResponse();
    }
}

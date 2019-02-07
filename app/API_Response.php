<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class API_Response extends Model{
    private $success = false;
    private $content = false;
    private $redirect = false;
    private $reload = false;
    private $data = false;
    private $need_checkAuth = false;

    /**
     * API_Response constructor.
     * @param bool $success
     * @param bool $content
     * @param bool $redirect
     * @param bool $reload
     */

    public function __construct(){
        $this->content = "Invalid Request !";
    }

    /**
     * @param bool $success
     */
    public function setSuccess(bool $success): void
    {
        $this->success = $success;
    }

    /**
     * @param bool $content
     */
    public function setContent($content): void
    {
        $this->content = $content;
    }

    /**
     * @param bool $redirect
     */
    public function setRedirect($redirect): void
    {
        $this->redirect = $redirect;
    }

    /**
     * @param bool $reload
     */
    public function setReload($reload): void
    {
        $this->reload = $reload;
    }

    /**
     * @param bool $need_checkAuth
     */
    public function setNeedCheckAuth(bool $need_checkAuth): void
    {
        $this->need_checkAuth = $need_checkAuth;
    }



    public function setData($data): void{
        if($this->data == false && !is_array($this->data)) $this->data = [];
        $this->data = $data;
    }

    public function PushData($key, $data): void{
        if($this->data == false && !is_array($this->data)) $this->data = [];
        $this->data = array_merge($this->data, [$key => $data]);
    }

    public function getResponse(){
        return [
            "content" => $this->content,
            "redirect" => $this->redirect,
            "success" => $this->success,
            "reload" => $this->reload,
            "data" => $this->data,
            "re-auth" => $this->need_checkAuth
        ];
    }
}

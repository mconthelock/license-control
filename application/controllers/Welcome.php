<?php

class Welcome extends MY_Controller {
    public function __construct(){
        parent::__construct();
        $this->session_expire();
    }

    public function index(){
        $this->views('home');
    }

	public function logout(){
		unset($_SESSION['user']);
		redirect('https://' . $_SERVER['HTTP_HOST'].'/form');
	}
}
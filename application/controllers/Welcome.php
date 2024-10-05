<?php

class Welcome extends MY_Controller {

    public function index(){
        $this->views('layouts/login');
    }
}
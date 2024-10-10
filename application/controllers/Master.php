<?php
class Master extends MY_Controller {

    public function index(){
        $this->views('master/index');
    }

    public function add(){
        $this->views('master/add');
    }
}
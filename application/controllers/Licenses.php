<?php
class Licenses extends MY_Controller {
    public function index(){
        $this->views('licenses/index');
    }

    public function add(){
        $this->views('licenses/add');
    }
}
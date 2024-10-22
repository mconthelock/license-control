<?php
class Licenses extends MY_Controller {
    public function index(){
        $this->views('licenses/index');
    }

    public function add(){
        $this->views('licenses/add');
    }

    public function getLicenseNo(){
        $data = $this->tmp->getTemplate();
        echo json_encode($data);
    }
}
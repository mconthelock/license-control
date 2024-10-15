<?php
class Master extends MY_Controller {

    public function __construct(){
        parent::__construct();
        $this->load->model('Template_model', 'tmp');
    }

    public function index(){
        $this->views('master/index');
    }

    public function add(){
        $this->views('master/add');
    }

    public function getDocCategory(){
        $data = $this->tmp->getDocCategory();
        echo json_encode($data);
    }
}
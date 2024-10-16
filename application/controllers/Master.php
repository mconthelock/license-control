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

    public function getTemplate(){
        $data = $this->tmp->getTemplate();
        echo json_encode($data);
    }

    public function saveTemplate(){
        $templateinfo = array(
            'PREFIX'    => strtoupper($_POST['doc_prefix']),
            'DOCNAME'   => $_POST['doc_name'],
            'CATEGORY'  => $_POST['doc_type'],
            'LIFE'      => $_POST['doc_life'],
            'LIFE_TYPE' => $_POST['doc_life_unit'],
            'ALERT'     => $_POST['doc_alert'],
            'EXTENDED'  => isset($_POST['doc_extended']) ?  1 : null,
        );
        $this->tmp->saveTemplate($templateinfo);
        echo json_encode(array('status' => 'success'));
    }

    public function getDocCategory(){
        $data = $this->tmp->getDocCategory();
        echo json_encode($data);
    }
}
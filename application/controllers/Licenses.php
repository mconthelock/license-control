<?php
class Licenses extends MY_Controller {

    public function __construct(){
        parent::__construct();
        $this->load->model('License_model', 'lns');
    }

    public function index(){
        $this->views('licenses/index');
    }

    public function add(){
        $this->views('licenses/add');
    }

    public function getLicense(){
        $q = array();
        if(isset($_POST['no'])) $q['LSNO'] = $_POST['no'];
        $data = $this->lns->getLicense($q);
        echo json_encode($data);
    }

    public function getMaxLicense(){
        $q = array('LSNO' => $_POST['no']);
        $data = $this->lns->getMaxLicense($q);
        echo json_encode($data);
    }
}
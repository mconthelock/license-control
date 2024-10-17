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
        $info = array(
            'DOCNO'     => strtoupper($_POST['doc_prefix']),
            'DOCNAME'   => $_POST['doc_name'],
            'DOCCATEGORY'  => $_POST['doc_type'],
            'DOCTERM'      => $_POST['doc_life'],
            'DOCTERMUNIT'  => $_POST['doc_life_unit'],
            'DOCALERT'     => $_POST['doc_alert'],
            'DOCPIC'    => '12069',
            'DOCDIV'    => '050101', //$_POST['doc_div'],
            'DOCDEPT'   => '050601', //$_POST['doc_dept'],
            'DOCSEC'    => '050604', //$_POST['doc_sec'],
            'DOCLEVEL'  => '1', //$_POST['doc_level'],
            'EXTENDED'  => isset($_POST['doc_extended']) ?  1 : null,
            'CREATEBY'  => '12069'
        );
        $id = $this->tmp->saveTemplate($info);

        if(isset($_POST['prop'])){
            $prop = array();
            foreach($_POST['prop'] as $key => $val){
                $prop[] = array(
                    'COL_DOC' => $id[0]->DOCID,
                    'COL_NAME' => $val,
                    'COL_TYPE' => $_POST['proptype'][$key],
                );
            }
            $this->tmp->saveTemplateProp($prop);
        }
        echo json_encode(array('status' => 'success'));
    }

    public function getDocCategory(){
        $data = $this->tmp->getDocCategory();
        echo json_encode($data);
    }
}
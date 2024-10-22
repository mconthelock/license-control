<?php
class Master extends MY_Controller {

    public function __construct(){
        parent::__construct();
        $this->load->model('Template_model', 'tmp');
        $this->session_expire();
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
            'DOCNO'     => strtoupper($_POST['doc_no']),
            'DOCNAME'   => $_POST['doc_name'],
            'DOCCATEGORY'  => $_POST['doc_type'],
            'DOCTERM'      => $_POST['doc_term'],
            'DOCTERMUNIT'  => $_POST['doc_termunit'],
            'DOCALERT'     => $_POST['doc_alert'],
            'DOCPIC'    => $_SESSION['user']->SEMPNO,
            'DOCDIV'    => $_POST['ownerdiv'],
            'DOCDEPT'   => $_POST['ownerdept'],
            'DOCSEC'    => $_POST['ownersec'],
            'DOCLEVEL'  => '1',
            'EXTENDED'  => isset($_POST['doc_extended']) ?  1 : null,
            'CREATEBY'  => $_SESSION['user']->SEMPNO
        );
        $id = $this->tmp->saveTemplate($info);

        if(isset($_POST['prop'])){
            $prop = array();
            foreach($_POST['prop'] as $key => $val){
                $prop[] = array(
                    'COLDOC' => $id[0]->DOCID,
                    'COLNAME' => $val,
                    'COLTYPE' => $_POST['proptype'][$key],
                );
            }
            $this->tmp->saveTemplateProp($prop);
        }

        $empno = array();
        foreach($_POST['empno'] as $key => $val){
            $empno[]  = array(
                'ALTDOC' => $id[0]->DOCID,
                'ALTEMP' => $val,
            );
        }
        $this->tmp->saveTemplateEmp($empno);
        echo json_encode(array('status' => 'success'));
    }

    public function getTemplateProp(){
        $q = array();
        if(isset($_POST['docid'])) $q['COLDOC'] = $_POST['docid'];
        $data = $this->tmp->getTemplateProp($q);
        echo json_encode($data);
    }

    public function getDocCategory(){
        $data = $this->tmp->getDocCategory();
        echo json_encode($data);
    }
}
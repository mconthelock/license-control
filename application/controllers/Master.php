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

    public function edit($id){
        $this->views('master/edit');
    }

    public function getTemplate(){
        $q = array();
        if(isset($_POST['id'])) $q['DOCID'] = $_POST['id'];
        if(isset($_POST['type'])) $q['DOCCATEGORY'] = $_POST['type'];
        $data = $this->tmp->getTemplate($q);
        echo json_encode($data);
    }

    public function getTemplateProp(){
        $q = array();
        if(isset($_POST['docid'])) $q['COLDOC'] = $_POST['docid'];
        $data = $this->tmp->getTemplateProp($q);
        echo json_encode($data);
    }

    public function getTemplateOption(){
        $q = array();
        if(isset($_POST['docid'])) $q['COLDOC'] = $_POST['docid'];
        $data = $this->tmp->getTemplateOption($q);
        echo json_encode($data);
    }

    public function getTemplateMember(){
        $q = array();
        if(isset($_POST['docid'])) $q['ALTDOC'] = $_POST['docid'];
        $data = $this->tmp->getTemplateAlert($q);
        echo json_encode($data);
    }

    public function getDocCategory(){
        $data = $this->tmp->getDocCategory();
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
        );
        if(isset($_POST['doc_id'])){
            $info['DOCID']      = $_POST['doc_id'];
            $info['UPDATEBY']   = $_SESSION['user']->SEMPNO;
        }else{
            $info['CREATEBY']   = $_SESSION['user']->SEMPNO;
        }
        $id = $this->tmp->saveTemplate($info);

        //Delete prop and option if update function
        if(isset($_POST['doc_id'])){
            $this->tmp->deleteTemplateProp(array('COLDOC' => $id[0]->DOCID));
            $this->tmp->deleteTemplateOptionByDoc(array('COLDOC' => $id[0]->DOCID));
            $this->tmp->deleteTemplateEmp(array('ALTDOC' => $id[0]->DOCID));
        }

        if(isset($_POST['prop'])){
            foreach($_POST['prop'] as $key => $val){
                $prop = array(
                    'COLDOC' => $id[0]->DOCID,
                    'COLNAME' => $val,
                    'COLTYPE' => $_POST['proptype'][$key],
                );
                $propdata = $this->tmp->saveTemplateProp($prop);
                $propid = $propdata[0]->COLID;
                if(isset($_POST['opt'][$key])){
                    $opt = array();
                    foreach($_POST['opt'][$key] as $k => $v){
                        $opt[] = array(
                            'OPTCOLUMN' => $propid,
                            'OPTVALUE' => $v,
                        );
                    }
                    $this->tmp->saveTemplateOption($opt);
                }
            }

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
}
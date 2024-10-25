<?php
class Template_model extends CI_Model {
    public function __construct(){
        parent::__construct();
        $this->db = $this->load->database('default', true);
    }

    public function getDocCategory(){
        return $this->db->get('LICENSE_CATEGORY')->result();
    }

    public function getTemplate($q = ''){
        if($q) $this->db->where($q);
        return $this->db->from('LICENSE_TEMPLATE')
            ->join('LICENSE_CATEGORY', 'CATE_ID = DOCCATEGORY')
            ->join('(SELECT SEMPNO EMPNO, SNAME EMPNAME, CSTATUS EMPSTATUS FROM AMECUSERALL)', 'EMPNO = CREATEBY')
            ->join('AMEC.PDIVISION', 'DOCDIV = SDIVCODE', 'LEFT')
            ->join('AMEC.PDEPARTMENT', 'DOCDEPT = SDEPCODE', 'LEFT')
            ->join('AMEC.PSECTION', 'DOCSEC = SSECCODE', 'LEFT')
            ->get()
            ->result();
    }

    public function saveTemplate($data){
        if(isset($data['DOCID'])){
            $this->db->where('DOCID', $data['DOCID']);
            $this->db->update('LICENSE_TEMPLATE', $data);
            return $this->db->where('DOCID', $data['DOCID'])->get('LICENSE_TEMPLATE')->result();
        }else{
            $this->db->insert('LICENSE_TEMPLATE', $data);
            $doc = $this->db->select('MAX(DOCID) DOCID')->get('LICENSE_TEMPLATE')->result();
            return $this->db->where('DOCID', $doc[0]->DOCID)->get('LICENSE_TEMPLATE')->result();
        }
    }

    public function getTemplateProp($q = ''){
        if($q) $this->db->where($q);
        return $this->db->from('LICENSE_MSTCOLUMN')
            ->order_by('COLID')
            ->get()
            ->result();
    }

    public function saveTemplateProp($data){
        $this->db->insert('LICENSE_MSTCOLUMN', $data);
        return $this->db->where('COLDOC', $data['COLDOC'])
            ->select('MAX(COLID) COLID')
            ->get('LICENSE_MSTCOLUMN')
            ->result();
    }

    public function deleteTemplateProp($q){
        return $this->db->where($q)->delete('LICENSE_MSTCOLUMN');
    }

    public function getTemplateAlert($q){
        return $this->db->where($q)
            ->from('LICENSE_MSTALERT')
            ->join('AMECUSERALL', 'SEMPNO = ALTEMP')
            ->get()
            ->result();
    }

    public function saveTemplateEmp($data){
        return $this->db->insert_batch('LICENSE_MSTALERT', $data);
    }

    public function deleteTemplateEmp($q){
        return $this->db->where($q)->delete('LICENSE_MSTALERT');
    }

    public function getTemplateOption($q = ''){
        if($q) $this->db->where($q);
        return $this->db->from('LICENSE_MSTOPTION')
            ->join('LICENSE_MSTCOLUMN', 'COLID = OPTCOLUMN')
            ->order_by('OPTID')
            ->get()
            ->result();
    }

    public function deleteTemplateOptionByDoc($q){
        $data = $this->db->where($q)->get('LICENSE_MSTCOLUMN')->result();
        foreach($data as $d){
            $this->db->where('OPTCOLUMN', $d->COLID)->delete('LICENSE_MSTOPTION');
        }
        return;
    }

    public function saveTemplateOption($data){
        return $this->db->insert_batch('LICENSE_MSTOPTION', $data);
    }
}
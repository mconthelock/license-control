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
            ->join('AMEC.PDIVISION', 'DOCDIV = SDIVCODE')
            ->join('AMEC.PDEPARTMENT', 'DOCDEPT = SDEPCODE')
            ->join('AMEC.PSECTION', 'DOCSEC = SSECCODE')
            ->get()
            ->result();
    }

    public function saveTemplate($data){
        $q = array('DOCNO' => $data['DOCNO']);
        if($this->db->get_where('LICENSE_TEMPLATE', $q)->num_rows() > 0){
            $this->db->where('DOCNO', $data['DOCNO']);
            $this->db->update('LICENSE_TEMPLATE', $data);
        }
        $this->db->insert('LICENSE_TEMPLATE', $data);
        return $this->db->where('DOCNO', $data['DOCNO'])->get('LICENSE_TEMPLATE')->result();
    }

    public function getTemplateProp($q = ''){
        if($q) $this->db->where($q);
        return $this->db->from('LICENSE_MSTCOLUMN')
            ->get()
            ->result();
    }

    public function saveTemplateProp($data){
        return $this->db->insert_batch('LICENSE_MSTCOLUMN', $data);
    }
}
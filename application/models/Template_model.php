<?php
class Template_model extends CI_Model {
    public function __construct(){
        parent::__construct();
        $this->db = $this->load->database('default', true);
    }

    public function getDocCategory(){
        return $this->db->get('DOC_CATEGORY')->result();
    }

    public function getTemplate($q = ''){
        if($q) $this->db->where($q);
        return $this->db->get('DOC_TEMPLATE')->result();
    }
    public function saveTemplate($data){
        $q = array('PREFIX' => $data['PREFIX']);
        if($this->db->get_where('DOC_TEMPLATE', $q)->num_rows() > 0){
            $this->db->where('PREFIX', $data['PREFIX']);
            return $this->db->update('DOC_TEMPLATE', $data);
        }
        return $this->db->insert('DOC_TEMPLATE', $data);
    }
}
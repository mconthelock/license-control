<?php
class Template_model extends CI_Model {
    public function __construct(){
        parent::__construct();
        $this->db = $this->load->database('default', true);
    }

    public function getDocCategory(){
        return $this->db->get('DOC_CATEGORY')->result();
    }
}
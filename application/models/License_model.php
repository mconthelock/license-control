<?php
class License_model extends CI_Model {
    public function __construct(){
        parent::__construct();
        $this->db = $this->load->database('default', true);
    }

    public function getLicense($q = ''){
        if($q) $this->db->where($q);
        return $this->db->from('LICENSE');
            ->get()
            ->result();
    }
}
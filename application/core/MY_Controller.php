<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    use Coolpraz\PhpBlade\PhpBlade;
    class MY_Controller extends CI_Controller {
        protected $views = APPPATH . 'views';
        protected $cache = APPPATH . 'cache';
        protected $blade;
        public function __construct(){
            parent::__construct();
            $this->blade = new PhpBlade($this->views, $this->cache);
        }

        public function views($view_name, $data = array()){
            echo $this->blade->view()->make($view_name, $data);
        }

        public function session_expire(){
            if(!isset($_SESSION['user'])){
                if ($this->isAjaxRequest()) {
                    echo json_encode(['status' => 'session_expired', 'url' => 'https://' . $_SERVER['HTTP_HOST'].'/form']);
                    exit;
                } else {
                    redirect('https://' . $_SERVER['HTTP_HOST'].'/form');
                    session_write_close();
                    exit;
                }
            }
        }

        private function isAjaxRequest() {
            return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';
        }
    }
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

    }

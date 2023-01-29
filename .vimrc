call plug#begin()
Plug 'itchyny/lightline.vim'
Plug 'arcticicestudio/nord-vim'
call plug#end()

" Settings
colorscheme nord
set laststatus=2
set noshowmode
let g:lightline = {
      \ 'colorscheme': 'nord',
      \ }

set tabstop=2
set shiftwidth=2
set softtabstop=2

#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

# Aliases
alias ls='exa -l'
alias find='fd'
alias grep='rg'
alias cat='bat'

# Environment variables
PATH=~/.local/bin:$PATH
PS1='[\u@\h \W]\$ '
colourfetch
# Prompt
eval "$(starship init bash)"

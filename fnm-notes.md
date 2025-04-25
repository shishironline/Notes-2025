# fnm

Install 

Linux
`curl -fsSL https://fnm.vercel.app/install | bash`

Windows
`winget install Schniz.fnm`

Completions
fnm ships its completions with the binary:

fnm completions --shell <SHELL>
Where <SHELL> can be one of the supported shells:

bash
zsh
fish
powershell
Please follow your shell instructions to install them.

Shell Setup
Environment variables need to be setup before you can start using fnm. 
This is done by evaluating the output of fnm env.

Bash
Add the following to your .bashrc profile:

eval "$(fnm env --use-on-cd --shell bash)"



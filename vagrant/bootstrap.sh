sudo apt-get update
sudo apt-get install -y \
	git \
	tree \
	python3-minimal \
    vim \
    curl \
	nginx

export PS1="\[\033[38;5;9m\]\u\[$(tput sgr0)\]\[\033[38;5;1m\]@\[$(tput sgr0)\]\[\033[38;5;9m\]\h\[$(tput sgr0)\]\[\033[38;5;15m\]:\[$(tput sgr0)\]\[\033[38;5;6m\][\w]\[$(tput sgr0)\]\[\033[38;5;15m\] \\$ \[$(tput sgr0)\]"
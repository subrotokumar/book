build:
	@mdbook-mermaid install .
	@mdbook build
	@rm -r docs
	@mv book docs

serve:
	@mdbook serve | rm -r book
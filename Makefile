refresh ::
	-@rm -f csv >/dev/null 2>/dev/null
	@wget --quiet https://www.ethercalc.org/_/congressoccupied/csv && mv csv ./app/assets/_/congressoccupied/csv
	@perl -0777 -pi -e ' s{\x27\x27\x27.*?\x27\x27\x27}{\x27\x27\x27\n@{[ do { open FH, q[./app/assets/_/congressoccupied/csv]; <FH> } ]}\x27\x27\x27}s' app/app/controllers.ls
	@((git commit -am "`date`" >/dev/null) && date && (git show | cat) && git push && (./deploy >deploy.log) && (git checkout gh-pages >/dev/null) && (git pull >/dev/null) && git commit --allow-empty -am "`date`" && git push origin gh-pages && git checkout master) && (git show | cat) && echo '^^^ Diff Deployed ^^^' || true

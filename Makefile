refresh ::
	-@rm -f csv >/dev/null 2>/dev/null
	@wget --quiet https://www.ethercalc.org/_/congressoccupied/csv
	@mv csv ./app/assets/_/congressoccupied/csv
	@perl -0777 -MFile::Slurp=slurp -pi -e 's{""".*?"""}{"""\n@{[ scalar slurp q[./app/assets/_/congressoccupied/csv] ]}"""}s' app/app/controllers.ls
	@((git commit -am "`date`" >/dev/null) && date && (git show | cat) && git push && (./deploy >deploy.log) && (git checkout gh-pages >/dev/null) && (git pull >/dev/null) && git cherry-pick 8506d600ef8e11a1daee777fbca6aad0d1f2ff1f && git commit --allow-empty -am "`date`" && git push origin gh-pages && git checkout master) && (git show | cat) && echo '^^^ Diff Deployed ^^^' || true

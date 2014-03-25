refresh ::
	-@rm csv
	wget http://ethercalc.org/_/congressoccupied/csv
	mv csv ./app/assets/_/congressoccupied/csv
	perl -0777 -MFile::Slurp=slurp -pi -e 's{""".*?"""}{"""@{[ slurp q[./app/assets/_/congressoccupied/csv] ]}"""}' app/app/controllers.ls
	git commit -am "`date`" && git push && ./deploy && git checkout gh-pages && git cherry-pick 8506d600ef8e11a1daee777fbca6aad0d1f2ff1f && git commit --allow-empty -am "`date`" && git push origin gh-pages && git checkout master

refresh ::
	-@rm csv
	wget http://ethercalc.org/_/congressoccupied/csv
	mv csv ./app/assets/_/congressoccupied/csv
	perl -0777 -MFile::Slurp=slurp -pi -e 's{""".*?"""}{"""@{[ slurp q[./app/assets/_/congressoccupied/csv] ]}"""}' app/app/controllers.ls
	git commit -am "`date`" && git push && ./deploy

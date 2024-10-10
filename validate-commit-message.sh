#!/bin/bash

REGEX="^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test){1}(\([\w\-]+\))?(!)?: .{1,80}((\r?\n){2}(.*(\n|\r\n)*)*)?$"

for REF in $(git rev-list --reverse origin/main..feat/test-commit-patterns); do
	git -c advice.detachedHead=false checkout --quiet "$REF"
	SUBJECT="$(git show -s --format=%s)"
	if ! [[ $SUBJECT =~ $REGEX ]]; then
		echo "Invalid message"
		git checkout --quiet feat/test-commit-patterns
		exit 1
	fi
done

git checkout --quiet feat/test-commit-patterns
exit 0

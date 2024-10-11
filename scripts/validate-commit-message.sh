#!/bin/bash

REGEX="^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test){1}(\([\w\-]+\))?(!)?: .{1,80}((\r?\n){2}(.*(\n|\r\n)*)*)?$"
MERGE_REGEX="^(Merge)\s.+\s(into)\s.+$"
HEAD_REF="$(git rev-parse --abbrev-ref HEAD)"

for REF in $(git rev-list --reverse origin/main.."$HEAD_REF"); do
	git -c advice.detachedHead=false checkout --quiet "$REF"
	SUBJECT="$(git show -s --format=%s)"

	if [[ $SUBJECT =~ $MERGE_REGEX ]]; then
		continue
	fi

	if ! [[ $SUBJECT =~ $REGEX ]]; then
		echo "Invalid message for "$SUBJECT""
		git checkout --quiet "$HEAD_REF"
		exit 1
	fi
done

git checkout --quiet "$HEAD_REF"
exit 0

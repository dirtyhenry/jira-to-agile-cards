#!/bin/sh

SOURCE_1=jira-bookmarklet.js
OUTPUT_1=jira-bookmarklet.min.js
SOURCE_2=jira-sprint-points.js
OUTPUT_2=jira-sprint-points.min.js

echo "Posting $SOURCE_1 to Google compilation webservice"
curl -s \
  -d compilation_level=SIMPLE_OPTIMIZATIONS \
  -d output_format=text \
  -d output_info=compiled_code \
 --data-urlencode "js_code@${SOURCE_1}" \
 http://closure-compiler.appspot.com/compile \
  > $OUTPUT_1

echo "Posting $SOURCE_2 to Google compilation webservice"
curl -s \
  -d compilation_level=SIMPLE_OPTIMIZATIONS \
  -d output_format=text \
  -d output_info=compiled_code \
 --data-urlencode "js_code@${SOURCE_2}" \
 http://closure-compiler.appspot.com/compile \
  > $OUTPUT_2

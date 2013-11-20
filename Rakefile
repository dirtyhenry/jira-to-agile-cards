## Rakefile for jira-to-agile-cards.
##

desc "Remove generated files"
task :clean do |t|
  `rm -v *.min.js`
end


desc "Compile Post-It bookmarklet"
task :'compile-postit' do |t|
  compile_javascript 'jira-bookmarklet.js', 'jira-bookmarklet.min.js'
end


desc "Compile Burndown bookmarklet"
task :'compile-burndown' do |t|
  compile_javascript 'jira-sprint-points.js', 'jira-sprint-points.min.js'
end

desc "Compile all bookmarklets"
task :'compile-all' => [:'compile-postit', :'compile-burndown']


def compile_javascript source_file, output_file
  puts "Posting #{source_file} to Google compilation webservice"
  `curl -s -d compilation_level=SIMPLE_OPTIMIZATIONS -d output_format=text -d output_info=compiled_code --data-urlencode "js_code@#{source_file}" http://closure-compiler.appspot.com/compile > #{output_file}`
end
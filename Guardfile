# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'livereload' do
  watch(%r{app/views/.+\.(erb|haml|slim)$})
  watch(%r{app/helpers/.+\.rb})
  watch(%r{public/.+\.(css|js|html)})
  watch(%r{config/locales/.+\.yml})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|js|html|png|jpg))).*}) { |m| "/assets/#{m[3]}" }
end

guard 'rails' do
  watch('Gemfile.lock')
  watch(%r{^(config|lib)/.*})
end


guard :bundler do
  watch('Gemfile')
  # Uncomment next line if your Gemfile contains the `gemspec' command.
  # watch(/^.+\.gemspec/)
end

guard 'livereload' do
  watch(%r{app/views/.+\.(erb|haml|slim)$})
  watch(%r{app/helpers/.+\.rb})
  watch(%r{public/.+\.(css|js|html)})
  watch(%r{config/locales/.+\.yml})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|js|html|png|jpg))).*}) { |m| "/assets/#{m[3]}" }
end

guard 'rails' do
  watch('Gemfile.lock')
  watch(%r{^(config|lib)/.*})
end


guard :bundler do
  watch('Gemfile')
  # Uncomment next line if your Gemfile contains the `gemspec' command.
  # watch(/^.+\.gemspec/)
end

guard 'livereload' do
  watch(%r{app/views/.+\.(erb|haml|slim)$})
  watch(%r{app/helpers/.+\.rb})
  watch(%r{public/.+\.(css|js|html)})
  watch(%r{config/locales/.+\.yml})
  # Rails Assets Pipeline
  watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|js|html|png|jpg))).*}) { |m| "/assets/#{m[3]}" }
end

guard 'rails' do
  watch('Gemfile.lock')
  watch(%r{^(config|lib)/.*})
end


# Possible options are :port, :executable, :pidfile, :reload_on_change, :capture_logging, :logfile, :shutdown_retries, :shutdown_wait

# Default implementation - starts Redis on standard port and stops on exit
#guard 'redis'

# Use 'redis-server' as the executable, put a PID file in the local tmp directory, run on port 6379, and reload
# Redis when any Ruby file changes in the app, lib, or config directories.
#
# guard 'redis', :executable => 'redis-server', :pidfile => 'tmp/pids/redis.pid', :port => 6379, :reload_on_change => true do
#   watch(/^(app|lib|config)\/.*\.rb$/)
# end

# Same as above - also enable Redis logging and 3 shutdown retries spaced 5 seconds apart
#
# guard 'redis', :executable => 'redis-server', :pidfile => 'tmp/pids/redis.pid', :port => 6379, :reload_on_change => true, :capture_logging => true, :logfile => 'log/redis.log', :shutdown_retries => 3, :shutdown_wait => 5 do
#   watch(/^(app|lib|config)\/.*\.rb$/)
# end

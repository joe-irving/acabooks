# require 'csv'
#
# require 'jekyll'
#
# class Generator < Jekyll::Generator
#   def generate(site)
#     csv = ''
#     site.collections["books"].docs.each do |book|
#       puts [book.data["title"],
#         book.data["author"],
#         book.data["subtitle"],
#         book.data["excerpt"],
#         book.data["image"],
#         book.data["image_back"],
#         book.data["tags"]
#       ].to_ymal
#     end
#     File.new("output.csv", "w").write( csv )
#   end
# end

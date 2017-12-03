module Jekyll
  module MD5
    def md5(input)
      m = Digest::MD5.new
      m.reset
      m << File.read(input)
      return m.hexdigest
    end
  end
end

Liquid::Template.register_filter(Jekyll::MD5)

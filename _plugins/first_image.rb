module Jekyll
  module FirstImageFilter
    IMG_TAG = /<img[^>]*>/.freeze
    IMG_SRC = /<img[^>]+src=["']([^"']+)["']/.freeze
    # kramdown wraps one or more consecutive images in their own <p> (a photo
    # gallery renders as a single <p> holding every <img> back to back);
    # strip the whole paragraph so we don't leave it empty behind.
    WRAPPED_IMG_TAGS = /<p>\s*(?:#{IMG_TAG}\s*)+<\/p>/.freeze

    # Returns the src of the first <img> tag found in an HTML string, or nil.
    def first_image(html)
      return nil if html.nil?

      html[IMG_SRC, 1]
    end

    # Removes every <img> tag from an HTML string, so photos already shown
    # as the card's thumbnail (or a whole gallery) aren't repeated in the
    # excerpt text.
    def without_images(html)
      return html if html.nil?

      html.gsub(WRAPPED_IMG_TAGS, '').gsub(IMG_TAG, '')
    end
  end
end

Liquid::Template.register_filter(Jekyll::FirstImageFilter)

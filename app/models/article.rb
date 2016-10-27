class Article < ApplicationRecord
	has_many :comments, dependent: :destroy
	validates :title, presence: {message: "Title field should bbe given"}, length: { minimum: 5 } 
	validates :text, presence: true
	puts ActiveModel::Validations::Callbacks.class	
end

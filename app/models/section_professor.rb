class SectionProfessor < ActiveRecord::Base
  belongs_to :section, counter_cache: true
  belongs_to :professor, counter_cache: true
end

class CreateMetricTypes < ActiveRecord::Migration
  def change
    create_table :metric_types do |t|
      t.string :label
      t.string :unit

      t.timestamps
    end
  end
end

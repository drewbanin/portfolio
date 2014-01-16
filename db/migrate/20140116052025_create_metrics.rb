class CreateMetrics < ActiveRecord::Migration
  def change
    create_table :metrics do |t|
      t.datetime :date
      t.integer :value
      t.references :metric_type, index: true

      t.timestamps
    end
  end
end

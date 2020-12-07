// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_monitor_scheduled_query_rules_log.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermMonitorScheduledQueryRulesLogConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermMonitorScheduledQueryRulesLogTimeouts;
}
export class DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataAzurermMonitorScheduledQueryRulesLogCriteria extends cdktf.ComplexComputedList {

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.interpolationForAttribute('dimension') as any;
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
}
export interface DataAzurermMonitorScheduledQueryRulesLogTimeouts {
  readonly read?: string;
}

function dataAzurermMonitorScheduledQueryRulesLogTimeoutsToTerraform(struct?: DataAzurermMonitorScheduledQueryRulesLogTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermMonitorScheduledQueryRulesLog extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermMonitorScheduledQueryRulesLogConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_scheduled_query_rules_log',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_resource_ids - computed: true, optional: false, required: false
  public get authorizedResourceIds() {
    return this.getListAttribute('authorized_resource_ids');
  }

  // criteria - computed: true, optional: false, required: false
  public criteria(index: string) {
    return new DataAzurermMonitorScheduledQueryRulesLogCriteria(this, 'criteria', index);
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermMonitorScheduledQueryRulesLogTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermMonitorScheduledQueryRulesLogTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermMonitorScheduledQueryRulesLogTimeoutsToTerraform(this._timeouts),
    };
  }
}

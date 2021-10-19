// https://www.terraform.io/docs/providers/azurerm/d/monitor_scheduled_query_rules_log.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermMonitorScheduledQueryRulesLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_scheduled_query_rules_log.html#name DataAzurermMonitorScheduledQueryRulesLog#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_scheduled_query_rules_log.html#resource_group_name DataAzurermMonitorScheduledQueryRulesLog#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_scheduled_query_rules_log.html#timeouts DataAzurermMonitorScheduledQueryRulesLog#timeouts}
  */
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
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dimension') as any;
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
}
export interface DataAzurermMonitorScheduledQueryRulesLogTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_scheduled_query_rules_log.html#read DataAzurermMonitorScheduledQueryRulesLog#read}
  */
  readonly read?: string;
}

function dataAzurermMonitorScheduledQueryRulesLogTimeoutsToTerraform(struct?: DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference | DataAzurermMonitorScheduledQueryRulesLogTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_scheduled_query_rules_log.html azurerm_monitor_scheduled_query_rules_log}
*/
export class DataAzurermMonitorScheduledQueryRulesLog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_monitor_scheduled_query_rules_log";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_scheduled_query_rules_log.html azurerm_monitor_scheduled_query_rules_log} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermMonitorScheduledQueryRulesLogConfig
  */
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
    return this.getBooleanAttribute('enabled') as any;
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
  private _name?: string; 
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
  private _resourceGroupName?: string; 
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
  private _timeouts?: DataAzurermMonitorScheduledQueryRulesLogTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermMonitorScheduledQueryRulesLogTimeouts | undefined) {
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

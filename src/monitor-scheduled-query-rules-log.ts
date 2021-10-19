// https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorScheduledQueryRulesLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#authorized_resource_ids MonitorScheduledQueryRulesLog#authorized_resource_ids}
  */
  readonly authorizedResourceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#data_source_id MonitorScheduledQueryRulesLog#data_source_id}
  */
  readonly dataSourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#description MonitorScheduledQueryRulesLog#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#enabled MonitorScheduledQueryRulesLog#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#location MonitorScheduledQueryRulesLog#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#name MonitorScheduledQueryRulesLog#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#resource_group_name MonitorScheduledQueryRulesLog#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#tags MonitorScheduledQueryRulesLog#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#criteria MonitorScheduledQueryRulesLog#criteria}
  */
  readonly criteria: MonitorScheduledQueryRulesLogCriteria;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#timeouts MonitorScheduledQueryRulesLog#timeouts}
  */
  readonly timeouts?: MonitorScheduledQueryRulesLogTimeouts;
}
export interface MonitorScheduledQueryRulesLogCriteriaDimension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#name MonitorScheduledQueryRulesLog#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#operator MonitorScheduledQueryRulesLog#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#values MonitorScheduledQueryRulesLog#values}
  */
  readonly values: string[];
}

function monitorScheduledQueryRulesLogCriteriaDimensionToTerraform(struct?: MonitorScheduledQueryRulesLogCriteriaDimension): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MonitorScheduledQueryRulesLogCriteria {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#metric_name MonitorScheduledQueryRulesLog#metric_name}
  */
  readonly metricName: string;
  /**
  * dimension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#dimension MonitorScheduledQueryRulesLog#dimension}
  */
  readonly dimension: MonitorScheduledQueryRulesLogCriteriaDimension[];
}

function monitorScheduledQueryRulesLogCriteriaToTerraform(struct?: MonitorScheduledQueryRulesLogCriteriaOutputReference | MonitorScheduledQueryRulesLogCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    dimension: cdktf.listMapper(monitorScheduledQueryRulesLogCriteriaDimensionToTerraform)(struct!.dimension),
  }
}

export class MonitorScheduledQueryRulesLogCriteriaOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension?: MonitorScheduledQueryRulesLogCriteriaDimension[]; 
  public get dimension() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dimension') as any;
  }
  public set dimension(value: MonitorScheduledQueryRulesLogCriteriaDimension[]) {
    this._dimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension
  }
}
export interface MonitorScheduledQueryRulesLogTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#create MonitorScheduledQueryRulesLog#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#delete MonitorScheduledQueryRulesLog#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#read MonitorScheduledQueryRulesLog#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html#update MonitorScheduledQueryRulesLog#update}
  */
  readonly update?: string;
}

function monitorScheduledQueryRulesLogTimeoutsToTerraform(struct?: MonitorScheduledQueryRulesLogTimeoutsOutputReference | MonitorScheduledQueryRulesLogTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class MonitorScheduledQueryRulesLogTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html azurerm_monitor_scheduled_query_rules_log}
*/
export class MonitorScheduledQueryRulesLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_monitor_scheduled_query_rules_log";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html azurerm_monitor_scheduled_query_rules_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorScheduledQueryRulesLogConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorScheduledQueryRulesLogConfig) {
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
    this._authorizedResourceIds = config.authorizedResourceIds;
    this._dataSourceId = config.dataSourceId;
    this._description = config.description;
    this._enabled = config.enabled;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._criteria = config.criteria;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_resource_ids - computed: false, optional: true, required: false
  private _authorizedResourceIds?: string[] | undefined; 
  public get authorizedResourceIds() {
    return this.getListAttribute('authorized_resource_ids');
  }
  public set authorizedResourceIds(value: string[] | undefined) {
    this._authorizedResourceIds = value;
  }
  public resetAuthorizedResourceIds() {
    this._authorizedResourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedResourceIdsInput() {
    return this._authorizedResourceIds
  }

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria?: MonitorScheduledQueryRulesLogCriteria; 
  private __criteriaOutput = new MonitorScheduledQueryRulesLogCriteriaOutputReference(this as any, "criteria", true);
  public get criteria() {
    return this.__criteriaOutput;
  }
  public putCriteria(value: MonitorScheduledQueryRulesLogCriteria) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorScheduledQueryRulesLogTimeouts | undefined; 
  private __timeoutsOutput = new MonitorScheduledQueryRulesLogTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MonitorScheduledQueryRulesLogTimeouts | undefined) {
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
      authorized_resource_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._authorizedResourceIds),
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      criteria: monitorScheduledQueryRulesLogCriteriaToTerraform(this._criteria),
      timeouts: monitorScheduledQueryRulesLogTimeoutsToTerraform(this._timeouts),
    };
  }
}

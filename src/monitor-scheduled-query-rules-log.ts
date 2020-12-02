// https://www.terraform.io/docs/providers/azurerm/r/monitor_scheduled_query_rules_log.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface MonitorScheduledQueryRulesLogConfig extends TerraformMetaArguments {
  readonly authorizedResourceIds?: string[];
  readonly dataSourceId: string;
  readonly description?: string;
  readonly enabled?: boolean;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** criteria block */
  readonly criteria: MonitorScheduledQueryRulesLogCriteria[];
  /** timeouts block */
  readonly timeouts?: MonitorScheduledQueryRulesLogTimeouts;
}
export interface MonitorScheduledQueryRulesLogCriteriaDimension {
  readonly name: string;
  readonly operator?: string;
  readonly values: string[];
}
export interface MonitorScheduledQueryRulesLogCriteria {
  readonly metricName: string;
  /** dimension block */
  readonly dimension: MonitorScheduledQueryRulesLogCriteriaDimension[];
}
export interface MonitorScheduledQueryRulesLogTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class MonitorScheduledQueryRulesLog extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _authorizedResourceIds?: string[];
  public get authorizedResourceIds() {
    return this.getListAttribute('authorized_resource_ids');
  }
  public set authorizedResourceIds(value: string[] ) {
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
  private _dataSourceId: string;
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
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
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
  private _location: string;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
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
  private _criteria: MonitorScheduledQueryRulesLogCriteria[];
  public get criteria() {
    return this.interpolationForAttribute('criteria') as any;
  }
  public set criteria(value: MonitorScheduledQueryRulesLogCriteria[]) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MonitorScheduledQueryRulesLogTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MonitorScheduledQueryRulesLogTimeouts ) {
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
      authorized_resource_ids: this._authorizedResourceIds,
      data_source_id: this._dataSourceId,
      description: this._description,
      enabled: this._enabled,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      tags: this._tags,
      criteria: this._criteria,
      timeouts: this._timeouts,
    };
  }
}

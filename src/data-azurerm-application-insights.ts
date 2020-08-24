// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_application_insights.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermApplicationInsightsConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermApplicationInsightsTimeouts;
}
export interface DataAzurermApplicationInsightsTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermApplicationInsights extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermApplicationInsightsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_application_insights',
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

  // app_id - computed: true, optional: false, required: true
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // application_type - computed: true, optional: false, required: true
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instrumentation_key - computed: true, optional: false, required: true
  public get instrumentationKey() {
    return this.getStringAttribute('instrumentation_key');
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // retention_in_days - computed: true, optional: false, required: true
  public get retentionInDays() {
    return this.getNumberAttribute('retention_in_days');
  }

  // tags - computed: true, optional: false, required: true
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermApplicationInsightsTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermApplicationInsightsTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}

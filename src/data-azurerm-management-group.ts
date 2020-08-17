// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_management_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAzurermManagementGroupConfig extends TerraformMetaArguments {
  readonly groupId: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermManagementGroupTimeouts;
}
export interface DataAzurermManagementGroupTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermManagementGroup extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermManagementGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_management_group',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._groupId = config.groupId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId: string;
  public get groupId() {
    return this._groupId;
  }
  public set groupId(value: string) {
    this._groupId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // parent_management_group_id - computed: true, optional: false, required: true
  public get parentManagementGroupId() {
    return this.getStringAttribute('parent_management_group_id');
  }

  // subscription_ids - computed: true, optional: false, required: true
  public get subscriptionIds() {
    return this.getListAttribute('subscription_ids');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermManagementGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermManagementGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: this._groupId,
      timeouts: this._timeouts,
    };
  }
}

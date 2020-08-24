// https://www.terraform.io/docs/providers/azurerm/r/management_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ManagementGroupConfig extends TerraformMetaArguments {
  readonly displayName?: string;
  readonly groupId?: string;
  readonly parentManagementGroupId?: string;
  readonly subscriptionIds?: string[];
  /** timeouts block */
  readonly timeouts?: ManagementGroupTimeouts;
}
export interface ManagementGroupTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ManagementGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ManagementGroupConfig = {}) {
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
    this._displayName = config.displayName;
    this._groupId = config.groupId;
    this._parentManagementGroupId = config.parentManagementGroupId;
    this._subscriptionIds = config.subscriptionIds;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string;
  public get groupId() {
    return this._groupId ?? this.getStringAttribute('group_id');
  }
  public set groupId(value: string | undefined) {
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

  // parent_management_group_id - computed: true, optional: true, required: false
  private _parentManagementGroupId?: string;
  public get parentManagementGroupId() {
    return this._parentManagementGroupId ?? this.getStringAttribute('parent_management_group_id');
  }
  public set parentManagementGroupId(value: string | undefined) {
    this._parentManagementGroupId = value;
  }

  // subscription_ids - computed: false, optional: true, required: false
  private _subscriptionIds?: string[];
  public get subscriptionIds() {
    return this._subscriptionIds;
  }
  public set subscriptionIds(value: string[] | undefined) {
    this._subscriptionIds = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ManagementGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ManagementGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: this._displayName,
      group_id: this._groupId,
      parent_management_group_id: this._parentManagementGroupId,
      subscription_ids: this._subscriptionIds,
      timeouts: this._timeouts,
    };
  }
}

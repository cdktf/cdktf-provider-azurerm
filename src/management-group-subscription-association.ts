// https://www.terraform.io/docs/providers/azurerm/r/management_group_subscription_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementGroupSubscriptionAssociationConfig extends cdktf.TerraformMetaArguments {
  readonly managementGroupId: string;
  readonly subscriptionId: string;
  /** timeouts block */
  readonly timeouts?: ManagementGroupSubscriptionAssociationTimeouts;
}
export interface ManagementGroupSubscriptionAssociationTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
}

function managementGroupSubscriptionAssociationTimeoutsToTerraform(struct?: ManagementGroupSubscriptionAssociationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class ManagementGroupSubscriptionAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ManagementGroupSubscriptionAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_management_group_subscription_association',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._managementGroupId = config.managementGroupId;
    this._subscriptionId = config.subscriptionId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // management_group_id - computed: false, optional: false, required: true
  private _managementGroupId: string;
  public get managementGroupId() {
    return this.getStringAttribute('management_group_id');
  }
  public set managementGroupId(value: string) {
    this._managementGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGroupIdInput() {
    return this._managementGroupId
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId: string;
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ManagementGroupSubscriptionAssociationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ManagementGroupSubscriptionAssociationTimeouts ) {
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
      management_group_id: cdktf.stringToTerraform(this._managementGroupId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      timeouts: managementGroupSubscriptionAssociationTimeoutsToTerraform(this._timeouts),
    };
  }
}

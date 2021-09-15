// https://www.terraform.io/docs/providers/azurerm/r/management_group_subscription_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementGroupSubscriptionAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_subscription_association.html#management_group_id ManagementGroupSubscriptionAssociation#management_group_id}
  */
  readonly managementGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_subscription_association.html#subscription_id ManagementGroupSubscriptionAssociation#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_subscription_association.html#timeouts ManagementGroupSubscriptionAssociation#timeouts}
  */
  readonly timeouts?: ManagementGroupSubscriptionAssociationTimeouts;
}
export interface ManagementGroupSubscriptionAssociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_subscription_association.html#create ManagementGroupSubscriptionAssociation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_subscription_association.html#delete ManagementGroupSubscriptionAssociation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_subscription_association.html#read ManagementGroupSubscriptionAssociation#read}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_subscription_association.html azurerm_management_group_subscription_association}
*/
export class ManagementGroupSubscriptionAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_management_group_subscription_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/management_group_subscription_association.html azurerm_management_group_subscription_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementGroupSubscriptionAssociationConfig
  */
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

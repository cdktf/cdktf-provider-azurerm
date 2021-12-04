// https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynapseWorkspaceKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#active SynapseWorkspaceKey#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#cusomter_managed_key_name SynapseWorkspaceKey#cusomter_managed_key_name}
  */
  readonly cusomterManagedKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#customer_managed_key_name SynapseWorkspaceKey#customer_managed_key_name}
  */
  readonly customerManagedKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#customer_managed_key_versionless_id SynapseWorkspaceKey#customer_managed_key_versionless_id}
  */
  readonly customerManagedKeyVersionlessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#synapse_workspace_id SynapseWorkspaceKey#synapse_workspace_id}
  */
  readonly synapseWorkspaceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#timeouts SynapseWorkspaceKey#timeouts}
  */
  readonly timeouts?: SynapseWorkspaceKeyTimeouts;
}
export interface SynapseWorkspaceKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#create SynapseWorkspaceKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#delete SynapseWorkspaceKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#read SynapseWorkspaceKey#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html#update SynapseWorkspaceKey#update}
  */
  readonly update?: string;
}

export function synapseWorkspaceKeyTimeoutsToTerraform(struct?: SynapseWorkspaceKeyTimeoutsOutputReference | SynapseWorkspaceKeyTimeouts): any {
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

export class SynapseWorkspaceKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SynapseWorkspaceKeyTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynapseWorkspaceKeyTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html azurerm_synapse_workspace_key}
*/
export class SynapseWorkspaceKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_synapse_workspace_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace_key.html azurerm_synapse_workspace_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynapseWorkspaceKeyConfig
  */
  public constructor(scope: Construct, id: string, config: SynapseWorkspaceKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_workspace_key',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._active = config.active;
    this._cusomterManagedKeyName = config.cusomterManagedKeyName;
    this._customerManagedKeyName = config.customerManagedKeyName;
    this._customerManagedKeyVersionlessId = config.customerManagedKeyVersionlessId;
    this._synapseWorkspaceId = config.synapseWorkspaceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active') as any;
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // cusomter_managed_key_name - computed: true, optional: true, required: false
  private _cusomterManagedKeyName?: string; 
  public get cusomterManagedKeyName() {
    return this.getStringAttribute('cusomter_managed_key_name');
  }
  public set cusomterManagedKeyName(value: string) {
    this._cusomterManagedKeyName = value;
  }
  public resetCusomterManagedKeyName() {
    this._cusomterManagedKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cusomterManagedKeyNameInput() {
    return this._cusomterManagedKeyName;
  }

  // customer_managed_key_name - computed: true, optional: true, required: false
  private _customerManagedKeyName?: string; 
  public get customerManagedKeyName() {
    return this.getStringAttribute('customer_managed_key_name');
  }
  public set customerManagedKeyName(value: string) {
    this._customerManagedKeyName = value;
  }
  public resetCustomerManagedKeyName() {
    this._customerManagedKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyNameInput() {
    return this._customerManagedKeyName;
  }

  // customer_managed_key_versionless_id - computed: false, optional: true, required: false
  private _customerManagedKeyVersionlessId?: string; 
  public get customerManagedKeyVersionlessId() {
    return this.getStringAttribute('customer_managed_key_versionless_id');
  }
  public set customerManagedKeyVersionlessId(value: string) {
    this._customerManagedKeyVersionlessId = value;
  }
  public resetCustomerManagedKeyVersionlessId() {
    this._customerManagedKeyVersionlessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyVersionlessIdInput() {
    return this._customerManagedKeyVersionlessId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // synapse_workspace_id - computed: false, optional: false, required: true
  private _synapseWorkspaceId?: string; 
  public get synapseWorkspaceId() {
    return this.getStringAttribute('synapse_workspace_id');
  }
  public set synapseWorkspaceId(value: string) {
    this._synapseWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get synapseWorkspaceIdInput() {
    return this._synapseWorkspaceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SynapseWorkspaceKeyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SynapseWorkspaceKeyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      cusomter_managed_key_name: cdktf.stringToTerraform(this._cusomterManagedKeyName),
      customer_managed_key_name: cdktf.stringToTerraform(this._customerManagedKeyName),
      customer_managed_key_versionless_id: cdktf.stringToTerraform(this._customerManagedKeyVersionlessId),
      synapse_workspace_id: cdktf.stringToTerraform(this._synapseWorkspaceId),
      timeouts: synapseWorkspaceKeyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}

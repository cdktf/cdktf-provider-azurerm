// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_container_immutability_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageContainerImmutabilityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_container_immutability_policy#id StorageContainerImmutabilityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_container_immutability_policy#immutability_period_in_days StorageContainerImmutabilityPolicy#immutability_period_in_days}
  */
  readonly immutabilityPeriodInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_container_immutability_policy#locked StorageContainerImmutabilityPolicy#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_container_immutability_policy#protected_append_writes_all_enabled StorageContainerImmutabilityPolicy#protected_append_writes_all_enabled}
  */
  readonly protectedAppendWritesAllEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_container_immutability_policy#protected_append_writes_enabled StorageContainerImmutabilityPolicy#protected_append_writes_enabled}
  */
  readonly protectedAppendWritesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_container_immutability_policy#storage_container_resource_manager_id StorageContainerImmutabilityPolicy#storage_container_resource_manager_id}
  */
  readonly storageContainerResourceManagerId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_container_immutability_policy#timeouts StorageContainerImmutabilityPolicy#timeouts}
  */
  readonly timeouts?: StorageContainerImmutabilityPolicyTimeouts;
}
export interface StorageContainerImmutabilityPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_container_immutability_policy#create StorageContainerImmutabilityPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_container_immutability_policy#delete StorageContainerImmutabilityPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_container_immutability_policy#read StorageContainerImmutabilityPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_container_immutability_policy#update StorageContainerImmutabilityPolicy#update}
  */
  readonly update?: string;
}

export function storageContainerImmutabilityPolicyTimeoutsToTerraform(struct?: StorageContainerImmutabilityPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function storageContainerImmutabilityPolicyTimeoutsToHclTerraform(struct?: StorageContainerImmutabilityPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageContainerImmutabilityPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageContainerImmutabilityPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageContainerImmutabilityPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_container_immutability_policy azurerm_storage_container_immutability_policy}
*/
export class StorageContainerImmutabilityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_storage_container_immutability_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageContainerImmutabilityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageContainerImmutabilityPolicy to import
  * @param importFromId The id of the existing StorageContainerImmutabilityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_container_immutability_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageContainerImmutabilityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_storage_container_immutability_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_container_immutability_policy azurerm_storage_container_immutability_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageContainerImmutabilityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: StorageContainerImmutabilityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_container_immutability_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._immutabilityPeriodInDays = config.immutabilityPeriodInDays;
    this._locked = config.locked;
    this._protectedAppendWritesAllEnabled = config.protectedAppendWritesAllEnabled;
    this._protectedAppendWritesEnabled = config.protectedAppendWritesEnabled;
    this._storageContainerResourceManagerId = config.storageContainerResourceManagerId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // immutability_period_in_days - computed: false, optional: false, required: true
  private _immutabilityPeriodInDays?: number; 
  public get immutabilityPeriodInDays() {
    return this.getNumberAttribute('immutability_period_in_days');
  }
  public set immutabilityPeriodInDays(value: number) {
    this._immutabilityPeriodInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get immutabilityPeriodInDaysInput() {
    return this._immutabilityPeriodInDays;
  }

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // protected_append_writes_all_enabled - computed: false, optional: true, required: false
  private _protectedAppendWritesAllEnabled?: boolean | cdktf.IResolvable; 
  public get protectedAppendWritesAllEnabled() {
    return this.getBooleanAttribute('protected_append_writes_all_enabled');
  }
  public set protectedAppendWritesAllEnabled(value: boolean | cdktf.IResolvable) {
    this._protectedAppendWritesAllEnabled = value;
  }
  public resetProtectedAppendWritesAllEnabled() {
    this._protectedAppendWritesAllEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedAppendWritesAllEnabledInput() {
    return this._protectedAppendWritesAllEnabled;
  }

  // protected_append_writes_enabled - computed: false, optional: true, required: false
  private _protectedAppendWritesEnabled?: boolean | cdktf.IResolvable; 
  public get protectedAppendWritesEnabled() {
    return this.getBooleanAttribute('protected_append_writes_enabled');
  }
  public set protectedAppendWritesEnabled(value: boolean | cdktf.IResolvable) {
    this._protectedAppendWritesEnabled = value;
  }
  public resetProtectedAppendWritesEnabled() {
    this._protectedAppendWritesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedAppendWritesEnabledInput() {
    return this._protectedAppendWritesEnabled;
  }

  // storage_container_resource_manager_id - computed: false, optional: false, required: true
  private _storageContainerResourceManagerId?: string; 
  public get storageContainerResourceManagerId() {
    return this.getStringAttribute('storage_container_resource_manager_id');
  }
  public set storageContainerResourceManagerId(value: string) {
    this._storageContainerResourceManagerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerResourceManagerIdInput() {
    return this._storageContainerResourceManagerId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageContainerImmutabilityPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageContainerImmutabilityPolicyTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      immutability_period_in_days: cdktf.numberToTerraform(this._immutabilityPeriodInDays),
      locked: cdktf.booleanToTerraform(this._locked),
      protected_append_writes_all_enabled: cdktf.booleanToTerraform(this._protectedAppendWritesAllEnabled),
      protected_append_writes_enabled: cdktf.booleanToTerraform(this._protectedAppendWritesEnabled),
      storage_container_resource_manager_id: cdktf.stringToTerraform(this._storageContainerResourceManagerId),
      timeouts: storageContainerImmutabilityPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      immutability_period_in_days: {
        value: cdktf.numberToHclTerraform(this._immutabilityPeriodInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protected_append_writes_all_enabled: {
        value: cdktf.booleanToHclTerraform(this._protectedAppendWritesAllEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protected_append_writes_enabled: {
        value: cdktf.booleanToHclTerraform(this._protectedAppendWritesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_container_resource_manager_id: {
        value: cdktf.stringToHclTerraform(this._storageContainerResourceManagerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: storageContainerImmutabilityPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageContainerImmutabilityPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

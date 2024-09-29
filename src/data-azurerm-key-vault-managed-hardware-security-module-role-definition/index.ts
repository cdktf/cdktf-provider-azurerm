// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#id DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#managed_hsm_id DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition#managed_hsm_id}
  */
  readonly managedHsmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#name DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#timeouts DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition#timeouts}
  */
  readonly timeouts?: DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts;
}
export interface DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission {
}

export function dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionToTerraform(struct?: DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionToHclTerraform(struct?: DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // data_actions - computed: true, optional: false, required: false
  public get dataActions() {
    return this.getListAttribute('data_actions');
  }

  // not_actions - computed: true, optional: false, required: false
  public get notActions() {
    return this.getListAttribute('not_actions');
  }

  // not_data_actions - computed: true, optional: false, required: false
  public get notDataActions() {
    return this.getListAttribute('not_data_actions');
  }
}

export class DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference {
    return new DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#read DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition#read}
  */
  readonly read?: string;
}

export function dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsToTerraform(struct?: DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsToHclTerraform(struct?: DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition azurerm_key_vault_managed_hardware_security_module_role_definition}
*/
export class DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_key_vault_managed_hardware_security_module_role_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition to import
  * @param importFromId The id of the existing DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_key_vault_managed_hardware_security_module_role_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/key_vault_managed_hardware_security_module_role_definition azurerm_key_vault_managed_hardware_security_module_role_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_managed_hardware_security_module_role_definition',
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
    this._managedHsmId = config.managedHsmId;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignable_scopes - computed: true, optional: false, required: false
  public get assignableScopes() {
    return this.getListAttribute('assignable_scopes');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

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

  // managed_hsm_id - computed: false, optional: false, required: true
  private _managedHsmId?: string; 
  public get managedHsmId() {
    return this.getStringAttribute('managed_hsm_id');
  }
  public set managedHsmId(value: string) {
    this._managedHsmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedHsmIdInput() {
    return this._managedHsmId;
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
    return this._name;
  }

  // permission - computed: true, optional: false, required: false
  private _permission = new DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList(this, "permission", false);
  public get permission() {
    return this._permission;
  }

  // resource_manager_id - computed: true, optional: false, required: false
  public get resourceManagerId() {
    return this.getStringAttribute('resource_manager_id');
  }

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }

  // role_type - computed: true, optional: false, required: false
  public get roleType() {
    return this.getStringAttribute('role_type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts) {
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
      managed_hsm_id: cdktf.stringToTerraform(this._managedHsmId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsToTerraform(this._timeouts.internalValue),
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
      managed_hsm_id: {
        value: cdktf.stringToHclTerraform(this._managedHsmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermKeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

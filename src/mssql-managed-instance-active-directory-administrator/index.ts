// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_managed_instance_active_directory_administrator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlManagedInstanceActiveDirectoryAdministratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_managed_instance_active_directory_administrator#azuread_authentication_only MssqlManagedInstanceActiveDirectoryAdministrator#azuread_authentication_only}
  */
  readonly azureadAuthenticationOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_managed_instance_active_directory_administrator#id MssqlManagedInstanceActiveDirectoryAdministrator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_managed_instance_active_directory_administrator#login_username MssqlManagedInstanceActiveDirectoryAdministrator#login_username}
  */
  readonly loginUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_managed_instance_active_directory_administrator#managed_instance_id MssqlManagedInstanceActiveDirectoryAdministrator#managed_instance_id}
  */
  readonly managedInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_managed_instance_active_directory_administrator#object_id MssqlManagedInstanceActiveDirectoryAdministrator#object_id}
  */
  readonly objectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_managed_instance_active_directory_administrator#tenant_id MssqlManagedInstanceActiveDirectoryAdministrator#tenant_id}
  */
  readonly tenantId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_managed_instance_active_directory_administrator#timeouts MssqlManagedInstanceActiveDirectoryAdministrator#timeouts}
  */
  readonly timeouts?: MssqlManagedInstanceActiveDirectoryAdministratorTimeouts;
}
export interface MssqlManagedInstanceActiveDirectoryAdministratorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_managed_instance_active_directory_administrator#create MssqlManagedInstanceActiveDirectoryAdministrator#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_managed_instance_active_directory_administrator#delete MssqlManagedInstanceActiveDirectoryAdministrator#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_managed_instance_active_directory_administrator#read MssqlManagedInstanceActiveDirectoryAdministrator#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_managed_instance_active_directory_administrator#update MssqlManagedInstanceActiveDirectoryAdministrator#update}
  */
  readonly update?: string;
}

export function mssqlManagedInstanceActiveDirectoryAdministratorTimeoutsToTerraform(struct?: MssqlManagedInstanceActiveDirectoryAdministratorTimeouts | cdktf.IResolvable): any {
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


export function mssqlManagedInstanceActiveDirectoryAdministratorTimeoutsToHclTerraform(struct?: MssqlManagedInstanceActiveDirectoryAdministratorTimeouts | cdktf.IResolvable): any {
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

export class MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MssqlManagedInstanceActiveDirectoryAdministratorTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MssqlManagedInstanceActiveDirectoryAdministratorTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_managed_instance_active_directory_administrator azurerm_mssql_managed_instance_active_directory_administrator}
*/
export class MssqlManagedInstanceActiveDirectoryAdministrator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mssql_managed_instance_active_directory_administrator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MssqlManagedInstanceActiveDirectoryAdministrator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MssqlManagedInstanceActiveDirectoryAdministrator to import
  * @param importFromId The id of the existing MssqlManagedInstanceActiveDirectoryAdministrator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_managed_instance_active_directory_administrator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MssqlManagedInstanceActiveDirectoryAdministrator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mssql_managed_instance_active_directory_administrator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/mssql_managed_instance_active_directory_administrator azurerm_mssql_managed_instance_active_directory_administrator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlManagedInstanceActiveDirectoryAdministratorConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlManagedInstanceActiveDirectoryAdministratorConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_managed_instance_active_directory_administrator',
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
    this._azureadAuthenticationOnly = config.azureadAuthenticationOnly;
    this._id = config.id;
    this._loginUsername = config.loginUsername;
    this._managedInstanceId = config.managedInstanceId;
    this._objectId = config.objectId;
    this._tenantId = config.tenantId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azuread_authentication_only - computed: false, optional: true, required: false
  private _azureadAuthenticationOnly?: boolean | cdktf.IResolvable; 
  public get azureadAuthenticationOnly() {
    return this.getBooleanAttribute('azuread_authentication_only');
  }
  public set azureadAuthenticationOnly(value: boolean | cdktf.IResolvable) {
    this._azureadAuthenticationOnly = value;
  }
  public resetAzureadAuthenticationOnly() {
    this._azureadAuthenticationOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureadAuthenticationOnlyInput() {
    return this._azureadAuthenticationOnly;
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

  // login_username - computed: false, optional: false, required: true
  private _loginUsername?: string; 
  public get loginUsername() {
    return this.getStringAttribute('login_username');
  }
  public set loginUsername(value: string) {
    this._loginUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginUsernameInput() {
    return this._loginUsername;
  }

  // managed_instance_id - computed: false, optional: false, required: true
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MssqlManagedInstanceActiveDirectoryAdministratorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MssqlManagedInstanceActiveDirectoryAdministratorTimeouts) {
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
      azuread_authentication_only: cdktf.booleanToTerraform(this._azureadAuthenticationOnly),
      id: cdktf.stringToTerraform(this._id),
      login_username: cdktf.stringToTerraform(this._loginUsername),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      object_id: cdktf.stringToTerraform(this._objectId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: mssqlManagedInstanceActiveDirectoryAdministratorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azuread_authentication_only: {
        value: cdktf.booleanToHclTerraform(this._azureadAuthenticationOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_username: {
        value: cdktf.stringToHclTerraform(this._loginUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_instance_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_id: {
        value: cdktf.stringToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: mssqlManagedInstanceActiveDirectoryAdministratorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MssqlManagedInstanceActiveDirectoryAdministratorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

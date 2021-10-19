// https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aad.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiManagementIdentityProviderAadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aad.html#allowed_tenants ApiManagementIdentityProviderAad#allowed_tenants}
  */
  readonly allowedTenants: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aad.html#api_management_name ApiManagementIdentityProviderAad#api_management_name}
  */
  readonly apiManagementName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aad.html#client_id ApiManagementIdentityProviderAad#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aad.html#client_secret ApiManagementIdentityProviderAad#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aad.html#resource_group_name ApiManagementIdentityProviderAad#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aad.html#signin_tenant ApiManagementIdentityProviderAad#signin_tenant}
  */
  readonly signinTenant?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aad.html#timeouts ApiManagementIdentityProviderAad#timeouts}
  */
  readonly timeouts?: ApiManagementIdentityProviderAadTimeouts;
}
export interface ApiManagementIdentityProviderAadTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aad.html#create ApiManagementIdentityProviderAad#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aad.html#delete ApiManagementIdentityProviderAad#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aad.html#read ApiManagementIdentityProviderAad#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aad.html#update ApiManagementIdentityProviderAad#update}
  */
  readonly update?: string;
}

function apiManagementIdentityProviderAadTimeoutsToTerraform(struct?: ApiManagementIdentityProviderAadTimeoutsOutputReference | ApiManagementIdentityProviderAadTimeouts): any {
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

export class ApiManagementIdentityProviderAadTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aad.html azurerm_api_management_identity_provider_aad}
*/
export class ApiManagementIdentityProviderAad extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management_identity_provider_aad";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/api_management_identity_provider_aad.html azurerm_api_management_identity_provider_aad} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiManagementIdentityProviderAadConfig
  */
  public constructor(scope: Construct, id: string, config: ApiManagementIdentityProviderAadConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management_identity_provider_aad',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowedTenants = config.allowedTenants;
    this._apiManagementName = config.apiManagementName;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._resourceGroupName = config.resourceGroupName;
    this._signinTenant = config.signinTenant;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_tenants - computed: false, optional: false, required: true
  private _allowedTenants?: string[]; 
  public get allowedTenants() {
    return this.getListAttribute('allowed_tenants');
  }
  public set allowedTenants(value: string[]) {
    this._allowedTenants = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTenantsInput() {
    return this._allowedTenants
  }

  // api_management_name - computed: false, optional: false, required: true
  private _apiManagementName?: string; 
  public get apiManagementName() {
    return this.getStringAttribute('api_management_name');
  }
  public set apiManagementName(value: string) {
    this._apiManagementName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiManagementNameInput() {
    return this._apiManagementName
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
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

  // signin_tenant - computed: false, optional: true, required: false
  private _signinTenant?: string | undefined; 
  public get signinTenant() {
    return this.getStringAttribute('signin_tenant');
  }
  public set signinTenant(value: string | undefined) {
    this._signinTenant = value;
  }
  public resetSigninTenant() {
    this._signinTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signinTenantInput() {
    return this._signinTenant
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementIdentityProviderAadTimeouts | undefined; 
  private __timeoutsOutput = new ApiManagementIdentityProviderAadTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApiManagementIdentityProviderAadTimeouts | undefined) {
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
      allowed_tenants: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedTenants),
      api_management_name: cdktf.stringToTerraform(this._apiManagementName),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      signin_tenant: cdktf.stringToTerraform(this._signinTenant),
      timeouts: apiManagementIdentityProviderAadTimeoutsToTerraform(this._timeouts),
    };
  }
}

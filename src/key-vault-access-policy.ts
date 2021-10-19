// https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultAccessPolicyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy.html#application_id KeyVaultAccessPolicyA#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy.html#certificate_permissions KeyVaultAccessPolicyA#certificate_permissions}
  */
  readonly certificatePermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy.html#key_permissions KeyVaultAccessPolicyA#key_permissions}
  */
  readonly keyPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy.html#key_vault_id KeyVaultAccessPolicyA#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy.html#object_id KeyVaultAccessPolicyA#object_id}
  */
  readonly objectId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy.html#secret_permissions KeyVaultAccessPolicyA#secret_permissions}
  */
  readonly secretPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy.html#storage_permissions KeyVaultAccessPolicyA#storage_permissions}
  */
  readonly storagePermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy.html#tenant_id KeyVaultAccessPolicyA#tenant_id}
  */
  readonly tenantId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy.html#timeouts KeyVaultAccessPolicyA#timeouts}
  */
  readonly timeouts?: KeyVaultAccessPolicyTimeouts;
}
export interface KeyVaultAccessPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy.html#create KeyVaultAccessPolicyA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy.html#delete KeyVaultAccessPolicyA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy.html#read KeyVaultAccessPolicyA#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy.html#update KeyVaultAccessPolicyA#update}
  */
  readonly update?: string;
}

function keyVaultAccessPolicyTimeoutsToTerraform(struct?: KeyVaultAccessPolicyTimeoutsOutputReference | KeyVaultAccessPolicyTimeouts): any {
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

export class KeyVaultAccessPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy.html azurerm_key_vault_access_policy}
*/
export class KeyVaultAccessPolicyA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_key_vault_access_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy.html azurerm_key_vault_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyVaultAccessPolicyAConfig
  */
  public constructor(scope: Construct, id: string, config: KeyVaultAccessPolicyAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationId = config.applicationId;
    this._certificatePermissions = config.certificatePermissions;
    this._keyPermissions = config.keyPermissions;
    this._keyVaultId = config.keyVaultId;
    this._objectId = config.objectId;
    this._secretPermissions = config.secretPermissions;
    this._storagePermissions = config.storagePermissions;
    this._tenantId = config.tenantId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string | undefined; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string | undefined) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId
  }

  // certificate_permissions - computed: false, optional: true, required: false
  private _certificatePermissions?: string[] | undefined; 
  public get certificatePermissions() {
    return this.getListAttribute('certificate_permissions');
  }
  public set certificatePermissions(value: string[] | undefined) {
    this._certificatePermissions = value;
  }
  public resetCertificatePermissions() {
    this._certificatePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePermissionsInput() {
    return this._certificatePermissions
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_permissions - computed: false, optional: true, required: false
  private _keyPermissions?: string[] | undefined; 
  public get keyPermissions() {
    return this.getListAttribute('key_permissions');
  }
  public set keyPermissions(value: string[] | undefined) {
    this._keyPermissions = value;
  }
  public resetKeyPermissions() {
    this._keyPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPermissionsInput() {
    return this._keyPermissions
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId
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
    return this._objectId
  }

  // secret_permissions - computed: false, optional: true, required: false
  private _secretPermissions?: string[] | undefined; 
  public get secretPermissions() {
    return this.getListAttribute('secret_permissions');
  }
  public set secretPermissions(value: string[] | undefined) {
    this._secretPermissions = value;
  }
  public resetSecretPermissions() {
    this._secretPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretPermissionsInput() {
    return this._secretPermissions
  }

  // storage_permissions - computed: false, optional: true, required: false
  private _storagePermissions?: string[] | undefined; 
  public get storagePermissions() {
    return this.getListAttribute('storage_permissions');
  }
  public set storagePermissions(value: string[] | undefined) {
    this._storagePermissions = value;
  }
  public resetStoragePermissions() {
    this._storagePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePermissionsInput() {
    return this._storagePermissions
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
    return this._tenantId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KeyVaultAccessPolicyTimeouts | undefined; 
  private __timeoutsOutput = new KeyVaultAccessPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: KeyVaultAccessPolicyTimeouts | undefined) {
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
      application_id: cdktf.stringToTerraform(this._applicationId),
      certificate_permissions: cdktf.listMapper(cdktf.stringToTerraform)(this._certificatePermissions),
      key_permissions: cdktf.listMapper(cdktf.stringToTerraform)(this._keyPermissions),
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      object_id: cdktf.stringToTerraform(this._objectId),
      secret_permissions: cdktf.listMapper(cdktf.stringToTerraform)(this._secretPermissions),
      storage_permissions: cdktf.listMapper(cdktf.stringToTerraform)(this._storagePermissions),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      timeouts: keyVaultAccessPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}

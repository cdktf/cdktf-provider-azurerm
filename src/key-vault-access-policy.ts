// https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyVaultAccessPolicyAConfig extends cdktf.TerraformMetaArguments {
  readonly applicationId?: string;
  readonly certificatePermissions?: string[];
  readonly keyPermissions?: string[];
  readonly keyVaultId: string;
  readonly objectId: string;
  readonly secretPermissions?: string[];
  readonly storagePermissions?: string[];
  readonly tenantId: string;
  /** timeouts block */
  readonly timeouts?: KeyVaultAccessPolicyTimeouts;
}
export interface KeyVaultAccessPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function keyVaultAccessPolicyTimeoutsToTerraform(struct?: KeyVaultAccessPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class KeyVaultAccessPolicyA extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _applicationId?: string;
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string ) {
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
  private _certificatePermissions?: string[];
  public get certificatePermissions() {
    return this.getListAttribute('certificate_permissions');
  }
  public set certificatePermissions(value: string[] ) {
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
  private _keyPermissions?: string[];
  public get keyPermissions() {
    return this.getListAttribute('key_permissions');
  }
  public set keyPermissions(value: string[] ) {
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
  private _keyVaultId: string;
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
  private _objectId: string;
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
  private _secretPermissions?: string[];
  public get secretPermissions() {
    return this.getListAttribute('secret_permissions');
  }
  public set secretPermissions(value: string[] ) {
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
  private _storagePermissions?: string[];
  public get storagePermissions() {
    return this.getListAttribute('storage_permissions');
  }
  public set storagePermissions(value: string[] ) {
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
  private _tenantId: string;
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
  private _timeouts?: KeyVaultAccessPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KeyVaultAccessPolicyTimeouts ) {
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

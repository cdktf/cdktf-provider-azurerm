// https://www.terraform.io/docs/providers/azurerm/r/key_vault_access_policy_a.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KeyVaultAccessPolicyAConfig extends TerraformMetaArguments {
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

// Resource

export class KeyVaultAccessPolicyA extends TerraformResource {

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
    return this._applicationId;
  }
  public set applicationId(value: string | undefined) {
    this._applicationId = value;
  }

  // certificate_permissions - computed: false, optional: true, required: false
  private _certificatePermissions?: string[];
  public get certificatePermissions() {
    return this._certificatePermissions;
  }
  public set certificatePermissions(value: string[] | undefined) {
    this._certificatePermissions = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_permissions - computed: false, optional: true, required: false
  private _keyPermissions?: string[];
  public get keyPermissions() {
    return this._keyPermissions;
  }
  public set keyPermissions(value: string[] | undefined) {
    this._keyPermissions = value;
  }

  // key_vault_id - computed: false, optional: false, required: true
  private _keyVaultId: string;
  public get keyVaultId() {
    return this._keyVaultId;
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId: string;
  public get objectId() {
    return this._objectId;
  }
  public set objectId(value: string) {
    this._objectId = value;
  }

  // secret_permissions - computed: false, optional: true, required: false
  private _secretPermissions?: string[];
  public get secretPermissions() {
    return this._secretPermissions;
  }
  public set secretPermissions(value: string[] | undefined) {
    this._secretPermissions = value;
  }

  // storage_permissions - computed: false, optional: true, required: false
  private _storagePermissions?: string[];
  public get storagePermissions() {
    return this._storagePermissions;
  }
  public set storagePermissions(value: string[] | undefined) {
    this._storagePermissions = value;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId: string;
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KeyVaultAccessPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KeyVaultAccessPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: this._applicationId,
      certificate_permissions: this._certificatePermissions,
      key_permissions: this._keyPermissions,
      key_vault_id: this._keyVaultId,
      object_id: this._objectId,
      secret_permissions: this._secretPermissions,
      storage_permissions: this._storagePermissions,
      tenant_id: this._tenantId,
      timeouts: this._timeouts,
    };
  }
}

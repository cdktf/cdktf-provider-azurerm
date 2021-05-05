// https://www.terraform.io/docs/providers/azurerm/r/mssql_server_transparent_data_encryption.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlServerTransparentDataEncryptionConfig extends cdktf.TerraformMetaArguments {
  readonly keyVaultKeyId?: string;
  readonly serverId: string;
  /** timeouts block */
  readonly timeouts?: MssqlServerTransparentDataEncryptionTimeouts;
}
export interface MssqlServerTransparentDataEncryptionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function mssqlServerTransparentDataEncryptionTimeoutsToTerraform(struct?: MssqlServerTransparentDataEncryptionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class MssqlServerTransparentDataEncryption extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: MssqlServerTransparentDataEncryptionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_server_transparent_data_encryption',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyVaultKeyId = config.keyVaultKeyId;
    this._serverId = config.serverId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_key_id - computed: false, optional: true, required: false
  private _keyVaultKeyId?: string;
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string ) {
    this._keyVaultKeyId = value;
  }
  public resetKeyVaultKeyId() {
    this._keyVaultKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId: string;
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MssqlServerTransparentDataEncryptionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MssqlServerTransparentDataEncryptionTimeouts ) {
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
      key_vault_key_id: cdktf.stringToTerraform(this._keyVaultKeyId),
      server_id: cdktf.stringToTerraform(this._serverId),
      timeouts: mssqlServerTransparentDataEncryptionTimeoutsToTerraform(this._timeouts),
    };
  }
}

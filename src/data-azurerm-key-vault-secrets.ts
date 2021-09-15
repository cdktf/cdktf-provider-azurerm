// https://www.terraform.io/docs/providers/azurerm/d/key_vault_secrets.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermKeyVaultSecretsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_secrets.html#key_vault_id DataAzurermKeyVaultSecrets#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_secrets.html#timeouts DataAzurermKeyVaultSecrets#timeouts}
  */
  readonly timeouts?: DataAzurermKeyVaultSecretsTimeouts;
}
export interface DataAzurermKeyVaultSecretsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_secrets.html#read DataAzurermKeyVaultSecrets#read}
  */
  readonly read?: string;
}

function dataAzurermKeyVaultSecretsTimeoutsToTerraform(struct?: DataAzurermKeyVaultSecretsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_secrets.html azurerm_key_vault_secrets}
*/
export class DataAzurermKeyVaultSecrets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_key_vault_secrets";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/key_vault_secrets.html azurerm_key_vault_secrets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermKeyVaultSecretsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermKeyVaultSecretsConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_key_vault_secrets',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._keyVaultId = config.keyVaultId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermKeyVaultSecretsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermKeyVaultSecretsTimeouts ) {
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
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      timeouts: dataAzurermKeyVaultSecretsTimeoutsToTerraform(this._timeouts),
    };
  }
}

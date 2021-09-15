// https://www.terraform.io/docs/providers/azurerm/r/cognitive_account_customer_managed_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitiveAccountCustomerManagedKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account_customer_managed_key.html#cognitive_account_id CognitiveAccountCustomerManagedKey#cognitive_account_id}
  */
  readonly cognitiveAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account_customer_managed_key.html#identity_client_id CognitiveAccountCustomerManagedKey#identity_client_id}
  */
  readonly identityClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account_customer_managed_key.html#key_vault_key_id CognitiveAccountCustomerManagedKey#key_vault_key_id}
  */
  readonly keyVaultKeyId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account_customer_managed_key.html#timeouts CognitiveAccountCustomerManagedKey#timeouts}
  */
  readonly timeouts?: CognitiveAccountCustomerManagedKeyTimeouts;
}
export interface CognitiveAccountCustomerManagedKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account_customer_managed_key.html#create CognitiveAccountCustomerManagedKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account_customer_managed_key.html#delete CognitiveAccountCustomerManagedKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account_customer_managed_key.html#read CognitiveAccountCustomerManagedKey#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account_customer_managed_key.html#update CognitiveAccountCustomerManagedKey#update}
  */
  readonly update?: string;
}

function cognitiveAccountCustomerManagedKeyTimeoutsToTerraform(struct?: CognitiveAccountCustomerManagedKeyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account_customer_managed_key.html azurerm_cognitive_account_customer_managed_key}
*/
export class CognitiveAccountCustomerManagedKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_cognitive_account_customer_managed_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/cognitive_account_customer_managed_key.html azurerm_cognitive_account_customer_managed_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitiveAccountCustomerManagedKeyConfig
  */
  public constructor(scope: Construct, id: string, config: CognitiveAccountCustomerManagedKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cognitive_account_customer_managed_key',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cognitiveAccountId = config.cognitiveAccountId;
    this._identityClientId = config.identityClientId;
    this._keyVaultKeyId = config.keyVaultKeyId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cognitive_account_id - computed: false, optional: false, required: true
  private _cognitiveAccountId: string;
  public get cognitiveAccountId() {
    return this.getStringAttribute('cognitive_account_id');
  }
  public set cognitiveAccountId(value: string) {
    this._cognitiveAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitiveAccountIdInput() {
    return this._cognitiveAccountId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_client_id - computed: false, optional: true, required: false
  private _identityClientId?: string;
  public get identityClientId() {
    return this.getStringAttribute('identity_client_id');
  }
  public set identityClientId(value: string ) {
    this._identityClientId = value;
  }
  public resetIdentityClientId() {
    this._identityClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityClientIdInput() {
    return this._identityClientId
  }

  // key_vault_key_id - computed: false, optional: false, required: true
  private _keyVaultKeyId: string;
  public get keyVaultKeyId() {
    return this.getStringAttribute('key_vault_key_id');
  }
  public set keyVaultKeyId(value: string) {
    this._keyVaultKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdInput() {
    return this._keyVaultKeyId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CognitiveAccountCustomerManagedKeyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CognitiveAccountCustomerManagedKeyTimeouts ) {
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
      cognitive_account_id: cdktf.stringToTerraform(this._cognitiveAccountId),
      identity_client_id: cdktf.stringToTerraform(this._identityClientId),
      key_vault_key_id: cdktf.stringToTerraform(this._keyVaultKeyId),
      timeouts: cognitiveAccountCustomerManagedKeyTimeoutsToTerraform(this._timeouts),
    };
  }
}

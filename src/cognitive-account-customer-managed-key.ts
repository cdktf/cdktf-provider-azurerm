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

function cognitiveAccountCustomerManagedKeyTimeoutsToTerraform(struct?: CognitiveAccountCustomerManagedKeyTimeoutsOutputReference | CognitiveAccountCustomerManagedKeyTimeouts): any {
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

export class CognitiveAccountCustomerManagedKeyTimeoutsOutputReference extends cdktf.ComplexObject {
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
  private _cognitiveAccountId?: string; 
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
  private _identityClientId?: string | undefined; 
  public get identityClientId() {
    return this.getStringAttribute('identity_client_id');
  }
  public set identityClientId(value: string | undefined) {
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
  private _keyVaultKeyId?: string; 
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
  private _timeouts?: CognitiveAccountCustomerManagedKeyTimeouts | undefined; 
  private __timeoutsOutput = new CognitiveAccountCustomerManagedKeyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CognitiveAccountCustomerManagedKeyTimeouts | undefined) {
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

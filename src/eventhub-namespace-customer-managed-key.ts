// https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventhubNamespaceCustomerManagedKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html#eventhub_namespace_id EventhubNamespaceCustomerManagedKey#eventhub_namespace_id}
  */
  readonly eventhubNamespaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html#key_vault_key_ids EventhubNamespaceCustomerManagedKey#key_vault_key_ids}
  */
  readonly keyVaultKeyIds: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html#timeouts EventhubNamespaceCustomerManagedKey#timeouts}
  */
  readonly timeouts?: EventhubNamespaceCustomerManagedKeyTimeouts;
}
export interface EventhubNamespaceCustomerManagedKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html#create EventhubNamespaceCustomerManagedKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html#delete EventhubNamespaceCustomerManagedKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html#read EventhubNamespaceCustomerManagedKey#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html#update EventhubNamespaceCustomerManagedKey#update}
  */
  readonly update?: string;
}

function eventhubNamespaceCustomerManagedKeyTimeoutsToTerraform(struct?: EventhubNamespaceCustomerManagedKeyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html azurerm_eventhub_namespace_customer_managed_key}
*/
export class EventhubNamespaceCustomerManagedKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_eventhub_namespace_customer_managed_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_customer_managed_key.html azurerm_eventhub_namespace_customer_managed_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventhubNamespaceCustomerManagedKeyConfig
  */
  public constructor(scope: Construct, id: string, config: EventhubNamespaceCustomerManagedKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventhub_namespace_customer_managed_key',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eventhubNamespaceId = config.eventhubNamespaceId;
    this._keyVaultKeyIds = config.keyVaultKeyIds;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eventhub_namespace_id - computed: false, optional: false, required: true
  private _eventhubNamespaceId: string;
  public get eventhubNamespaceId() {
    return this.getStringAttribute('eventhub_namespace_id');
  }
  public set eventhubNamespaceId(value: string) {
    this._eventhubNamespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubNamespaceIdInput() {
    return this._eventhubNamespaceId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_vault_key_ids - computed: false, optional: false, required: true
  private _keyVaultKeyIds: string[];
  public get keyVaultKeyIds() {
    return this.getListAttribute('key_vault_key_ids');
  }
  public set keyVaultKeyIds(value: string[]) {
    this._keyVaultKeyIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultKeyIdsInput() {
    return this._keyVaultKeyIds
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventhubNamespaceCustomerManagedKeyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EventhubNamespaceCustomerManagedKeyTimeouts ) {
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
      eventhub_namespace_id: cdktf.stringToTerraform(this._eventhubNamespaceId),
      key_vault_key_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._keyVaultKeyIds),
      timeouts: eventhubNamespaceCustomerManagedKeyTimeoutsToTerraform(this._timeouts),
    };
  }
}

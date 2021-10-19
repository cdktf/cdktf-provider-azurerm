// https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster_customer_managed_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KustoClusterCustomerManagedKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster_customer_managed_key.html#cluster_id KustoClusterCustomerManagedKey#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster_customer_managed_key.html#key_name KustoClusterCustomerManagedKey#key_name}
  */
  readonly keyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster_customer_managed_key.html#key_vault_id KustoClusterCustomerManagedKey#key_vault_id}
  */
  readonly keyVaultId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster_customer_managed_key.html#key_version KustoClusterCustomerManagedKey#key_version}
  */
  readonly keyVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster_customer_managed_key.html#user_identity KustoClusterCustomerManagedKey#user_identity}
  */
  readonly userIdentity?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster_customer_managed_key.html#timeouts KustoClusterCustomerManagedKey#timeouts}
  */
  readonly timeouts?: KustoClusterCustomerManagedKeyTimeouts;
}
export interface KustoClusterCustomerManagedKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster_customer_managed_key.html#create KustoClusterCustomerManagedKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster_customer_managed_key.html#delete KustoClusterCustomerManagedKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster_customer_managed_key.html#read KustoClusterCustomerManagedKey#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster_customer_managed_key.html#update KustoClusterCustomerManagedKey#update}
  */
  readonly update?: string;
}

function kustoClusterCustomerManagedKeyTimeoutsToTerraform(struct?: KustoClusterCustomerManagedKeyTimeoutsOutputReference | KustoClusterCustomerManagedKeyTimeouts): any {
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

export class KustoClusterCustomerManagedKeyTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster_customer_managed_key.html azurerm_kusto_cluster_customer_managed_key}
*/
export class KustoClusterCustomerManagedKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_kusto_cluster_customer_managed_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/kusto_cluster_customer_managed_key.html azurerm_kusto_cluster_customer_managed_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KustoClusterCustomerManagedKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KustoClusterCustomerManagedKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kusto_cluster_customer_managed_key',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterId = config.clusterId;
    this._keyName = config.keyName;
    this._keyVaultId = config.keyVaultId;
    this._keyVersion = config.keyVersion;
    this._userIdentity = config.userIdentity;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName
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

  // key_version - computed: false, optional: false, required: true
  private _keyVersion?: string; 
  public get keyVersion() {
    return this.getStringAttribute('key_version');
  }
  public set keyVersion(value: string) {
    this._keyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionInput() {
    return this._keyVersion
  }

  // user_identity - computed: false, optional: true, required: false
  private _userIdentity?: string | undefined; 
  public get userIdentity() {
    return this.getStringAttribute('user_identity');
  }
  public set userIdentity(value: string | undefined) {
    this._userIdentity = value;
  }
  public resetUserIdentity() {
    this._userIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentityInput() {
    return this._userIdentity
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KustoClusterCustomerManagedKeyTimeouts | undefined; 
  private __timeoutsOutput = new KustoClusterCustomerManagedKeyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: KustoClusterCustomerManagedKeyTimeouts | undefined) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      key_name: cdktf.stringToTerraform(this._keyName),
      key_vault_id: cdktf.stringToTerraform(this._keyVaultId),
      key_version: cdktf.stringToTerraform(this._keyVersion),
      user_identity: cdktf.stringToTerraform(this._userIdentity),
      timeouts: kustoClusterCustomerManagedKeyTimeoutsToTerraform(this._timeouts),
    };
  }
}

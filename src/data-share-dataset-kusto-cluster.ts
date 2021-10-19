// https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataShareDatasetKustoClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_cluster.html#kusto_cluster_id DataShareDatasetKustoCluster#kusto_cluster_id}
  */
  readonly kustoClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_cluster.html#name DataShareDatasetKustoCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_cluster.html#share_id DataShareDatasetKustoCluster#share_id}
  */
  readonly shareId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_cluster.html#timeouts DataShareDatasetKustoCluster#timeouts}
  */
  readonly timeouts?: DataShareDatasetKustoClusterTimeouts;
}
export interface DataShareDatasetKustoClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_cluster.html#create DataShareDatasetKustoCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_cluster.html#delete DataShareDatasetKustoCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_cluster.html#read DataShareDatasetKustoCluster#read}
  */
  readonly read?: string;
}

function dataShareDatasetKustoClusterTimeoutsToTerraform(struct?: DataShareDatasetKustoClusterTimeoutsOutputReference | DataShareDatasetKustoClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataShareDatasetKustoClusterTimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_cluster.html azurerm_data_share_dataset_kusto_cluster}
*/
export class DataShareDatasetKustoCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_share_dataset_kusto_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_share_dataset_kusto_cluster.html azurerm_data_share_dataset_kusto_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataShareDatasetKustoClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataShareDatasetKustoClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_share_dataset_kusto_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._kustoClusterId = config.kustoClusterId;
    this._name = config.name;
    this._shareId = config.shareId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kusto_cluster_id - computed: false, optional: false, required: true
  private _kustoClusterId?: string; 
  public get kustoClusterId() {
    return this.getStringAttribute('kusto_cluster_id');
  }
  public set kustoClusterId(value: string) {
    this._kustoClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kustoClusterIdInput() {
    return this._kustoClusterId
  }

  // kusto_cluster_location - computed: true, optional: false, required: false
  public get kustoClusterLocation() {
    return this.getStringAttribute('kusto_cluster_location');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // share_id - computed: false, optional: false, required: true
  private _shareId?: string; 
  public get shareId() {
    return this.getStringAttribute('share_id');
  }
  public set shareId(value: string) {
    this._shareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareIdInput() {
    return this._shareId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataShareDatasetKustoClusterTimeouts | undefined; 
  private __timeoutsOutput = new DataShareDatasetKustoClusterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataShareDatasetKustoClusterTimeouts | undefined) {
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
      kusto_cluster_id: cdktf.stringToTerraform(this._kustoClusterId),
      name: cdktf.stringToTerraform(this._name),
      share_id: cdktf.stringToTerraform(this._shareId),
      timeouts: dataShareDatasetKustoClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}

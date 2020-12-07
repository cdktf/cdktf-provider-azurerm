// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_eventhub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermEventhubConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly namespaceName: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermEventhubTimeouts;
}
export interface DataAzurermEventhubTimeouts {
  readonly read?: string;
}

function dataAzurermEventhubTimeoutsToTerraform(struct?: DataAzurermEventhubTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermEventhub extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermEventhubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventhub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName: string;
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName
  }

  // partition_count - computed: true, optional: false, required: false
  public get partitionCount() {
    return this.getNumberAttribute('partition_count');
  }

  // partition_ids - computed: true, optional: false, required: false
  public get partitionIds() {
    return this.getListAttribute('partition_ids');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermEventhubTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermEventhubTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermEventhubTimeoutsToTerraform(this._timeouts),
    };
  }
}

// https://www.terraform.io/docs/providers/azurerm/d/mariadb_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermMariadbServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/mariadb_server.html#name DataAzurermMariadbServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/mariadb_server.html#resource_group_name DataAzurermMariadbServer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/mariadb_server.html#timeouts DataAzurermMariadbServer#timeouts}
  */
  readonly timeouts?: DataAzurermMariadbServerTimeouts;
}
export class DataAzurermMariadbServerStorageProfile extends cdktf.ComplexComputedList {

  // auto_grow - computed: true, optional: false, required: false
  public get autoGrow() {
    return this.getStringAttribute('auto_grow');
  }

  // backup_retention_days - computed: true, optional: false, required: false
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }

  // geo_redundant_backup - computed: true, optional: false, required: false
  public get geoRedundantBackup() {
    return this.getStringAttribute('geo_redundant_backup');
  }

  // storage_mb - computed: true, optional: false, required: false
  public get storageMb() {
    return this.getNumberAttribute('storage_mb');
  }
}
export interface DataAzurermMariadbServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/mariadb_server.html#read DataAzurermMariadbServer#read}
  */
  readonly read?: string;
}

function dataAzurermMariadbServerTimeoutsToTerraform(struct?: DataAzurermMariadbServerTimeoutsOutputReference | DataAzurermMariadbServerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermMariadbServerTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/mariadb_server.html azurerm_mariadb_server}
*/
export class DataAzurermMariadbServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_mariadb_server";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/mariadb_server.html azurerm_mariadb_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermMariadbServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermMariadbServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mariadb_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_login - computed: true, optional: false, required: false
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
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

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // ssl_enforcement - computed: true, optional: false, required: false
  public get sslEnforcement() {
    return this.getStringAttribute('ssl_enforcement');
  }

  // storage_profile - computed: true, optional: false, required: false
  public storageProfile(index: string) {
    return new DataAzurermMariadbServerStorageProfile(this, 'storage_profile', index);
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermMariadbServerTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermMariadbServerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermMariadbServerTimeouts | undefined) {
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
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermMariadbServerTimeoutsToTerraform(this._timeouts),
    };
  }
}

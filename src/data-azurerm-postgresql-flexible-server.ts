// https://www.terraform.io/docs/providers/azurerm/d/postgresql_flexible_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermPostgresqlFlexibleServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/postgresql_flexible_server.html#name DataAzurermPostgresqlFlexibleServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/postgresql_flexible_server.html#resource_group_name DataAzurermPostgresqlFlexibleServer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/postgresql_flexible_server.html#timeouts DataAzurermPostgresqlFlexibleServer#timeouts}
  */
  readonly timeouts?: DataAzurermPostgresqlFlexibleServerTimeouts;
}
export interface DataAzurermPostgresqlFlexibleServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/postgresql_flexible_server.html#read DataAzurermPostgresqlFlexibleServer#read}
  */
  readonly read?: string;
}

function dataAzurermPostgresqlFlexibleServerTimeoutsToTerraform(struct?: DataAzurermPostgresqlFlexibleServerTimeoutsOutputReference | DataAzurermPostgresqlFlexibleServerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermPostgresqlFlexibleServerTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/postgresql_flexible_server.html azurerm_postgresql_flexible_server}
*/
export class DataAzurermPostgresqlFlexibleServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_postgresql_flexible_server";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/postgresql_flexible_server.html azurerm_postgresql_flexible_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermPostgresqlFlexibleServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermPostgresqlFlexibleServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_postgresql_flexible_server',
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

  // backup_retention_days - computed: true, optional: false, required: false
  public get backupRetentionDays() {
    return this.getNumberAttribute('backup_retention_days');
  }

  // cmk_enabled - computed: true, optional: false, required: false
  public get cmkEnabled() {
    return this.getStringAttribute('cmk_enabled');
  }

  // delegated_subnet_id - computed: true, optional: false, required: false
  public get delegatedSubnetId() {
    return this.getStringAttribute('delegated_subnet_id');
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

  // public_network_access_enabled - computed: true, optional: false, required: false
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled') as any;
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

  // storage_mb - computed: true, optional: false, required: false
  public get storageMb() {
    return this.getNumberAttribute('storage_mb');
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
  private _timeouts?: DataAzurermPostgresqlFlexibleServerTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermPostgresqlFlexibleServerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermPostgresqlFlexibleServerTimeouts | undefined) {
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
      timeouts: dataAzurermPostgresqlFlexibleServerTimeoutsToTerraform(this._timeouts),
    };
  }
}

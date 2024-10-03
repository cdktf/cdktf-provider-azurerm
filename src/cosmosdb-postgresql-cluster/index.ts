// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbPostgresqlClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#administrator_login_password CosmosdbPostgresqlCluster#administrator_login_password}
  */
  readonly administratorLoginPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#citus_version CosmosdbPostgresqlCluster#citus_version}
  */
  readonly citusVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_public_ip_access_enabled CosmosdbPostgresqlCluster#coordinator_public_ip_access_enabled}
  */
  readonly coordinatorPublicIpAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_server_edition CosmosdbPostgresqlCluster#coordinator_server_edition}
  */
  readonly coordinatorServerEdition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_storage_quota_in_mb CosmosdbPostgresqlCluster#coordinator_storage_quota_in_mb}
  */
  readonly coordinatorStorageQuotaInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#coordinator_vcore_count CosmosdbPostgresqlCluster#coordinator_vcore_count}
  */
  readonly coordinatorVcoreCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#ha_enabled CosmosdbPostgresqlCluster#ha_enabled}
  */
  readonly haEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#id CosmosdbPostgresqlCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#location CosmosdbPostgresqlCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#name CosmosdbPostgresqlCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#node_count CosmosdbPostgresqlCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#node_public_ip_access_enabled CosmosdbPostgresqlCluster#node_public_ip_access_enabled}
  */
  readonly nodePublicIpAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#node_server_edition CosmosdbPostgresqlCluster#node_server_edition}
  */
  readonly nodeServerEdition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#node_storage_quota_in_mb CosmosdbPostgresqlCluster#node_storage_quota_in_mb}
  */
  readonly nodeStorageQuotaInMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#node_vcores CosmosdbPostgresqlCluster#node_vcores}
  */
  readonly nodeVcores?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#point_in_time_in_utc CosmosdbPostgresqlCluster#point_in_time_in_utc}
  */
  readonly pointInTimeInUtc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#preferred_primary_zone CosmosdbPostgresqlCluster#preferred_primary_zone}
  */
  readonly preferredPrimaryZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#resource_group_name CosmosdbPostgresqlCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#shards_on_coordinator_enabled CosmosdbPostgresqlCluster#shards_on_coordinator_enabled}
  */
  readonly shardsOnCoordinatorEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#source_location CosmosdbPostgresqlCluster#source_location}
  */
  readonly sourceLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#source_resource_id CosmosdbPostgresqlCluster#source_resource_id}
  */
  readonly sourceResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#sql_version CosmosdbPostgresqlCluster#sql_version}
  */
  readonly sqlVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#tags CosmosdbPostgresqlCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#maintenance_window CosmosdbPostgresqlCluster#maintenance_window}
  */
  readonly maintenanceWindow?: CosmosdbPostgresqlClusterMaintenanceWindow;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#timeouts CosmosdbPostgresqlCluster#timeouts}
  */
  readonly timeouts?: CosmosdbPostgresqlClusterTimeouts;
}
export interface CosmosdbPostgresqlClusterServers {
}

export function cosmosdbPostgresqlClusterServersToTerraform(struct?: CosmosdbPostgresqlClusterServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cosmosdbPostgresqlClusterServersToHclTerraform(struct?: CosmosdbPostgresqlClusterServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CosmosdbPostgresqlClusterServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CosmosdbPostgresqlClusterServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbPostgresqlClusterServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class CosmosdbPostgresqlClusterServersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CosmosdbPostgresqlClusterServersOutputReference {
    return new CosmosdbPostgresqlClusterServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosmosdbPostgresqlClusterMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#day_of_week CosmosdbPostgresqlCluster#day_of_week}
  */
  readonly dayOfWeek?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#start_hour CosmosdbPostgresqlCluster#start_hour}
  */
  readonly startHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#start_minute CosmosdbPostgresqlCluster#start_minute}
  */
  readonly startMinute?: number;
}

export function cosmosdbPostgresqlClusterMaintenanceWindowToTerraform(struct?: CosmosdbPostgresqlClusterMaintenanceWindowOutputReference | CosmosdbPostgresqlClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.numberToTerraform(struct!.dayOfWeek),
    start_hour: cdktf.numberToTerraform(struct!.startHour),
    start_minute: cdktf.numberToTerraform(struct!.startMinute),
  }
}


export function cosmosdbPostgresqlClusterMaintenanceWindowToHclTerraform(struct?: CosmosdbPostgresqlClusterMaintenanceWindowOutputReference | CosmosdbPostgresqlClusterMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.numberToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_hour: {
      value: cdktf.numberToHclTerraform(struct!.startHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_minute: {
      value: cdktf.numberToHclTerraform(struct!.startMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbPostgresqlClusterMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosmosdbPostgresqlClusterMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._startHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHour = this._startHour;
    }
    if (this._startMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMinute = this._startMinute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbPostgresqlClusterMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._startHour = undefined;
      this._startMinute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._startHour = value.startHour;
      this._startMinute = value.startMinute;
    }
  }

  // day_of_week - computed: false, optional: true, required: false
  private _dayOfWeek?: number; 
  public get dayOfWeek() {
    return this.getNumberAttribute('day_of_week');
  }
  public set dayOfWeek(value: number) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // start_hour - computed: false, optional: true, required: false
  private _startHour?: number; 
  public get startHour() {
    return this.getNumberAttribute('start_hour');
  }
  public set startHour(value: number) {
    this._startHour = value;
  }
  public resetStartHour() {
    this._startHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startHourInput() {
    return this._startHour;
  }

  // start_minute - computed: false, optional: true, required: false
  private _startMinute?: number; 
  public get startMinute() {
    return this.getNumberAttribute('start_minute');
  }
  public set startMinute(value: number) {
    this._startMinute = value;
  }
  public resetStartMinute() {
    this._startMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startMinuteInput() {
    return this._startMinute;
  }
}
export interface CosmosdbPostgresqlClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#create CosmosdbPostgresqlCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#delete CosmosdbPostgresqlCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#read CosmosdbPostgresqlCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#update CosmosdbPostgresqlCluster#update}
  */
  readonly update?: string;
}

export function cosmosdbPostgresqlClusterTimeoutsToTerraform(struct?: CosmosdbPostgresqlClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function cosmosdbPostgresqlClusterTimeoutsToHclTerraform(struct?: CosmosdbPostgresqlClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosmosdbPostgresqlClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CosmosdbPostgresqlClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbPostgresqlClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster azurerm_cosmosdb_postgresql_cluster}
*/
export class CosmosdbPostgresqlCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_cosmosdb_postgresql_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CosmosdbPostgresqlCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CosmosdbPostgresqlCluster to import
  * @param importFromId The id of the existing CosmosdbPostgresqlCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CosmosdbPostgresqlCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_cosmosdb_postgresql_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/cosmosdb_postgresql_cluster azurerm_cosmosdb_postgresql_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosmosdbPostgresqlClusterConfig
  */
  public constructor(scope: Construct, id: string, config: CosmosdbPostgresqlClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_postgresql_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._administratorLoginPassword = config.administratorLoginPassword;
    this._citusVersion = config.citusVersion;
    this._coordinatorPublicIpAccessEnabled = config.coordinatorPublicIpAccessEnabled;
    this._coordinatorServerEdition = config.coordinatorServerEdition;
    this._coordinatorStorageQuotaInMb = config.coordinatorStorageQuotaInMb;
    this._coordinatorVcoreCount = config.coordinatorVcoreCount;
    this._haEnabled = config.haEnabled;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._nodePublicIpAccessEnabled = config.nodePublicIpAccessEnabled;
    this._nodeServerEdition = config.nodeServerEdition;
    this._nodeStorageQuotaInMb = config.nodeStorageQuotaInMb;
    this._nodeVcores = config.nodeVcores;
    this._pointInTimeInUtc = config.pointInTimeInUtc;
    this._preferredPrimaryZone = config.preferredPrimaryZone;
    this._resourceGroupName = config.resourceGroupName;
    this._shardsOnCoordinatorEnabled = config.shardsOnCoordinatorEnabled;
    this._sourceLocation = config.sourceLocation;
    this._sourceResourceId = config.sourceResourceId;
    this._sqlVersion = config.sqlVersion;
    this._tags = config.tags;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_login_password - computed: false, optional: true, required: false
  private _administratorLoginPassword?: string; 
  public get administratorLoginPassword() {
    return this.getStringAttribute('administrator_login_password');
  }
  public set administratorLoginPassword(value: string) {
    this._administratorLoginPassword = value;
  }
  public resetAdministratorLoginPassword() {
    this._administratorLoginPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginPasswordInput() {
    return this._administratorLoginPassword;
  }

  // citus_version - computed: true, optional: true, required: false
  private _citusVersion?: string; 
  public get citusVersion() {
    return this.getStringAttribute('citus_version');
  }
  public set citusVersion(value: string) {
    this._citusVersion = value;
  }
  public resetCitusVersion() {
    this._citusVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get citusVersionInput() {
    return this._citusVersion;
  }

  // coordinator_public_ip_access_enabled - computed: false, optional: true, required: false
  private _coordinatorPublicIpAccessEnabled?: boolean | cdktf.IResolvable; 
  public get coordinatorPublicIpAccessEnabled() {
    return this.getBooleanAttribute('coordinator_public_ip_access_enabled');
  }
  public set coordinatorPublicIpAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._coordinatorPublicIpAccessEnabled = value;
  }
  public resetCoordinatorPublicIpAccessEnabled() {
    this._coordinatorPublicIpAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatorPublicIpAccessEnabledInput() {
    return this._coordinatorPublicIpAccessEnabled;
  }

  // coordinator_server_edition - computed: false, optional: true, required: false
  private _coordinatorServerEdition?: string; 
  public get coordinatorServerEdition() {
    return this.getStringAttribute('coordinator_server_edition');
  }
  public set coordinatorServerEdition(value: string) {
    this._coordinatorServerEdition = value;
  }
  public resetCoordinatorServerEdition() {
    this._coordinatorServerEdition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatorServerEditionInput() {
    return this._coordinatorServerEdition;
  }

  // coordinator_storage_quota_in_mb - computed: false, optional: true, required: false
  private _coordinatorStorageQuotaInMb?: number; 
  public get coordinatorStorageQuotaInMb() {
    return this.getNumberAttribute('coordinator_storage_quota_in_mb');
  }
  public set coordinatorStorageQuotaInMb(value: number) {
    this._coordinatorStorageQuotaInMb = value;
  }
  public resetCoordinatorStorageQuotaInMb() {
    this._coordinatorStorageQuotaInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatorStorageQuotaInMbInput() {
    return this._coordinatorStorageQuotaInMb;
  }

  // coordinator_vcore_count - computed: false, optional: true, required: false
  private _coordinatorVcoreCount?: number; 
  public get coordinatorVcoreCount() {
    return this.getNumberAttribute('coordinator_vcore_count');
  }
  public set coordinatorVcoreCount(value: number) {
    this._coordinatorVcoreCount = value;
  }
  public resetCoordinatorVcoreCount() {
    this._coordinatorVcoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatorVcoreCountInput() {
    return this._coordinatorVcoreCount;
  }

  // earliest_restore_time - computed: true, optional: false, required: false
  public get earliestRestoreTime() {
    return this.getStringAttribute('earliest_restore_time');
  }

  // ha_enabled - computed: false, optional: true, required: false
  private _haEnabled?: boolean | cdktf.IResolvable; 
  public get haEnabled() {
    return this.getBooleanAttribute('ha_enabled');
  }
  public set haEnabled(value: boolean | cdktf.IResolvable) {
    this._haEnabled = value;
  }
  public resetHaEnabled() {
    this._haEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haEnabledInput() {
    return this._haEnabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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
    return this._name;
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_public_ip_access_enabled - computed: false, optional: true, required: false
  private _nodePublicIpAccessEnabled?: boolean | cdktf.IResolvable; 
  public get nodePublicIpAccessEnabled() {
    return this.getBooleanAttribute('node_public_ip_access_enabled');
  }
  public set nodePublicIpAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._nodePublicIpAccessEnabled = value;
  }
  public resetNodePublicIpAccessEnabled() {
    this._nodePublicIpAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublicIpAccessEnabledInput() {
    return this._nodePublicIpAccessEnabled;
  }

  // node_server_edition - computed: false, optional: true, required: false
  private _nodeServerEdition?: string; 
  public get nodeServerEdition() {
    return this.getStringAttribute('node_server_edition');
  }
  public set nodeServerEdition(value: string) {
    this._nodeServerEdition = value;
  }
  public resetNodeServerEdition() {
    this._nodeServerEdition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeServerEditionInput() {
    return this._nodeServerEdition;
  }

  // node_storage_quota_in_mb - computed: true, optional: true, required: false
  private _nodeStorageQuotaInMb?: number; 
  public get nodeStorageQuotaInMb() {
    return this.getNumberAttribute('node_storage_quota_in_mb');
  }
  public set nodeStorageQuotaInMb(value: number) {
    this._nodeStorageQuotaInMb = value;
  }
  public resetNodeStorageQuotaInMb() {
    this._nodeStorageQuotaInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStorageQuotaInMbInput() {
    return this._nodeStorageQuotaInMb;
  }

  // node_vcores - computed: true, optional: true, required: false
  private _nodeVcores?: number; 
  public get nodeVcores() {
    return this.getNumberAttribute('node_vcores');
  }
  public set nodeVcores(value: number) {
    this._nodeVcores = value;
  }
  public resetNodeVcores() {
    this._nodeVcores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeVcoresInput() {
    return this._nodeVcores;
  }

  // point_in_time_in_utc - computed: false, optional: true, required: false
  private _pointInTimeInUtc?: string; 
  public get pointInTimeInUtc() {
    return this.getStringAttribute('point_in_time_in_utc');
  }
  public set pointInTimeInUtc(value: string) {
    this._pointInTimeInUtc = value;
  }
  public resetPointInTimeInUtc() {
    this._pointInTimeInUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeInUtcInput() {
    return this._pointInTimeInUtc;
  }

  // preferred_primary_zone - computed: false, optional: true, required: false
  private _preferredPrimaryZone?: string; 
  public get preferredPrimaryZone() {
    return this.getStringAttribute('preferred_primary_zone');
  }
  public set preferredPrimaryZone(value: string) {
    this._preferredPrimaryZone = value;
  }
  public resetPreferredPrimaryZone() {
    this._preferredPrimaryZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredPrimaryZoneInput() {
    return this._preferredPrimaryZone;
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
    return this._resourceGroupName;
  }

  // servers - computed: true, optional: false, required: false
  private _servers = new CosmosdbPostgresqlClusterServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }

  // shards_on_coordinator_enabled - computed: true, optional: true, required: false
  private _shardsOnCoordinatorEnabled?: boolean | cdktf.IResolvable; 
  public get shardsOnCoordinatorEnabled() {
    return this.getBooleanAttribute('shards_on_coordinator_enabled');
  }
  public set shardsOnCoordinatorEnabled(value: boolean | cdktf.IResolvable) {
    this._shardsOnCoordinatorEnabled = value;
  }
  public resetShardsOnCoordinatorEnabled() {
    this._shardsOnCoordinatorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardsOnCoordinatorEnabledInput() {
    return this._shardsOnCoordinatorEnabled;
  }

  // source_location - computed: false, optional: true, required: false
  private _sourceLocation?: string; 
  public get sourceLocation() {
    return this.getStringAttribute('source_location');
  }
  public set sourceLocation(value: string) {
    this._sourceLocation = value;
  }
  public resetSourceLocation() {
    this._sourceLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationInput() {
    return this._sourceLocation;
  }

  // source_resource_id - computed: false, optional: true, required: false
  private _sourceResourceId?: string; 
  public get sourceResourceId() {
    return this.getStringAttribute('source_resource_id');
  }
  public set sourceResourceId(value: string) {
    this._sourceResourceId = value;
  }
  public resetSourceResourceId() {
    this._sourceResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceResourceIdInput() {
    return this._sourceResourceId;
  }

  // sql_version - computed: true, optional: true, required: false
  private _sqlVersion?: string; 
  public get sqlVersion() {
    return this.getStringAttribute('sql_version');
  }
  public set sqlVersion(value: string) {
    this._sqlVersion = value;
  }
  public resetSqlVersion() {
    this._sqlVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlVersionInput() {
    return this._sqlVersion;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new CosmosdbPostgresqlClusterMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: CosmosdbPostgresqlClusterMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CosmosdbPostgresqlClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CosmosdbPostgresqlClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      administrator_login_password: cdktf.stringToTerraform(this._administratorLoginPassword),
      citus_version: cdktf.stringToTerraform(this._citusVersion),
      coordinator_public_ip_access_enabled: cdktf.booleanToTerraform(this._coordinatorPublicIpAccessEnabled),
      coordinator_server_edition: cdktf.stringToTerraform(this._coordinatorServerEdition),
      coordinator_storage_quota_in_mb: cdktf.numberToTerraform(this._coordinatorStorageQuotaInMb),
      coordinator_vcore_count: cdktf.numberToTerraform(this._coordinatorVcoreCount),
      ha_enabled: cdktf.booleanToTerraform(this._haEnabled),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      node_public_ip_access_enabled: cdktf.booleanToTerraform(this._nodePublicIpAccessEnabled),
      node_server_edition: cdktf.stringToTerraform(this._nodeServerEdition),
      node_storage_quota_in_mb: cdktf.numberToTerraform(this._nodeStorageQuotaInMb),
      node_vcores: cdktf.numberToTerraform(this._nodeVcores),
      point_in_time_in_utc: cdktf.stringToTerraform(this._pointInTimeInUtc),
      preferred_primary_zone: cdktf.stringToTerraform(this._preferredPrimaryZone),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      shards_on_coordinator_enabled: cdktf.booleanToTerraform(this._shardsOnCoordinatorEnabled),
      source_location: cdktf.stringToTerraform(this._sourceLocation),
      source_resource_id: cdktf.stringToTerraform(this._sourceResourceId),
      sql_version: cdktf.stringToTerraform(this._sqlVersion),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      maintenance_window: cosmosdbPostgresqlClusterMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      timeouts: cosmosdbPostgresqlClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrator_login_password: {
        value: cdktf.stringToHclTerraform(this._administratorLoginPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      citus_version: {
        value: cdktf.stringToHclTerraform(this._citusVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      coordinator_public_ip_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._coordinatorPublicIpAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      coordinator_server_edition: {
        value: cdktf.stringToHclTerraform(this._coordinatorServerEdition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      coordinator_storage_quota_in_mb: {
        value: cdktf.numberToHclTerraform(this._coordinatorStorageQuotaInMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      coordinator_vcore_count: {
        value: cdktf.numberToHclTerraform(this._coordinatorVcoreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ha_enabled: {
        value: cdktf.booleanToHclTerraform(this._haEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_public_ip_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._nodePublicIpAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_server_edition: {
        value: cdktf.stringToHclTerraform(this._nodeServerEdition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_storage_quota_in_mb: {
        value: cdktf.numberToHclTerraform(this._nodeStorageQuotaInMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_vcores: {
        value: cdktf.numberToHclTerraform(this._nodeVcores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      point_in_time_in_utc: {
        value: cdktf.stringToHclTerraform(this._pointInTimeInUtc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_primary_zone: {
        value: cdktf.stringToHclTerraform(this._preferredPrimaryZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shards_on_coordinator_enabled: {
        value: cdktf.booleanToHclTerraform(this._shardsOnCoordinatorEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_location: {
        value: cdktf.stringToHclTerraform(this._sourceLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_resource_id: {
        value: cdktf.stringToHclTerraform(this._sourceResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_version: {
        value: cdktf.stringToHclTerraform(this._sqlVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      maintenance_window: {
        value: cosmosdbPostgresqlClusterMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosmosdbPostgresqlClusterMaintenanceWindowList",
      },
      timeouts: {
        value: cosmosdbPostgresqlClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CosmosdbPostgresqlClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}

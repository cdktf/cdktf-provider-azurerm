// https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisEnterpriseDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#client_protocol RedisEnterpriseDatabase#client_protocol}
  */
  readonly clientProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#cluster_id RedisEnterpriseDatabase#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#clustering_policy RedisEnterpriseDatabase#clustering_policy}
  */
  readonly clusteringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#eviction_policy RedisEnterpriseDatabase#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#name RedisEnterpriseDatabase#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#port RedisEnterpriseDatabase#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#resource_group_name RedisEnterpriseDatabase#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * module block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#module RedisEnterpriseDatabase#module}
  */
  readonly module?: RedisEnterpriseDatabaseModule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#timeouts RedisEnterpriseDatabase#timeouts}
  */
  readonly timeouts?: RedisEnterpriseDatabaseTimeouts;
}
export interface RedisEnterpriseDatabaseModule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#args RedisEnterpriseDatabase#args}
  */
  readonly args?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#name RedisEnterpriseDatabase#name}
  */
  readonly name: string;
}

function redisEnterpriseDatabaseModuleToTerraform(struct?: RedisEnterpriseDatabaseModule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.stringToTerraform(struct!.args),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface RedisEnterpriseDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#create RedisEnterpriseDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#delete RedisEnterpriseDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#read RedisEnterpriseDatabase#read}
  */
  readonly read?: string;
}

function redisEnterpriseDatabaseTimeoutsToTerraform(struct?: RedisEnterpriseDatabaseTimeoutsOutputReference | RedisEnterpriseDatabaseTimeouts): any {
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

export class RedisEnterpriseDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html azurerm_redis_enterprise_database}
*/
export class RedisEnterpriseDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_redis_enterprise_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html azurerm_redis_enterprise_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisEnterpriseDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: RedisEnterpriseDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_redis_enterprise_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clientProtocol = config.clientProtocol;
    this._clusterId = config.clusterId;
    this._clusteringPolicy = config.clusteringPolicy;
    this._evictionPolicy = config.evictionPolicy;
    this._name = config.name;
    this._port = config.port;
    this._resourceGroupName = config.resourceGroupName;
    this._module = config.module;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_protocol - computed: false, optional: true, required: false
  private _clientProtocol?: string | undefined; 
  public get clientProtocol() {
    return this.getStringAttribute('client_protocol');
  }
  public set clientProtocol(value: string | undefined) {
    this._clientProtocol = value;
  }
  public resetClientProtocol() {
    this._clientProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProtocolInput() {
    return this._clientProtocol
  }

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

  // clustering_policy - computed: false, optional: true, required: false
  private _clusteringPolicy?: string | undefined; 
  public get clusteringPolicy() {
    return this.getStringAttribute('clustering_policy');
  }
  public set clusteringPolicy(value: string | undefined) {
    this._clusteringPolicy = value;
  }
  public resetClusteringPolicy() {
    this._clusteringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringPolicyInput() {
    return this._clusteringPolicy
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string | undefined; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string | undefined) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // port - computed: false, optional: true, required: false
  private _port?: number | undefined; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // module - computed: false, optional: true, required: false
  private _module?: RedisEnterpriseDatabaseModule[] | undefined; 
  public get module() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('module') as any;
  }
  public set module(value: RedisEnterpriseDatabaseModule[] | undefined) {
    this._module = value;
  }
  public resetModule() {
    this._module = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RedisEnterpriseDatabaseTimeouts | undefined; 
  private __timeoutsOutput = new RedisEnterpriseDatabaseTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: RedisEnterpriseDatabaseTimeouts | undefined) {
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
      client_protocol: cdktf.stringToTerraform(this._clientProtocol),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      clustering_policy: cdktf.stringToTerraform(this._clusteringPolicy),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      module: cdktf.listMapper(redisEnterpriseDatabaseModuleToTerraform)(this._module),
      timeouts: redisEnterpriseDatabaseTimeoutsToTerraform(this._timeouts),
    };
  }
}
